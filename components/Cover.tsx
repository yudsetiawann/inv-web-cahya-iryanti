"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react"; // Pastikan lucide-react terinstall

const Cover = () => {
  // Fungsi untuk scroll mulus ke section berikutnya saat amplop "dibuka"
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-olive overflow-hidden">
      {/* Subtle Background Glow (Cahaya lembut di belakang) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(254,250,224,0.05)_0%,transparent_70%)]" />

      {/* Layer 1: Kertas Undangan (Berada di dalam amplop) */}
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: -50, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[85%] max-w-[420px] h-[480px] md:h-[520px] bg-crema rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.3)] p-6 md:p-8 flex flex-col items-center justify-center z-10"
      >
        {/* Bingkai Dalam Kertas (Double Border Premium) */}
        <div className="absolute inset-3 border border-olive/20 rounded-lg pointer-events-none" />
        <div className="absolute inset-4 border border-olive/10 rounded-md pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center space-y-6 w-full">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="font-serif text-xs md:text-sm tracking-[0.3em] text-olive-dark uppercase text-center"
          >
            The Wedding Of
          </motion.p>

          <div className="text-center space-y-1">
            <h1 className="font-script text-7xl md:text-8xl text-olive drop-shadow-sm">
              Iryanti
            </h1>
            <span className="block font-serif text-3xl md:text-4xl text-olive/60 italic pb-2">
              &
            </span>
            <h1 className="font-script text-7xl md:text-8xl text-olive drop-shadow-sm">
              Cahya
            </h1>
          </div>

          <div className="w-12 h-px bg-olive/30 my-6" />

          <p className="font-serif text-lg md:text-xl tracking-widest text-olive-dark font-medium">
            24 . 05 . 2026
          </p>
        </div>
      </motion.div>

      {/* Layer 2: Bungkus Amplop Depan (Menutupi bagian bawah kertas) */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute bottom-0 w-[150%] h-[55%] md:h-[60%] bg-olive-light z-20 rounded-t-[50%] scale-x-[1.2] shadow-[0_-20px_40px_rgba(0,0,0,0.25)] border-t border-crema/10 flex items-start justify-center pt-8"
      >
        {/* Layer 3: Wax Seal (Stempel Lilin Inisial) */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 1.5,
            type: "spring",
            stiffness: 120,
            damping: 10,
          }}
          className="relative w-16 h-16 bg-olive-dark rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.3)] border border-olive/30 flex items-center justify-center -mt-16 z-30"
        >
          {/* Detail cincin dalam stempel */}
          <div className="absolute inset-1 border border-olive/20 rounded-full" />
          <span className="font-script text-2xl text-crema opacity-90 drop-shadow-md">
            IC
          </span>
        </motion.div>
      </motion.div>

      {/* Layer 4: Call to Action (Tombol Buka Undangan) */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        onClick={handleScroll}
        className="absolute bottom-8 z-30 flex flex-col items-center gap-2 text-crema group cursor-pointer"
      >
        <span className="font-serif text-xs md:text-sm tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          Buka Undangan
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 opacity-70 group-hover:opacity-100 group-hover:text-white transition-all duration-300" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Cover;
