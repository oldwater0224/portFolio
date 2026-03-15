import { useEffect, useState } from "react";

export function useMouseParallax(factor = 0.02) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setOffset({ x: (e.clientX - cx) * factor, y: (e.clientY - cy) * factor });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [factor]);
  return offset;
}