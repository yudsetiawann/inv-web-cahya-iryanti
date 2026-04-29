"use client";
import { Heart, CalendarClock, MessageCircle, Info } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const RSVP = () => {
  return (
    <div className="flex flex-col items-center space-y-24 pt-10">
      {/* RSVP Section (Floating Card) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-2xl bg-olive p-10 md:p-16 rounded-3xl shadow-[0_20px_50px_rgba(107,112,92,0.3)] text-crema text-center flex flex-col items-center space-y-10 border border-olive-light/20 overflow-hidden"
      >
        {/* Dekorasi Background */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-crema/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-crema/5 rounded-full blur-2xl pointer-events-none" />

        <div className="space-y-4 z-10">
          <div className="w-16 h-16 bg-crema/10 rounded-full flex items-center justify-center mx-auto border border-crema/20">
            <CalendarClock className="w-8 h-8 text-crema" />
          </div>
          <h2 className="font-script text-5xl md:text-6xl text-crema drop-shadow-sm">
            Konfirmasi Kehadiran
          </h2>
        </div>

        <p className="font-serif text-base md:text-lg italic tracking-wide max-w-md z-10 text-crema/90 leading-relaxed">
          &quot;Merupakan suatu kehormatan apabila Bapak/Ibu/Saudara/i berkenan
          hadir. Mohon konfirmasi kehadiran Anda sebelum{" "}
          <strong>10 Mei 2026</strong>.&quot;
        </p>

        {/* Tombol RSVP via WhatsApp */}
        <a
          href="https://wa.me/6281234567890?text=Halo%20Cahya%20&%20Iryanti,%20saya%20ingin%20mengkonfirmasi%20kehadiran%20di%20acara%20pernikahan%20kalian."
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 flex items-center gap-3 font-serif text-sm md:text-base tracking-widest uppercase font-semibold text-olive bg-crema px-8 py-4 rounded-full hover:bg-crema-dark hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(254,250,224,0.3)] group"
        >
          <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
          Konfirmasi via WhatsApp
        </a>
      </motion.div>

      {/* Foto Pasangan Kedua (Dengan Frame Elegan) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
        className="relative aspect-[4/5] w-full max-w-[280px] md:max-w-xs group"
      >
        {/* Frame luar */}
        <div className="absolute -inset-3 border-[1.5px] border-olive/20 rounded-2xl transform group-hover:rotate-2 transition-transform duration-700 ease-out z-0" />

        {/* Inner container */}
        <div className="relative w-full h-full bg-crema-dark rounded-xl shadow-2xl overflow-hidden border-8 border-white z-10">
          <Image
            src="https://images.unsplash.com/photo-1510071221316-2d1f945653b6?q=80&w=600&auto=format&fit=crop"
            alt="Iryanti & Cahya"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
            sizes="(max-w-xs) 100vw, 320px"
          />
        </div>
      </motion.div>

      {/* Footer / Catatan Tambahan */}
      <div className="w-full text-center space-y-20 py-10 border-t border-olive/10">
        {/* Bagian Aturan Tambahan */}
        {/* <div className="space-y-10">
          <div className="flex items-center gap-3 justify-center text-olive">
            <Info className="w-5 h-5 opacity-70" />
            <p className="font-serif text-sm md:text-base tracking-[0.2em] uppercase font-semibold">
              Catatan Tambahan
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto px-6 font-serif text-sm md:text-base text-olive-dark leading-relaxed text-left md:text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-crema-dark/20 p-6 rounded-2xl border border-olive/10"
            >
              <p className="font-semibold text-olive mb-2 uppercase tracking-widest text-xs">
                Ketepatan Waktu
              </p>
              <p>
                Mohon berkenan untuk hadir tepat waktu dan mengikuti arahan dari
                panitia acara demi kelancaran bersama.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-crema-dark/20 p-6 rounded-2xl border border-olive/10"
            >
              <p className="font-semibold text-olive mb-2 uppercase tracking-widest text-xs">
                Acara Khusus Dewasa
              </p>
              <p>
                Untuk menjaga suasana khidmat dan ruang gerak, acara ini
                dikhususkan bagi tamu dewasa. Terima kasih atas pengertiannya.
              </p>
            </motion.div>
          </div>
        </div> */}

        {/* Closing Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="space-y-6 pt-10"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-olive/30" />
            <Heart className="w-4 h-4 text-olive/50 fill-olive/10" />
            <div className="w-12 h-px bg-olive/30" />
          </div>

          <p className="font-serif text-sm md:text-base tracking-[0.3em] text-olive uppercase font-medium">
            Kehadiran Anda Sangat Berarti
          </p>
          <h2 className="font-script text-7xl md:text-8xl text-olive drop-shadow-sm pb-10">
            Terima Kasih
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default RSVP;
