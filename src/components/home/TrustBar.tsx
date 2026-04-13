"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { STATS } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface CountUpProps {
  readonly target: number;
  readonly suffix: string;
  readonly inView: boolean;
}

function CountUp({ target, suffix, inView }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let frame: number;
    const duration = 2000;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    }

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-bg-light py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 sm:p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <p className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gold mb-2">
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </p>
              <p className="font-body text-sm sm:text-base text-navy font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
