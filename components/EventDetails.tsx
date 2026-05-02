"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, HeartHandshake, GlassWater } from "lucide-react";

// Data acara dipusatkan di atas agar mudah diedit
const events = [
  {
    icon: HeartHandshake,
    title: "Akad Nikah",
    time: "09.00 – 10.00 WIB",
    venue: "Kediaman Mempelai Wanita",
    address: "Kp. Wangun Rt 005 Rw 010 Ds. Barumekar Kec. Parungponteng Kab tasikmalaya",
    mapsUrl: "https://maps.app.goo.gl/MAUN8PUiJ5r4MVEr6",
  },
  {
    icon: GlassWater,
    title: "Resepsi",
    time: "10.00 – 14.00 WIB",
    venue: "Kediaman Mempelai Wanita",
    address: "Kp. Wangun Rt 005 Rw 010 Ds. Barumekar Kec. Parungponteng Kab tasikmalaya",
    mapsUrl: "https://maps.app.goo.gl/MAUN8PUiJ5r4MVEr6",
  },
];

export default function EventDetails() {
  return (
    <section className="bg-crema py-20 relative overflow-hidden">
      {/* Dekorasi Latar Belakang (Opsional, agar tidak terlalu kosong) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Bagian Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 space-y-3"
        >
          <p className="font-sans text-olive tracking-[0.3em] text-xs uppercase font-medium opacity-70">
            Waktu & Tempat
          </p>
          <h2
            className="font-script text-olive"
            style={{ fontSize: "clamp(2.5rem, 8vw, 4rem)" }}
          >
            Detail Acara
          </h2>
          <div className="flex justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] opacity-80" />
          </div>
        </motion.div>

        {/* Kontainer Kartu Acara */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {events.map((event, i) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                className="group relative bg-white/20 rounded-[2rem] p-10 flex flex-col items-center text-center shadow-[0_15px_40px_rgba(107,112,92,0.06)] border border-[#793c2a]/10 hover:shadow-[0_20px_50px_rgba(107,112,92,0.12)] hover:-translate-y-1 transition-all duration-500"
              >
                {/* Inner Border Halus */}
                <div className="absolute inset-3 border border-[#793c2a]/5 rounded-[1.5rem] pointer-events-none" />

                {/* Ikon Premium */}
                <div className="relative w-16 h-16 mb-8 rounded-full bg-[#fefae0]/50 border border-[#793c2a]/10 flex items-center justify-center text-[#793c2a] group-hover:bg-[#793c2a] group-hover:text-[#fefae0] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                {/* Judul Acara */}
                <h3 className="font-script text-4xl md:text-5xl text-[#793c2a] mb-6">
                  {event.title}
                </h3>

                {/* Detail Waktu & Lokasi */}
                <div className="space-y-5 flex-1 flex flex-col items-center justify-start w-full">
                  {/* Waktu */}
                  <div className="flex items-center gap-2.5 px-6 py-2 rounded-full bg-[#fefae0]/40 border border-[#793c2a]/10">
                    <Clock size={16} className="text-[#c9a96e]" />
                    <span className="font-sans text-[#793c2a] text-sm tracking-widest font-medium">
                      {event.time}
                    </span>
                  </div>

                  <div className="w-10 h-[1px] bg-[#793c2a]/10 my-2" />

                  {/* Lokasi */}
                  <div>
                    <p className="font-serif text-[#2d2d2d] text-lg font-medium tracking-wide mb-1.5">
                      {event.venue}
                    </p>
                    <p className="font-sans text-[#793c2a] text-sm leading-relaxed opacity-80 max-w-[260px]">
                      {event.address}
                    </p>
                  </div>
                </div>

                {/* Tombol Maps */}
                <a
                  href={event.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 relative z-10 flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase font-medium text-[#fefae0] bg-[#793c2a] px-8 py-3.5 rounded-full hover:bg-[#5a5e4d] hover:shadow-lg active:scale-95 transition-all duration-300"
                >
                  <MapPin size={14} />
                  Lihat Peta
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
