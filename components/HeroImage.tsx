"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const HeroImage = () => {
  return (
    <div className="flex flex-col items-center space-y-16 py-10">
      {/* Container Foto dengan Efek Arch (Lengkungan) Klasik & Elegan */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative group"
      >
        {/* Bingkai luar (Outer Arch) - Memberikan ilusi frame tebal yang mahal */}
        <div className="absolute -inset-3 md:-inset-4 border border-olive/20 rounded-t-full rounded-b-3xl transform group-hover:scale-[1.02] transition-transform duration-700 ease-out z-0" />
        <div className="absolute -inset-1.5 md:-inset-2 border border-olive/10 rounded-t-full rounded-b-[20px] bg-crema-dark/30 z-0" />

        {/* Masking Foto utama (Inner Arch) */}
        <div className="relative aspect-[3/4] w-[280px] md:w-[340px] bg-crema-dark rounded-t-full rounded-b-xl shadow-[0_20px_50px_rgba(107,112,92,0.2)] overflow-hidden border-8 border-white z-10">
          <Image
            // URL diganti dengan foto estetika bunga putih klasik
            src="/images/heroImage.jpeg"
            alt="rings in hand"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
            sizes="(max-w-sm) 100vw, 340px"
            priority // Foto hero sebaiknya di-load duluan
          />

          {/* Overlay gradasi tipis dari bawah agar bagian bawah foto tidak terlalu kontras */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* Container Kutipan dengan Efek Layang */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative max-w-xl text-center px-8"
      >
        {/* Ikon Kutipan Transparan di belakang teks */}
        <div className="absolute left-1/2 -top-8 -translate-x-1/2 opacity-5 pointer-events-none">
          <Quote className="w-24 h-24 text-olive fill-olive" />
        </div>

        <p className="relative font-serif text-lg md:text-xl leading-loose italic text-olive drop-shadow-sm">
          &quot;Dua jiwa namun satu pikiran, dua hati namun satu perasaan. Kami
          mengikat janji untuk selamanya.&quot;
        </p>

        {/* Ornamen Pemisah Sederhana */}
        <div className="mt-8 flex items-center justify-center gap-4 opacity-50">
          <div className="w-12 h-[1px] bg-olive" />
          <div className="w-1.5 h-1.5 bg-olive rounded-full rotate-45" />
          <div className="w-12 h-[1px] bg-olive" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroImage;
