import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { useRouter } from "next/router";

const MotionContext = createContext({ enabled: false });
let memoryPaused = false;
const motionChangeEvent = "jesse-motion-change";

function readMotionPreference() {
  let paused = memoryPaused;
  try {
    paused = localStorage.getItem("jesse-motion") === "paused";
  } catch {}
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (paused ? "1" : "0") + (reduced ? "1" : "0");
}

function subscribeToMotionPreference(notify) {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  preference.addEventListener("change", notify);
  window.addEventListener("storage", notify);
  window.addEventListener(motionChangeEvent, notify);
  return () => {
    preference.removeEventListener("change", notify);
    window.removeEventListener("storage", notify);
    window.removeEventListener(motionChangeEvent, notify);
  };
}

const serverMotionPreference = () => "pending";

export function MotionProvider({ children }) {
  const preference = useSyncExternalStore(
    subscribeToMotionPreference,
    readMotionPreference,
    serverMotionPreference,
  );
  const ready = preference !== "pending";
  const paused = ready && preference[0] === "1";
  const reduced = ready && preference[1] === "1";
  function toggle() {
    memoryPaused = !paused;
    try {
      localStorage.setItem("jesse-motion", memoryPaused ? "paused" : "playing");
    } catch {}
    window.dispatchEvent(new Event(motionChangeEvent));
  }
  const enabled = ready && !paused && !reduced;
  return (
    <MotionContext.Provider value={{ enabled, paused, reduced, toggle }}>
      <div
        className={enabled ? "motion-enabled" : "motion-disabled"}
        data-motion={enabled ? "playing" : "paused"}
      >
        {children}
      </div>
    </MotionContext.Provider>
  );
}

export function MotionToggle() {
  const { paused, reduced, toggle } = useContext(MotionContext);
  return (
    <button
      type="button"
      className="motion-toggle"
      onClick={toggle}
      disabled={reduced}
      aria-pressed={paused || reduced}
    >
      <span className="motion-toggle-icon" aria-hidden="true">
        {paused || reduced ? "▷" : "Ⅱ"}
      </span>
      {reduced ? "Reduced motion" : paused ? "Resume motion" : "Pause motion"}
    </button>
  );
}

export function MotionSurface({ children }) {
  const { enabled } = useContext(MotionContext);
  const router = useRouter();
  const routePath = router.asPath.split("#")[0];
  const surface = useRef(null);
  useEffect(() => {
    if (!enabled || !surface.current || !("IntersectionObserver" in window))
      return;
    const elements = [...surface.current.querySelectorAll("[data-reveal]")];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-wait");
            entry.target.classList.add("reveal-enter");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight)
        element.classList.add("reveal-enter");
      else {
        element.classList.add("reveal-wait");
        observer.observe(element);
      }
    });
    // Keyboard navigation must never land on content waiting for a scroll reveal.
    const showFocused = (event) => {
      const element = event.target.closest("[data-reveal]");
      if (element?.classList.contains("reveal-wait")) {
        element.classList.remove("reveal-wait");
        observer.unobserve(element);
      }
    };
    const current = surface.current;
    current.addEventListener("focusin", showFocused);
    return () => {
      observer.disconnect();
      current.removeEventListener("focusin", showFocused);
      elements.forEach((element) =>
        element.classList.remove("reveal-wait", "reveal-enter"),
      );
    };
  }, [enabled, routePath]);
  return (
    <div ref={surface} className="motion-surface">
      {children}
    </div>
  );
}

const labels = {
  "/": "Home",
  "/work": "Work",
  "/services": "Services",
  "/about": "About",
  "/contact": "Contact",
};
export function RouteCurtain() {
  const { enabled } = useContext(MotionContext);
  return enabled ? <AnimatedRouteCurtain /> : null;
}

function AnimatedRouteCurtain() {
  const router = useRouter();
  const previous = useRef(router.asPath.split("#")[0]);
  const [transition, setTransition] = useState(null);
  useEffect(() => {
    const showCurtain = (url) => {
      const path = url.split("#")[0];
      if (previous.current !== path)
        setTransition({ path, id: Date.now() });
      previous.current = path;
    };
    router.events.on("routeChangeComplete", showCurtain);
    return () => router.events.off("routeChangeComplete", showCurtain);
  }, [router.events]);
  if (!transition) return null;
  return (
    <div
      key={transition.id}
      className="route-curtain"
      aria-hidden="true"
      onAnimationEnd={(event) => {
        if (event.target.classList.contains("curtain-front"))
          setTransition(null);
      }}
    >
      <div className="curtain-back" />
      <div className="curtain-middle" />
      <div className="curtain-front">
        <span>
          {labels[transition.path] || "Project"}
          <b>Jesse Codes.</b>
        </span>
      </div>
    </div>
  );
}

export function NetworkField() {
  const canvas = useRef(null);
  const { enabled } = useContext(MotionContext);
  useEffect(() => {
    const element = canvas.current;
    const context = element?.getContext("2d");
    if (!context) return;
    let width = 0,
      height = 0,
      nodes = [],
      frame = 0,
      last = 0;
    let visible = true;
    const pointer = { x: -1000, y: -1000 };
    function size() {
      const bounds = element.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      element.width = width * ratio;
      element.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = width < 420 ? 30 : 58;
      nodes = Array.from({ length: count }, (_, i) => ({
        x: ((((Math.sin(i * 127.1 + 1) * 43758.5453) % 1) + 1) % 1) * width,
        y: ((((Math.sin(i * 311.7 + 2) * 25342.7431) % 1) + 1) % 1) * height,
        vx: Math.sin(i * 3.2) * 0.18,
        vy: Math.cos(i * 1.7) * 0.18,
        radius: i % 7 === 0 ? 3 : 1.7,
      }));
      draw(0);
    }
    function draw(step) {
      context.clearRect(0, 0, width, height);
      for (const node of nodes) {
        node.x += node.vx * step;
        node.y += node.vy * step;
        const dx = node.x - pointer.x,
          dy = node.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (step && distance < 115 && distance > 0) {
          node.x += (dx / distance) * (1 - distance / 115) * step * 1.3;
          node.y += (dy / distance) * (1 - distance / 115) * step * 1.3;
        }
        if (node.x < 0 || node.x > width) {
          node.vx *= -1;
          node.x = Math.max(0, Math.min(width, node.x));
        }
        if (node.y < 0 || node.y > height) {
          node.vy *= -1;
          node.y = Math.max(0, Math.min(height, node.y));
        }
      }
      nodes.forEach((a, i) => {
        nodes.slice(i + 1).forEach((b) => {
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance < 135) {
            context.strokeStyle =
              "rgba(40,109,104," + (1 - distance / 135) * 0.32 + ")";
            context.lineWidth = 0.8;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        });
        context.fillStyle = "rgba(40,109,104,0.55)";
        context.beginPath();
        context.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
        context.fill();
      });
    }
    function tick(time) {
      if (!enabled || !visible || document.hidden) {
        frame = 0;
        last = 0;
        return;
      }
      if (time - last >= 32) {
        draw(last ? Math.min((time - last) / 16.67, 3) : 1);
        last = time;
      }
      frame = requestAnimationFrame(tick);
    }
    function resume() {
      if (enabled && visible && !document.hidden && !frame)
        frame = requestAnimationFrame(tick);
    }
    function move(event) {
      const bounds = element.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
    }
    const hero = element.closest(".hero");
    const leave = () => {
      pointer.x = pointer.y = -1000;
    };
    const resize = new ResizeObserver(size);
    resize.observe(element);
    const observer = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      resume();
    });
    observer.observe(element);
    if (enabled) {
      hero.addEventListener("pointermove", move);
      hero.addEventListener("pointerleave", leave);
    }
    document.addEventListener("visibilitychange", resume);
    size();
    resume();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", resume);
    };
  }, [enabled]);
  return <canvas ref={canvas} className="network-field" aria-hidden="true" />;
}
