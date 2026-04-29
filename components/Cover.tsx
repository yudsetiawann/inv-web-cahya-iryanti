"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center section-olive overflow-hidden px-6">
      {/* Background botanical pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="botanical"
              x="0"
              y="0"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              {/* Leaf motif */}
              <ellipse
                cx="60"
                cy="30"
                rx="8"
                ry="20"
                fill="none"
                stroke="#fefae0"
                strokeWidth="0.8"
                transform="rotate(-20 60 30)"
              />
              <ellipse
                cx="60"
                cy="30"
                rx="8"
                ry="20"
                fill="none"
                stroke="#fefae0"
                strokeWidth="0.8"
                transform="rotate(20 60 30)"
              />
              <line
                x1="60"
                y1="10"
                x2="60"
                y2="50"
                stroke="#fefae0"
                strokeWidth="0.5"
              />
              <ellipse
                cx="30"
                cy="80"
                rx="6"
                ry="15"
                fill="none"
                stroke="#fefae0"
                strokeWidth="0.8"
                transform="rotate(-10 30 80)"
              />
              <line
                x1="30"
                y1="65"
                x2="30"
                y2="95"
                stroke="#fefae0"
                strokeWidth="0.5"
              />
              <ellipse
                cx="90"
                cy="90"
                rx="6"
                ry="15"
                fill="none"
                stroke="#fefae0"
                strokeWidth="0.8"
                transform="rotate(10 90 90)"
              />
              <line
                x1="90"
                y1="75"
                x2="90"
                y2="105"
                stroke="#fefae0"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#botanical)" />
        </svg>
      </div>

      {/* Envelope body */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-sm mx-auto"
      >
        {/* Envelope card */}
        <div
          className="relative bg-[#5a5e4d] rounded-2xl shadow-2xl overflow-hidden"
          style={{
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(254,250,224,0.1)",
          }}
        >
          {/* Envelope flap top - decorative */}
          <div
            className="absolute top-0 left-0 right-0 h-0 border-l-[176px] border-r-[176px] border-t-[80px] border-l-transparent border-r-transparent border-t-[#4a4e3d] opacity-60"
            style={{ borderLeftWidth: "50%", borderRightWidth: "50%" }}
          />

          {/* Wax seal ornament */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.6,
              type: "spring",
              stiffness: 200,
            }}
            className="absolute top-4 left-1/2 -translate-x-1/2 z-20 w-14 h-14 rounded-full flex items-center justify-center"
            style={{
              background: "radial-gradient(circle, #c9a96e, #a0784a)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            <span
              className="font-script text-[#fefae0] text-2xl leading-none"
              style={{ marginTop: "-2px" }}
            >
              C
            </span>
          </motion.div>

          {/* Content */}
          <div className="pt-24 pb-12 px-8 text-center">
            {/* Invitation label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-sans text-[#fefae0] tracking-[0.3em] text-xs uppercase opacity-70 mb-6"
            >
              Undangan Pernikahan
            </motion.p>

            {/* Ampersand decoration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="mb-2"
            >
              <h1
                className="font-script text-[#fefae0] leading-tight"
                style={{ fontSize: "clamp(2rem, 12vw, 4rem)" }}
              >
                Cahya Lesmana
              </h1>
              <div className="font-serif text-[#c9a96e] text-3xl italic my-0 leading-none">
                &amp;
              </div>
              <h1
                className="font-script text-[#fefae0] leading-tight"
                style={{ fontSize: "clamp(2rem, 12vw, 4rem)" }}
              >
                Iryanti, S.Pd
              </h1>
            </motion.div>

            {/* Ornament line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex items-center justify-center gap-3 my-6"
            >
              <div className="h-px w-12 bg-[#c9a96e] opacity-60" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
              <div className="h-px w-12 bg-[#c9a96e] opacity-60" />
            </motion.div>

            {/* Date */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <p className="font-sans text-[#fefae0] tracking-[0.2em] text-sm opacity-80">
                MINGGU · 24 MEI 2026
              </p>
            </motion.div>
          </div>
        </div>

        {/* Quote below card */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="text-center font-serif italic text-[#3d3b29] text-sm mt-8 px-4 opacity-70 leading-relaxed"
        >
          &quot;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu...&quot;
          <br />
          <span className="text-xs tracking-widest not-italic opacity-60">
            — QS. Ar-Rum: 21
          </span>
        </motion.p>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[#fefae0] text-xs tracking-[0.3em] uppercase opacity-50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-[#fefae0] opacity-50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
