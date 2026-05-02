"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [guestName, setGuestName] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to");
    if (to) {
      setGuestName(to);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#793c2a] overflow-hidden px-6">
      {/* Background botanical pattern (tetap sama) */}
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
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#botanical)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-sm mx-auto mt-10"
      >
        <div
          className="relative bg-[#5e2d1a] rounded-2xl shadow-2xl overflow-hidden"
          style={{
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(254,250,224,0.1)",
          }}
        >
          {/* Envelope flap top */}
          <div
            className="absolute top-0 left-0 right-0 h-0 border-l-[176px] border-r-[176px] border-t-[80px] border-l-transparent border-r-transparent border-t-[#4a2314] opacity-60"
            style={{ borderLeftWidth: "50%", borderRightWidth: "50%" }}
          />

          {/* --- WAX SEAL ORNAMENT PREMIUM --- */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.8,
              type: "spring",
              stiffness: 150,
            }}
            className="absolute top-4 left-1/2 -translate-x-1/2 z-20 w-16 h-16 rounded-full flex items-center justify-center"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #d4af37, #a0784a 80%)",
              boxShadow:
                "0 6px 15px rgba(0,0,0,0.4), inset 0 0 10px rgba(255,255,255,0.2)",
              border: "2px solid #c9a96e",
            }}
          >
            {/* Tekstur stempel lilin (Cincin dalam) */}
            <div className="absolute inset-1 rounded-full border border-[#fefae0]/20 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <span className="font-script text-[#fefae0] text-xl leading-none">
                  I&C
                </span>
                {/* Garis kecil di bawah monogram agar lebih presisi/formal */}
                <div className="h-[0.5px] w-6 bg-[#fefae0]/40 mt-0.5" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="pt-24 pb-12 px-8 text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-8 w-full"
            >
              <p className="font-sans text-[#fefae0] text-[10px] tracking-widest uppercase opacity-60 mb-2">
                Kepada Yth.
              </p>
              <div className="min-h-[40px] flex items-center justify-center">
                <p className="font-serif text-[#fefae0] text-lg md:text-xl font-medium tracking-wide border-b border-[#c9a96e]/40 pb-2 px-6">
                  {isMounted
                    ? guestName || "Bapak/Ibu/Saudara/i"
                    : "Bapak/Ibu/Saudara/i"}
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-sans text-[#fefae0] tracking-[0.3em] text-xs uppercase opacity-50 mb-6"
            >
              Undangan Pernikahan
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="mb-2"
            >
              {/* Mempelai Wanita */}
              <div className="flex flex-col items-center">
                <h1
                  className="font-script text-[#fefae0] leading-tight"
                  style={{ fontSize: "clamp(2rem, 12vw, 4rem)" }}
                >
                  Iryanti, S.Sos
                </h1>
                <p className="font-serif text-[#c9a96e]/80 text-[11px] leading-relaxed tracking-wide mt-0.5">
                  Putri ke-4 dari Bapak Jeje dan Ibu Jojoh (Alm)
                </p>
              </div>

              <div className="font-serif text-[#c9a96e] text-3xl italic my-3 leading-none">
                &amp;
              </div>

              {/* Mempelai Pria */}
              <div className="flex flex-col items-center">
                <h1
                  className="font-script text-[#fefae0] leading-tight"
                  style={{ fontSize: "clamp(2rem, 12vw, 4rem)" }}
                >
                  Cahya Lesmana
                </h1>
                <p className="font-serif text-[#c9a96e]/80 text-[11px] leading-relaxed tracking-wide mt-0.5">
                  Putra ke-2 dari Bapak Waliman, S.Sos. dan Ibu Yati Rahmayati
                </p>
              </div>
            </motion.div>

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

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <p className="font-sans text-[#fefae0] tracking-[0.2em] text-xs opacity-80 uppercase">
                Minggu · 24 Mei 2026
              </p>
            </motion.div>
          </div>
        </div>

        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="text-center font-serif italic text-[#3d3b29] text-[11px] mt-8 px-4 opacity-70 leading-relaxed uppercase tracking-wider"
        >
          &quot;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu...&quot;
          <br />
          <span className="text-[10px] tracking-widest not-italic opacity-60">
            — QS. Ar-Rum: 21 —
          </span>
        </motion.p> */}
      </motion.div>

      {/* Scroll cue (tetap sama) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[#fefae0] text-[10px] tracking-[0.3em] uppercase opacity-50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-[#fefae0] opacity-50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
