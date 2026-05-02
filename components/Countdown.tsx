"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TARGET_DATE = new Date("2026-05-24T09:00:00+07:00");

function getTimeLeft() {
  const now = new Date();
  const diff = TARGET_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function MiniCalendar() {
  const year = 2026;
  const month = 4; // Mei (0-indexed)
  const weddingDay = 24;

  // 1 Mei 2026 jatuh pada hari Jumat (index 5)
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // 31
  const days = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

  const cells: (number | null)[] = Array(firstDay).fill(null);
  for (let i = 1; i <= daysInMonth; i++) cells.push(i);

  return (
    <div className="w-full max-w-xs mx-auto mt-8 border-t border-[#fefae0]/10 pt-8">
      <div className="text-center mb-6">
        <span className="font-sans text-[#fefae0] text-xs tracking-[0.25em] uppercase opacity-70">
          Mei 2026
        </span>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {days.map((d) => (
          <div
            key={d}
            className="font-sans text-[10px] text-[#fefae0] opacity-50 uppercase tracking-wide"
          >
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {cells.map((day, i) => (
          <div key={i} className="relative">
            {day ? (
              day === weddingDay ? (
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-8 h-8 mx-auto rounded-full flex items-center justify-center font-sans font-medium text-sm text-[#793c2a] shadow-[0_0_15px_rgba(254,250,224,0.3)]"
                  style={{ background: "#fefae0" }}
                >
                  {day}
                </motion.div>
              ) : (
                <div className="w-8 h-8 mx-auto flex items-center justify-center font-sans text-[#fefae0] text-sm opacity-60">
                  {day}
                </div>
              )
            ) : null}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 mt-6">
        <div className="w-2 h-2 rounded-full bg-[#fefae0] opacity-80" />
        <span className="font-serif italic text-[#fefae0] text-sm opacity-80">
          Hari Pernikahan Kami
        </span>
      </div>
    </div>
  );
}

export default function ElegantCountdown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    setTime(getTimeLeft()); // Set nilai awal agar tidak menunggu 1 detik pertama
    const t = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  // Mencegah Hydration Mismatch dari sisi client vs server
  if (!isMounted) return null;

  const units = [
    { label: "Hari", value: time.days },
    { label: "Jam", value: time.hours },
    { label: "Menit", value: time.minutes },
    { label: "Detik", value: time.seconds },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="bg-[#793c2a] py-16 px-6 rounded-2xl overflow-hidden shadow-2xl"
    >
      <div className="max-w-sm mx-auto text-center">
        {/* Label Atas */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans text-[#fefae0] tracking-[0.3em] text-xs uppercase opacity-60 mb-2"
        >
          Menuju Hari Istimewa
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-serif text-[#fefae0] mb-8 tracking-widest uppercase font-medium"
          style={{ fontSize: "clamp(1.5rem, 6vw, 2.2rem)" }}
        >
          Hari Bahagia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-serif text-sm tracking-wider text-[#fefae0]/80 italic leading-relaxed mx-auto mb-10 max-w-[280px]"
        >
          &quot;Atas karunia dan rahmat Allah SWT, kami bermaksud
          menyelenggarakan acara pernikahan kami.&quot;
        </motion.p>

        {/* Countdown Boxes dengan efek AnimatePresence dari UI 1 */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          {units.map((u, i) => (
            <motion.div
              key={u.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div
                className="w-full aspect-square rounded-xl flex items-center justify-center relative overflow-hidden"
                style={{
                  background: "rgba(254,250,224,0.08)",
                  border: "1px solid rgba(254,250,224,0.15)",
                  boxShadow: "inset 0 1px 0 rgba(254,250,224,0.1)",
                }}
              >
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={u.value}
                    initial={{ y: 20, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -20, opacity: 0, scale: 0.8 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    className="font-serif text-[#fefae0] font-light leading-none tabular-nums"
                    style={{ fontSize: "clamp(1.5rem, 6vw, 2rem)" }}
                  >
                    {String(u.value).padStart(2, "0")}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="font-sans text-[#fefae0] text-[9px] tracking-[0.2em] uppercase opacity-60 mt-3">
                {u.label}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="font-sans text-[#fefae0] text-xs opacity-50 tracking-widest uppercase mt-6">
          24 · 05 · 2026
        </p>

        {/* Kalender Bulan Mei 2026 */}
        <MiniCalendar />
      </div>
    </motion.section>
  );
}
