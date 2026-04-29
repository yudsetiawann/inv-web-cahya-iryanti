"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TARGET_DATE = "2026-05-24T09:00:00+07:00";

// Komponen helper untuk animasi angka yang berdetak
const AnimatedNumber = ({ value }: { value: string }) => (
  <div className="relative overflow-hidden h-[60px] md:h-[72px] flex items-center justify-center">
    <AnimatePresence mode="popLayout">
      <motion.span
        key={value}
        initial={{ y: 20, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: -20, opacity: 0, scale: 0.8 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="font-serif text-5xl md:text-6xl text-crema tracking-tighter font-medium tabular-nums"
      >
        {value}
      </motion.span>
    </AnimatePresence>
  </div>
);

const TimeUnit = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <AnimatedNumber value={value} />
    <span className="font-serif text-xs tracking-wider uppercase text-crema/60 pt-2 border-t border-crema/20 mt-1 w-full text-center">
      {label}
    </span>
  </div>
);

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    const calculateTimeLeft = () => {
      const difference = +new Date(TARGET_DATE) - +new Date();
      if (difference <= 0) return;

      setTimeLeft({
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0",
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24),
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0",
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      });
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    return () => clearInterval(timer);
  }, []);

  const daysInMonth = 31;
  const startDayOfWeek = 5;
  const dayLabels = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  const calendarDates = [];

  for (let i = 0; i < startDayOfWeek; i++) {
    calendarDates.push({ day: dayLabels[i], num: "", active: false });
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDates.push({
      day: dayLabels[(startDayOfWeek + i - 1) % 7],
      num: i,
      active: i === 24,
    });
  }

  // Mencegah Hydration Mismatch dengan tidak me-render angka sebelum client siap
  if (!isMounted) return null;

  return (
    // Ticket Styling Container
    <div className="relative w-full bg-olive rounded-xl shadow-[0_20px_50px_rgba(107,112,92,0.3)] overflow-hidden border border-olive-light/30">
      {/* Ticket Cutouts (Lubang tiket di kanan-kiri) */}
      <div className="absolute top-1/2 -left-4 w-8 h-8 bg-crema rounded-full -translate-y-1/2 shadow-inner border-r border-olive/10" />
      <div className="absolute top-1/2 -right-4 w-8 h-8 bg-crema rounded-full -translate-y-1/2 shadow-inner border-l border-olive/10" />

      {/* Garis putus-putus pembatas tiket */}
      <div className="absolute top-1/2 left-8 right-8 border-t-[1.5px] border-dashed border-crema/20 -translate-y-1/2 z-0" />

      {/* Bagian Atas: Pesan Pembuka & Timer */}
      <div className="p-10 md:p-14 pb-16 md:pb-20 space-y-12 relative z-10 bg-gradient-to-b from-olive to-olive/95">
        <div className="text-center space-y-6">
          <p className="font-serif text-base tracking-wider text-crema/80 italic leading-relaxed max-w-sm mx-auto">
            &quot;Atas karunia dan rahmat Allah SWT, kami bermaksud menyelenggarakan
            acara pernikahan kami.&quot;
          </p>
        </div>

        <div className="flex items-center justify-around gap-2 max-w-sm mx-auto">
          <TimeUnit value={timeLeft.days} label="Hari" />
          <span className="text-crema/40 text-3xl font-light -mt-6">:</span>
          <TimeUnit value={timeLeft.hours} label="Jam" />
          <span className="text-crema/40 text-3xl font-light -mt-6">:</span>
          <TimeUnit value={timeLeft.minutes} label="Menit" />
          <span className="text-crema/40 text-3xl font-light -mt-6">:</span>
          <TimeUnit value={timeLeft.seconds} label="Detik" />
        </div>
      </div>

      {/* Bagian Bawah: Kalender */}
      <div className="p-10 md:p-14 pt-16 md:pt-20 space-y-10 relative z-10 bg-olive-dark/40">
        <div className="text-center space-y-2">
          {/* Efek "Foil Stamp" pada teks */}
          <p className="font-serif text-sm tracking-[0.3em] bg-clip-text text-transparent bg-gradient-to-r from-crema/60 via-crema to-crema/60 font-medium uppercase">
            Hari Bahagia
          </p>
          <p className="font-serif font-medium text-2xl text-crema tracking-widest">
            MEI 2026
          </p>
        </div>

        <div className="grid grid-cols-7 gap-1 md:gap-2 max-w-md mx-auto bg-black/10 backdrop-blur-sm p-5 rounded-2xl border border-crema/10 shadow-inner">
          {calendarDates.map((date, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center justify-center h-10 md:h-12 rounded-full font-serif text-crema transition-colors ${
                date.active ? "bg-crema text-olive z-10 shadow-lg" : ""
              }`}
            >
              <span
                className={`text-[9px] md:text-[10px] uppercase ${date.active ? "text-olive/70" : "text-crema/50"}`}
              >
                {date.day}
              </span>
              <span
                className={`text-base md:text-lg ${date.active ? "font-bold" : ""}`}
              >
                {date.num}
              </span>

              {/* Pulsing Glow untuk tanggal aktif */}
              {date.active && (
                <>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-crema rounded-full -z-10 blur-[4px]"
                  />
                  <div className="absolute -inset-1 border border-crema rounded-full opacity-50" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countdown;
