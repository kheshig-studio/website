import { useEffect, useRef } from "react"

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`

/* ─────────────────────────────────────────────────────────────
   Ray-traced Schwarzschild black hole.

   Light is bent by integrating the null geodesic: a Newtonian pull
   plus the GR term -1.5 * h^2 * r / |r|^5, where h = r x v is the
   conserved specific angular momentum. That term produces the photon
   sphere and lets rays curve far enough to show the FAR side of the
   disk arcing over and under the shadow — the look no stylised 2-D
   drawing reproduces.

   Two things keep it clean:
   - the disk is an optically thick SLAB, so near gas hides far gas
     (without this an edge-on ray saturates into a flat bar);
   - its texture is sampled in rotated 2-D coordinates, never through
     atan(), so there is no branch-cut seam.

   Distances are in Schwarzschild radii: the horizon is r = 1.
   ───────────────────────────────────────────────────────────── */
const FRAG = `
precision highp float;

uniform vec2  uRes;
uniform float uTime;
uniform vec2  uCenter;
uniform float uScale;
uniform float uDisk;
uniform float uTilt;
uniform float uSpeed;
uniform float uVariant;

const int   STEPS    = 180;
const float DISK_IN  = 2.7;
const float DISK_OUT = 10.0;
const float CAM_DIST = 34.0;

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
  for (int i = 0; i < 5; i++){
    v += a * noise(p);
    p *= 2.03;
    a *= 0.5;
  }
  return v;
}

float starLayer(vec2 g, float thresh, float t){
  vec2 c = floor(g), f = fract(g);
  float h = hash21(c);
  if (h < thresh) return 0.0;
  vec2 sp = vec2(hash21(c + 1.37), hash21(c + 7.71));
  float s = smoothstep(0.19, 0.0, length(f - sp));
  s *= 0.45 + 0.55 * sin(t * 1.2 + h * 60.0);
  return s * (h - thresh) / (1.0 - thresh);
}

vec3 starField(vec3 d, float t){
  vec2 sph = vec2(atan(d.z, d.x), acos(clamp(d.y, -1.0, 1.0)));
  float s1 = starLayer(sph * 42.0, 0.972, t);
  float s2 = starLayer(sph * 88.0 + 11.7, 0.986, t * 0.8) * 0.6;
  return (s1 + s2) * vec3(0.74, 0.86, 1.0) * 1.1;
}

/* emissivity inside the disk slab */
vec3 diskSample(vec3 hit, vec3 vel, float t, vec3 hot, vec3 cool, float strandK){
  float rd = length(hit.xz);

  /* Keplerian shear, sampled seam-free: rotate the xz position by a
     radius-dependent angle, then read noise in plain 2-D. */
  float omega = 7.0 / pow(max(rd, 1.0), 1.5);
  float a  = omega * t;
  vec2  p  = mat2(cos(a), -sin(a), sin(a), cos(a)) * hit.xz;

  float warp = fbm(p * 0.22);
  float sN   = fbm(vec2(rd * strandK + warp * 3.5, warp * 2.2));
  float strands = 1.0 - abs(sN * 2.0 - 1.0);      /* ridged -> fine sheets */
  strands = pow(clamp(strands, 0.0, 1.0), 2.2);

  float edgeIn  = smoothstep(DISK_IN, DISK_IN + 0.7, rd);
  float edgeOut = 1.0 - smoothstep(DISK_OUT - 3.5, DISK_OUT, rd);
  float fall    = pow(clamp((DISK_OUT - rd) / (DISK_OUT - DISK_IN), 0.0, 1.0), 0.85);

  float density = edgeIn * edgeOut * fall * (0.14 + 1.05 * strands);
  density *= 1.0 + 1.5 * smoothstep(7.5, DISK_IN, rd);

  /* relativistic beaming, kept gentle so the whole ring stays visible */
  vec3  orbit = normalize(vec3(-hit.z, 0.0, hit.x));
  float beam  = clamp(1.0 + 0.95 * dot(orbit, -normalize(vel)), 0.38, 2.0);

  float heat = smoothstep(DISK_OUT * 0.55, DISK_IN, rd);
  vec3  tint = mix(cool, hot, heat * 0.9);
  return tint * density * beam * 2.1;
}

void main(){
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float aspect = uRes.x / uRes.y;
  p -= vec2(uCenter.x * 0.5 * aspect, uCenter.y * 0.5);
  p *= uScale;

  float t = uTime * uSpeed;
  int   v = int(uVariant + 0.5);

  vec3  hot, cool;
  float strandK;
  if (v == 0){            /* brand turquoise */
    hot = vec3(0.92, 1.00, 0.99); cool = vec3(0.12, 0.85, 0.74); strandK = 2.4;
  } else if (v == 1){     /* ember, closest to the film */
    hot = vec3(1.00, 0.95, 0.86); cool = vec3(1.00, 0.40, 0.10); strandK = 2.4;
  } else if (v == 2){     /* finer striations */
    hot = vec3(0.95, 1.00, 1.00); cool = vec3(0.20, 0.80, 0.80); strandK = 4.6;
  } else if (v == 3){     /* molten */
    hot = vec3(1.00, 0.90, 0.58); cool = vec3(0.95, 0.17, 0.05); strandK = 1.8;
  } else {                /* cold steel */
    hot = vec3(0.96, 0.99, 1.00); cool = vec3(0.38, 0.68, 1.00); strandK = 3.0;
  }

  /* camera: uTilt lifts it off the disk plane */
  float camY   = clamp(uTilt, 0.04, 1.0) * 9.0;
  vec3  camPos = vec3(0.0, camY, -CAM_DIST);

  vec3 fwd   = normalize(vec3(0.0) - camPos);
  vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), fwd));
  vec3 up    = cross(fwd, right);
  vec3 dir   = normalize(fwd * 1.8 + right * p.x + up * p.y);

  vec3  pos = camPos;
  vec3  vel = dir;
  vec3  h   = cross(pos, vel);
  float h2  = dot(h, h);

  vec3  col      = vec3(0.0);
  float transmit = 1.0;
  bool  captured = false;

  for (int i = 0; i < STEPS; i++){
    float r = length(pos);
    if (r < 1.0) { captured = true; break; }
    if (r > 46.0) break;

    float dt = clamp(0.035 * r, 0.012, 0.60);
    if (length(pos.xz) < DISK_OUT + 1.5 && abs(pos.y) < 1.4) dt = min(dt, 0.05);

    vec3 acc = -1.5 * h2 * pos / pow(r, 5.0);
    vel += acc * dt;
    pos += vel * dt;

    float rd = length(pos.xz);
    if (rd > DISK_IN && rd < DISK_OUT){
      float thick = 0.150 * rd + 0.32;
      float vert  = abs(pos.y) / thick;
      if (vert < 1.0){
        float soft = 1.0 - vert * vert;
        float dens = soft * 2.0;
        col      += transmit * diskSample(pos, vel, t, hot, cool, strandK) * uDisk * dens * dt;
        transmit *= exp(-dens * dt * 1.3);
        if (transmit < 0.015) break;
      }
    }
  }

  if (!captured) col += transmit * starField(normalize(vel), t);

  col = col / (1.0 + col);
  col = pow(col, vec3(0.95));
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

export const BLACK_HOLES = [
  { id: 0, name: "Turkuaz", note: "Işın izlemeli — marka rengimizde" },
  { id: 1, name: "Gargantua", note: "Işın izlemeli — beyaz-turuncu ateş, filme en yakın" },
  { id: 2, name: "Filament", note: "Işın izlemeli — çok ince katman detayı" },
  { id: 3, name: "Alev", note: "Işın izlemeli — erimiş kızıl, kalın akış" },
  { id: 4, name: "Buz", note: "Işın izlemeli — çelik mavisi, soğuk ton" },
]

export type BlackHoleProps = {
  accent?: [number, number, number]
  center?: [number, number]
  scale?: number
  disk?: number
  /** camera height above the disk plane — low is edge-on */
  tilt?: number
  speed?: number
  variant?: number
  live?: { current: Partial<BlackHoleProps> | null }
  className?: string
}

export function BlackHole({
  accent = [0.18, 0.88, 0.78],
  center = [0, 0],
  scale = 1.3,
  disk = 1,
  tilt = 0.16,
  speed = 1,
  variant = 0,
  live,
  className,
}: BlackHoleProps) {
  const ref = useRef<HTMLCanvasElement | null>(null)
  const cfg = useRef({ accent, center, scale, disk, tilt, speed, variant })
  cfg.current = { accent, center, scale, disk, tilt, speed, variant }
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
      disk: gl.getUniformLocation(prog, "uDisk"),
      tilt: gl.getUniformLocation(prog, "uTilt"),
      speed: gl.getUniformLocation(prog, "uSpeed"),
      variant: gl.getUniformLocation(prog, "uVariant"),
    }

    /* ray-marched: keep the pixel count sane */
    const dpr = Math.min(window.devicePixelRatio || 1, 1.15)
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
      gl.uniform1f(U.disk, l?.disk ?? c.disk)
      gl.uniform1f(U.tilt, l?.tilt ?? c.tilt)
      gl.uniform1f(U.speed, l?.speed ?? c.speed)
      gl.uniform1f(U.variant, l?.variant ?? c.variant)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    const loop = (now: number) => {
      if (!running) return
      resize()
      draw(now)
      raf = requestAnimationFrame(loop)
    }
    if (reduced) draw(start + 8000)
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

export default BlackHole
