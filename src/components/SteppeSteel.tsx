import { useEffect, useRef } from "react"

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`

/* ─────────────────────────────────────────────────────────────
   BOZKIR ÇELİĞİ — steppe steel.

   The Kheshig mark is built from blade-like sweeps: curves that are
   fat in the middle and taper to a point at both ends. This takes
   that one shape and repeats it at different radii and speeds, so
   the background is the logo's own geometry rather than an image
   borrowed from somewhere else.

   Each blade is an arc of a circle whose thickness is tapered by
   its angle, which is what gives the sharp tips.
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

vec2 rot(vec2 p, float a){
  float c = cos(a), s = sin(a);
  return mat2(c, -s, s, c) * p;
}

/* one blade: an arc that tapers to a point at both ends */
float blade(vec2 p, float R, float span, float w, float sharp){
  float a = atan(p.y, p.x);
  if (abs(a) > span) return 0.0;
  float u     = a / span;
  float taper = pow(max(0.0, 1.0 - u * u), sharp);
  float th    = w * taper;
  if (th < 0.0002) return 0.0;
  float d = abs(length(p) - R);
  return 1.0 - smoothstep(th * 0.45, th, d);
}

void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float aspect = uRes.x / uRes.y;
  uv -= vec2(uCenter.x * 0.5 * aspect, uCenter.y * 0.5);
  uv *= uScale;

  float t = uTime * uSpeed;

  vec3 col = vec3(0.0);
  float ink = 0.0;   /* accumulated blade coverage, for the glow */

  /* ── the blades ────────────────────────────────────────
     Each one drifts at its own rate; nothing loops in sync. */
  float m1 = blade(rot(uv - vec2(0.06, 0.02), 0.35 + t * 0.021), 0.62, 1.15, 0.085, 1.7);
  float m2 = blade(rot(uv + vec2(0.10, 0.05), 2.55 - t * 0.016), 0.88, 1.05, 0.062, 1.9);
  float m3 = blade(rot(uv - vec2(0.02, 0.12), 4.10 + t * 0.013), 1.18, 0.95, 0.048, 2.1);
  float m4 = blade(rot(uv + vec2(0.14, 0.00), 5.40 - t * 0.010), 1.52, 0.85, 0.036, 2.3);
  float m5 = blade(rot(uv - vec2(0.18, 0.08), 1.60 + t * 0.028), 0.40, 1.25, 0.052, 1.5);
  float m6 = blade(rot(uv + vec2(0.05, 0.16), 3.30 - t * 0.024), 2.00, 0.70, 0.026, 2.4);

  /* fill: the brand red, hotter on the inner blades */
  col += mix(CRIMSON, LIT, 0.55) * m1 * 0.95;
  col += CRIMSON * m2 * 0.80;
  col += mix(CRIMSON, LIT, 0.25) * m3 * 0.62;
  col += CRIMSON * m4 * 0.45;
  col += mix(CRIMSON, LIT, 0.75) * m5 * 0.85;
  col += CRIMSON * m6 * 0.32;
  ink = max(max(max(m1, m2), max(m3, m4)), max(m5, m6));

  /* ── edges ────────────────────────────────────────────
     A hairline of bone along the thin side of each blade, the way
     the mark carries a hard outline against its fill. */
  float e1 = m1 - blade(rot(uv - vec2(0.06, 0.02), 0.35 + t * 0.021), 0.62, 1.15, 0.085 * 0.72, 1.7);
  float e5 = m5 - blade(rot(uv - vec2(0.18, 0.08), 1.60 + t * 0.028), 0.40, 1.25, 0.052 * 0.70, 1.5);
  float e2 = m2 - blade(rot(uv + vec2(0.10, 0.05), 2.55 - t * 0.016), 0.88, 1.05, 0.062 * 0.74, 1.9);
  col += BONE * (max(e1, 0.0) * 0.30 + max(e5, 0.0) * 0.26 + max(e2, 0.0) * 0.16);

  /* ── forge glow: the steel is warm where it is thickest ── */
  float haze = fbm(uv * 1.4 + vec2(t * 0.012, -t * 0.008));
  col += CRIMSON * ink * (0.25 + 0.45 * haze) * 0.55 * uIntensity;
  col += CRIMSON * 0.045 * uIntensity * exp(-length(uv) * 1.6);

  /* ── grain: keeps the flats from banding ─────────────── */
  float g = hash21(gl_FragCoord.xy + fract(t) * 91.7);
  col += (g - 0.5) * 0.016;

  /* vignette */
  col *= 1.0 - 0.40 * smoothstep(0.55, 1.65, length(uv));

  col = col / (1.0 + col * 0.35);
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

export type SteppeSteelProps = {
  center?: [number, number]
  scale?: number
  speed?: number
  intensity?: number
  live?: { current: Partial<SteppeSteelProps> | null }
  className?: string
}

export function SteppeSteel({
  center = [0, 0],
  scale = 1,
  speed = 1,
  intensity = 1,
  live,
  className,
}: SteppeSteelProps) {
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
    if (reduced) draw(start + 6000)
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

export default SteppeSteel
