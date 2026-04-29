"use client";
import { motion } from "framer-motion";

const DressCode = () => {
  // Palet warna yang disarankan untuk tamu (Earth tones & Monochrome)
  const suggestedColors = [
    { name: "Olive", hex: "bg-[#6b705c]" },
    { name: "Sage", hex: "bg-[#8d927d]" },
    { name: "Khaki", hex: "bg-[#b5bda4]" },
    { name: "Hitam", hex: "bg-[#2c3024]" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden border border-olive/20 rounded-[2rem] p-10 md:p-16 space-y-12 flex flex-col items-center bg-gradient-to-b from-crema-dark/10 to-crema-dark/30 text-center shadow-lg"
    >
      {/* Ornamen Latar Belakang */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-olive/5 rounded-bl-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-olive/5 rounded-tr-full pointer-events-none" />

      {/* Header */}
      <div className="space-y-4 z-10">
        <h2 className="font-script text-5xl md:text-6xl text-olive drop-shadow-sm">
          Saran Berpakaian
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="w-8 h-[1px] bg-olive/40" />
          <p className="font-serif text-lg md:text-xl font-medium tracking-[0.3em] uppercase text-olive-dark">
            Formal & Elegan
          </p>
          <div className="w-8 h-[1px] bg-olive/40" />
        </div>
      </div>

      {/* Ilustrasi Minimalis/Siluet (Ditingkatkan menjadi Boutique Art) */}
      <div className="flex gap-14 md:gap-20 items-end z-10 pt-4">
        {/* Siluet Jas (Pria) */}
        <div className="relative group flex flex-col items-center">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-16 h-28 md:w-20 md:h-36 border-[2.5px] border-olive rounded-t-2xl rounded-b-md group-hover:bg-olive/10 transition-colors duration-500 flex justify-center"
          >
            {/* Detail V-Neck / Kerah Jas */}
            <div className="absolute top-0 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[30px] border-transparent border-t-crema drop-shadow-[0_2px_0_rgba(107,112,92,1)]" />
            {/* Garis Kancing */}
            <div className="absolute top-10 w-[2.5px] h-14 md:h-20 bg-olive rounded-full" />
            {/* Titik Kancing */}
            <div className="absolute top-12 w-2 h-2 bg-olive rounded-full" />
            <div className="absolute top-16 w-2 h-2 bg-olive rounded-full" />
          </motion.div>
          <p className="font-serif text-sm md:text-base tracking-widest uppercase text-olive-dark pt-5 font-medium">
            Pria
          </p>
        </div>

        {/* Siluet Gaun (Wanita) */}
        <div className="relative group flex flex-col items-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="relative w-20 h-32 md:w-24 md:h-40 border-[2.5px] border-olive rounded-t-full rounded-b-[2rem] group-hover:bg-olive/10 transition-colors duration-500 flex flex-col items-center"
          >
            {/* Potongan Pinggang (Hourglass effect) */}
            <div className="absolute top-1/3 w-full h-[2.5px] bg-olive" />
            <div className="absolute top-[34%] -left-1 w-2 h-2 border-[2.5px] border-olive bg-crema rounded-full" />
            <div className="absolute top-[34%] -right-1 w-2 h-2 border-[2.5px] border-olive bg-crema rounded-full" />
          </motion.div>
          <p className="font-serif text-sm md:text-base tracking-widest uppercase text-olive-dark pt-5 font-medium">
            Wanita
          </p>
        </div>
      </div>

      {/* Palette Warna Section */}
      <div className="space-y-4 pt-6 z-10 w-full">
        <p className="font-serif text-xs md:text-sm tracking-widest uppercase text-olive/70">
          Rekomendasi Warna
        </p>
        <div className="flex justify-center gap-3 md:gap-5">
          {suggestedColors.map((color, idx) => (
            <motion.div
              key={color.name}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.3, type: "spring" }}
              className={`w-8 h-8 md:w-10 md:h-10 rounded-full shadow-md border border-crema ${color.hex} hover:scale-110 transition-transform cursor-pointer`}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Pesan Tambahan (Translated to Indonesian) */}
      <div className="pt-6 border-t border-olive/10 z-10">
        <p className="font-serif text-base md:text-lg tracking-wide text-olive italic max-w-md mx-auto leading-relaxed">
          &quot;Dengan kerendahan hati, kami memohon agar para tamu menghindari
          pakaian berwarna{" "}
          <span className="font-semibold text-olive-dark bg-white px-3 py-1 rounded-md shadow-sm not-italic uppercase tracking-wider text-xs align-middle mx-1">
            Putih
          </span>{" "}
          atau nada warna senada.&quot;
        </p>
      </div>
    </motion.div>
  );
};

export default DressCode;
