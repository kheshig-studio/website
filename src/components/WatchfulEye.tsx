import { useEffect, useRef } from "react"

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`

/* ─────────────────────────────────────────────────────────────
   GÖZCÜ — the watchful eye.

   Kheshig was the imperial guard, and the mark is an eye, so the
   background is that eye: awake, scanning, blinking. The lens shape
   is built the way the logo builds it — the intersection of two
   circles, which is what gives the sharp points at both corners.

   For half-width a and half-height b, the two circles sit at
   (0, ±c) with radius R, where c = (a²-b²)/2b and R = b + c.
   ───────────────────────────────────────────────────────────── */
const FRAG = `
precision highp float;

uniform vec2  uRes;
uniform float uTime;
uniform vec2  uCenter;
uniform float uScale;
uniform float uSpeed;
uniform float uIntensity;

const vec3 CRIMSON = vec3(0.537, 0.000, 0.000);  /* #890000 */
const vec3 LIT     = vec3(0.847, 0.220, 0.176);  /* #D8382D */
const vec3 BONE    = vec3(0.957, 0.949, 0.937);

float hash11(float n){ return fract(sin(n) * 43758.5453123); }

float hash21(vec2 p){
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++){
    v += a * noise(p);
    p *= 2.05;
    a *= 0.5;
  }
  return v;
}

/* signed distance to the lens: negative inside, 0 on the lid line */
float eyeSDF(vec2 p, float a, float b){
  b = max(b, 0.0005);
  float R = (a * a + b * b) / (2.0 * b);
  float c = R - b;
  float d1 = length(p - vec2(0.0, -c)) - R;
  float d2 = length(p - vec2(0.0,  c)) - R;
  return max(d1, d2);
}

void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float aspect = uRes.x / uRes.y;
  uv -= vec2(uCenter.x * 0.5 * aspect, uCenter.y * 0.5);
  uv *= uScale;

  float t = uTime * uSpeed;

  /* ── gaze: hold, then a fast saccade to somewhere new ── */
  float SEG = 2.9;
  float seg = floor(t / SEG);
  float f   = fract(t / SEG);
  vec2 g0 = vec2(hash11(seg * 7.13), hash11(seg * 3.71 + 19.3)) - 0.5;
  vec2 g1 = vec2(hash11((seg + 1.0) * 7.13), hash11((seg + 1.0) * 3.71 + 19.3)) - 0.5;
  vec2 gaze = mix(g0, g1, smoothstep(0.0, 0.10, f)) * vec2(0.46, 0.24);
  /* a slow breath on top, so it never sits perfectly still */
  gaze += vec2(sin(t * 0.31), cos(t * 0.23)) * 0.014;

  /* ── blink: a quick squeeze of the lid ── */
  float bt    = fract(t / 6.1);
  float blink = 1.0 - 0.94 * exp(-pow((bt - 0.04) * 46.0, 2.0));

  float A = 0.80;                  /* half-width  */
  float B = 0.30 * blink;          /* half-height */

  float d = eyeSDF(uv, A, B);
  float insideEye = 1.0 - smoothstep(-0.004, 0.004, d);

  vec3 col = vec3(0.0);

  /* ── ambient: the dark the eye sits in ── */
  float haze = fbm(uv * 1.3 + vec2(t * 0.010, -t * 0.007));
  col += CRIMSON * 0.045 * uIntensity * haze * (1.0 - smoothstep(0.2, 1.5, length(uv)));

  /* ── the eye's interior ── */
  vec2  ip   = uv - gaze;
  float irisR = 0.235;
  float ir   = length(vec2(ip.x, ip.y * 1.06));

  /* sclera: not white — a dim ember behind the iris */
  float sclera = insideEye * (1.0 - smoothstep(irisR * 0.9, A * 0.95, length(uv - gaze * 0.4)));
  col += CRIMSON * sclera * 0.30 * uIntensity;

  /* iris: banded, slowly turning */
  float irMask = insideEye * (1.0 - smoothstep(irisR - 0.012, irisR, ir));
  float ang    = atan(ip.y, ip.x);
  float fib    = 0.5 + 0.5 * sin(ang * 34.0 + t * 0.5 + fbm(ip * 6.0) * 5.0);
  float radial = smoothstep(0.0, irisR, ir);
  vec3  irisCol = mix(LIT, CRIMSON, radial);
  col += irisCol * irMask * (0.42 + 0.55 * fib * radial) * uIntensity;

  /* limbal ring — the dark rim that makes an iris read as an iris */
  float limbal = insideEye * exp(-pow((ir - irisR) / 0.022, 2.0));
  col *= 1.0 - 0.72 * limbal;

  /* pupil: a vertical slit */
  float pr = length(vec2(ip.x / 0.30, ip.y / 1.00));
  float pupil = insideEye * (1.0 - smoothstep(irisR * 0.60, irisR * 0.66, pr));
  col *= 1.0 - 0.985 * pupil;

  /* catchlight */
  float spec = exp(-pow(length(ip - vec2(-0.055, 0.062)) / 0.020, 2.0));
  col += BONE * spec * insideEye * 0.55;

  /* ── the lid: a hard bright edge, like the mark's contour ── */
  float lid = exp(-pow(d / 0.0075, 2.0));
  col += mix(LIT, BONE, 0.45) * lid * 0.95;
  /* and a soft bleed outward so it is not a sticker on black */
  col += CRIMSON * exp(-pow(max(d, 0.0) / 0.085, 2.0)) * 0.30 * uIntensity;

  /* lashes / corner spikes: the mark's sharp tips, exaggerated */
  float tipL = exp(-pow((uv.x + A) / 0.10, 2.0)) * exp(-pow(uv.y / 0.030, 2.0));
  float tipR = exp(-pow((uv.x - A) / 0.10, 2.0)) * exp(-pow(uv.y / 0.030, 2.0));
  col += LIT * (tipL + tipR) * 0.40;

  /* grain, so the flats never band */
  float g = hash21(gl_FragCoord.xy + fract(t) * 91.7);
  col += (g - 0.5) * 0.016;

  col *= 1.0 - 0.38 * smoothstep(0.6, 1.8, length(uv));
  col = col / (1.0 + col * 0.30);
  gl_FragColor = vec4(col, 1.0);
}
`

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type)!
  gl.shaderSource(sh, src)
  gl.compileShader(sh)
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.error("shader:", gl.getShaderInfoLog(sh))
    gl.deleteShader(sh)
    return null
  }
  return sh
}

export type WatchfulEyeProps = {
  center?: [number, number]
  scale?: number
  speed?: number
  intensity?: number
  live?: { current: Partial<WatchfulEyeProps> | null }
  className?: string
}

export function WatchfulEye({
  center = [0, 0],
  scale = 1,
  speed = 1,
  intensity = 1,
  live,
  className,
}: WatchfulEyeProps) {
  const ref = useRef<HTMLCanvasElement | null>(null)
  const cfg = useRef({ center, scale, speed, intensity })
  cfg.current = { center, scale, speed, intensity }
  const liveRef = useRef(live)
  liveRef.current = live

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const gl =
      (canvas.getContext("webgl", { antialias: false, alpha: false }) as WebGLRenderingContext | null) ??
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null)
    if (!gl) return

    const vs = compile(gl, gl.VERTEX_SHADER, VERT)
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG)
    if (!vs || !fs) return

    const prog = gl.createProgram()!
    gl.attachShader(prog, vs)
    gl.attachShader(prog, fs)
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error("link:", gl.getProgramInfoLog(prog))
      return
    }
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, "aPos")
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const U = {
      res: gl.getUniformLocation(prog, "uRes"),
      time: gl.getUniformLocation(prog, "uTime"),
      center: gl.getUniformLocation(prog, "uCenter"),
      scale: gl.getUniformLocation(prog, "uScale"),
      speed: gl.getUniformLocation(prog, "uSpeed"),
      intensity: gl.getUniformLocation(prog, "uIntensity"),
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    const resize = () => {
      const w = Math.floor(canvas.clientWidth * dpr)
      const h = Math.floor(canvas.clientHeight * dpr)
      if (w > 0 && h > 0 && (canvas.width !== w || canvas.height !== h)) {
        canvas.width = w
        canvas.height = h
        gl.viewport(0, 0, w, h)
      }
      gl.uniform2f(U.res, canvas.width, canvas.height)
    }
    resize()
    window.addEventListener("resize", resize)

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let raf = 0
    let running = true
    const start = performance.now()

    const draw = (t: number) => {
      const c = cfg.current
      const l = liveRef.current?.current
      const ce = l?.center ?? c.center
      gl.uniform1f(U.time, (t - start) / 1000)
      gl.uniform2f(U.center, ce[0], ce[1])
      gl.uniform1f(U.scale, l?.scale ?? c.scale)
      gl.uniform1f(U.speed, l?.speed ?? c.speed)
      gl.uniform1f(U.intensity, l?.intensity ?? c.intensity)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    const loop = (now: number) => {
      if (!running) return
      resize()
      draw(now)
      raf = requestAnimationFrame(loop)
    }
    if (reduced) draw(start + 1200)
    else raf = requestAnimationFrame(loop)

    const onVis = () => {
      if (reduced) return
      if (document.hidden) {
        running = false
        cancelAnimationFrame(raf)
      } else if (!running) {
        running = true
        raf = requestAnimationFrame(loop)
      }
    }
    document.addEventListener("visibilitychange", onVis)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      document.removeEventListener("visibilitychange", onVis)
      gl.deleteProgram(prog)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
      gl.deleteBuffer(buf)
    }
  }, [])

  return <canvas ref={ref} aria-hidden className={className} />
}

export default WatchfulEye
