"use client";
import { MapPin, HeartHandshake, GlassWater } from "lucide-react";
import { motion } from "framer-motion";

// Mendefinisikan tipe data yang ketat (Goodbye 'any'!)
interface LocationConfig {
  name: string;
  address: string;
}

interface EventCardProps {
  title: string;
  time: string;
  location: LocationConfig;
  gmapsUrl: string;
  icon: React.ElementType;
  delay?: number;
}

const EventCard = ({
  title,
  time,
  location,
  gmapsUrl,
  icon: Icon,
  delay = 0,
}: EventCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className="relative bg-olive p-8 md:p-10 rounded-2xl shadow-xl text-crema flex flex-col items-center text-center space-y-8 group overflow-hidden border border-olive-light/20"
  >
    {/* Subtle Glow Background saat di-hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-crema/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Inner Border Premium */}
    <div className="absolute inset-3 border border-crema/10 rounded-xl pointer-events-none" />

    {/* Icon Container dengan Animasi */}
    <div className="relative w-20 h-20 rounded-full border border-crema/30 flex items-center justify-center bg-olive-dark/30 group-hover:bg-olive-dark/50 group-hover:border-crema/50 group-hover:scale-110 transition-all duration-500 z-10">
      <Icon className="w-10 h-10 text-crema drop-shadow-md" />
    </div>

    {/* Tipografi Acara & Waktu */}
    <div className="space-y-3 z-10">
      <h3 className="font-script text-5xl md:text-6xl text-crema tracking-wide drop-shadow-sm">
        {title}
      </h3>
      <div className="w-16 h-[1.5px] bg-crema/30 mx-auto" />
      <p className="font-serif text-xl md:text-2xl font-medium tracking-widest pt-1">
        {time}
      </p>
    </div>

    {/* Detail Lokasi */}
    <div className="font-serif tracking-wide space-y-1.5 z-10 flex-1">
      <p className="font-semibold text-lg">{location.name}</p>
      <p className="text-crema/70 text-sm leading-relaxed px-2 md:px-6">
        {location.address}
      </p>
    </div>

    {/* Call to Action Button */}
    <a
      href={gmapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-10 flex items-center gap-2 font-serif text-xs md:text-sm tracking-widest uppercase font-medium text-olive bg-crema px-8 py-3.5 rounded-full hover:bg-crema-dark hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.2)]"
    >
      <MapPin className="w-4 h-4" />
      Buka Google Maps
    </a>
  </motion.div>
);

const EventDetails = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-8 max-w-4xl mx-auto w-full">
      <EventCard
        title="Akad Nikah"
        time="09:00 WIB"
        location={{
          name: "Kediaman Mempelai Wanita",
          address: "Alamat lengkap menyusul / sesuai lokasi rumah",
        }}
        gmapsUrl="https://goo.gl/maps/placeholder"
        icon={HeartHandshake} // Ikon diganti agar lebih universal & elegan untuk Akad
        delay={0.1} // Muncul duluan
      />
      <EventCard
        title="Resepsi"
        time="10:00 WIB - Selesai"
        location={{
          name: "Kediaman Mempelai Wanita",
          address: "Alamat lengkap menyusul / sesuai lokasi rumah",
        }}
        gmapsUrl="https://goo.gl/maps/placeholder"
        icon={GlassWater}
        delay={0.3} // Muncul belakangan (staggered effect)
      />
    </div>
  );
};

export default EventDetails;
