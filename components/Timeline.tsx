"use client";

import { motion } from "framer-motion";
import { Home, Utensils, Camera } from "lucide-react";

const itinerary = [
  {
    time: "09.00",
    label: "Akad Nikah",
    desc: "Prosesi ijab kabul dan akad pernikahan",
    icon: Home,
  },
  {
    time: "10.00",
    label: "Resepsi & Ramah Tamah",
    desc: "Makan siang bersama dengan hidangan pilihan",
    icon: Utensils,
  },
  {
    time: "13.00",
    label: "Penutupan",
    desc: "Sesi foto bersama & perpisahan",
    icon: Camera,
  },
];

export default function Timeline() {
  return (
    <section className="section-cream-dark py-16 px-6">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-sans text-[#6b705c] tracking-[0.3em] text-xs uppercase opacity-60 mb-2">
            Rundown
          </p>
          <h2
            className="font-script text-[#6b705c]"
            style={{ fontSize: "clamp(2rem, 10vw, 3rem)" }}
          >
            Ringkasan Kegiatan
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical dashed line */}
          <div className="absolute left-[29px] top-4 bottom-4 w-px timeline-line" />

          <div className="space-y-7">
            {itinerary.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-5 relative"
                >
                  {/* Icon circle */}
                  <div className="relative z-10 flex-shrink-0 w-[60px] flex flex-col items-center">
                    <div
                      className="w-[58px] h-[58px] rounded-full flex items-center justify-center"
                      style={{
                        background: i % 2 === 0 ? "#6b705c" : "#fefae0",
                        border: `2px solid ${i % 2 === 0 ? "#6b705c" : "rgba(107,112,92,0.3)"}`,
                        boxShadow: "0 4px 12px rgba(107,112,92,0.15)",
                      }}
                    >
                      <Icon
                        size={20}
                        className={
                          i % 2 === 0 ? "text-[#fefae0]" : "text-[#6b705c]"
                        }
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2 pt-2">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span
                        className="font-sans text-xs tracking-widest font-medium"
                        style={{ color: "#c9a96e" }}
                      >
                        {item.time}
                      </span>
                    </div>
                    <h3 className="font-serif text-[#2d2d2d] text-lg font-medium leading-tight">
                      {item.label}
                    </h3>
                    <p className="font-sans text-[#6b705c] text-xs opacity-70 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
