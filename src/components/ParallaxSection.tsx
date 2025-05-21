"use client";
import { useEffect, useState } from "react";

const ParallaxSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[400px] overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: "url('/img/nuestrosServicios.jpg')",
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
        <h2 className="text-4xl font-bold text-yellow-400">Nuestros Servicios</h2>
      </div>
    </div>
  );
};

export default ParallaxSection;