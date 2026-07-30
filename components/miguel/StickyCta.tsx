"use client";

import { useEffect, useState } from "react";

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#consulta-form"
      className="miguel-btn miguel-sticky-cta"
      style={{
        position: "fixed",
        left: "1rem",
        right: "1rem",
        bottom: "1rem",
        zIndex: 40,
        justifyContent: "center",
        boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
      }}
    >
      Revisar mi caso →
    </a>
  );
}
