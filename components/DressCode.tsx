"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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
      className="relative overflow-hidden border border-[#6b705c]/20 rounded-[2.5rem] p-10 md:p-16 space-y-12 flex flex-col items-center bg-[#fefae0] text-center shadow-[0_15px_40px_rgba(107,112,92,0.06)]"
    >
      {/* Inner Border Halus */}
      <div className="absolute inset-3 border border-[#6b705c]/5 rounded-[2rem] pointer-events-none" />

      {/* Ornamen Latar Belakang */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#6b705c]/5 rounded-bl-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#6b705c]/5 rounded-tr-full pointer-events-none" />

      {/* Header */}
      <div className="space-y-4 z-10">
        <h2 className="font-script text-5xl md:text-6xl text-[#6b705c] drop-shadow-sm">
          Saran Berpakaian
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-[1px] bg-[#6b705c]/30" />
          <p className="font-sans text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-[#6b705c]/80">
            Formal & Elegan
          </p>
          <div className="w-12 h-[1px] bg-[#6b705c]/30" />
        </div>
      </div>

      {/* Ikon Pakaian (Menggunakan Gambar Anda) */}
      <div className="flex gap-16 md:gap-24 items-end z-10 pt-4">
        {/* Ikon Jas (Pria) */}
        <div className="relative group flex flex-col items-center">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            // mix-blend-multiply berguna untuk menghilangkan background putih pada gambar
            className="relative w-20 h-28 md:w-24 md:h-32 mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          >
            <Image
              src="/images/suit.png" // Pastikan file bernama suit.png ada di folder public
              alt="Dress Code Pria"
              fill
              className="object-contain"
            />
          </motion.div>
          <p className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-[#6b705c] pt-4 font-semibold">
            Pria
          </p>
        </div>

        {/* Ikon Gaun (Wanita) */}
        <div className="relative group flex flex-col items-center">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="relative w-20 h-28 md:w-24 md:h-32 mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          >
            <Image
              src="/images/dress.png" // Pastikan file bernama dress.png ada di folder public
              alt="Dress Code Wanita"
              fill
              className="object-contain"
            />
          </motion.div>
          <p className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-[#6b705c] pt-4 font-semibold">
            Wanita
          </p>
        </div>
      </div>

      {/* Palette Warna Section */}
      <div className="space-y-6 pt-6 z-10 w-full">
        <p className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#6b705c]/70">
          Rekomendasi Warna
        </p>
        <div className="flex justify-center gap-4 md:gap-6">
          {suggestedColors.map((color, idx) => (
            <motion.div
              key={color.name}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.3, type: "spring" }}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md border-[2px] border-white ${color.hex} hover:scale-110 hover:shadow-lg transition-all cursor-pointer`}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Pesan Tambahan */}
      <div className="pt-8 border-t border-[#6b705c]/10 z-10 w-full">
        <p className="font-serif text-sm md:text-base tracking-wide text-[#6b705c]/80 italic max-w-md mx-auto leading-relaxed">
          &quot;Dengan kerendahan hati, kami memohon agar para tamu menghindari
          pakaian berwarna{" "}
          <span className="font-sans font-semibold text-[#6b705c] bg-white px-3 py-1 rounded-md shadow-sm not-italic uppercase tracking-wider text-[10px] align-middle mx-1 border border-[#6b705c]/10">
            Putih
          </span>{" "}
          atau nada warna senada.&quot;
        </p>
      </div>
    </motion.div>
  );
};

export default DressCode;
