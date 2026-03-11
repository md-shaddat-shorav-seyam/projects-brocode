import { useEffect, useRef } from "react";
import s from "./slider.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Slider() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(containerRef.current.h1, {
    //   x: "-5000%",
    transform: "translateX(-150%)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        scrub: true,
        pin:true
      }
    });
  }, []);

  return (
    <div ref={containerRef} className={s.container}>
      <h1 className={s.sliderText}>hi i am seyam</h1>
    </div>
  );
}