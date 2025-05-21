"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSolarPanel, FaClock, FaUsers } from "react-icons/fa";

const counters = [
  {
    label: "Instalaciones Completadas",
    value: 200,
    suffix: "+",
    icon: <FaSolarPanel className="text-yellow-400 text-4xl mb-2" />,
  },
  {
    label: "Años de Experiencia",
    value: 8,
    suffix: "+",
    icon: <FaClock className="text-yellow-400 text-4xl mb-2" />,
  },
  {
    label: "Clientes Satisfechos",
    value: 100,
    suffix: "+",
    icon: <FaUsers className="text-yellow-400 text-4xl mb-2" />,
  },
];

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById("stats-counter");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats-counter"
      className="py-24 px-6 bg-gradient-to-r from-[#0a1a2f] to-[#142c4c] text-center text-white"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">
        {counters.map((item, index) => (
          <motion.div
            key={item.label}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            {item.icon}
            <div className="text-5xl font-extrabold text-yellow-400">
              {isVisible ? (
                <AnimatedNumber value={item.value} suffix={item.suffix || ""} />
              ) : (
                `0${item.suffix || ""}`
              )}
            </div>
            <p className="mt-2 text-lg text-gray-300">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const AnimatedNumber = ({ value, suffix }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const incrementTime = 30;
    const steps = Math.ceil(duration / incrementTime);
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

export default StatsCounter;
