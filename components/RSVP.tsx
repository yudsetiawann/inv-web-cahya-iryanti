"use client";
import { Heart, MessageSquareHeart, Send, User } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// GANTI URL INI DENGAN URL WEB APP DARI GOOGLE APPS SCRIPT ANDA
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzLl8tFtpmj7JAqsyvbzGjSTbC2wjOLHWIQJmC553RXHHQ0GSLOSOny4qrheCJF_tb3nQ/exec";

interface Wish {
  id: string;
  name: string;
  message: string;
  createdAt?: string;
}

const Guestbook = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingWishes, setIsLoadingWishes] = useState(true);

  // Mengambil data dari Google Sheets
  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const res = await fetch(SCRIPT_URL);
        const data = await res.json();
        setWishes(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Gagal memuat ucapan:", error);
      } finally {
        setIsLoadingWishes(false);
      }
    };
    fetchWishes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name: name.trim(),
          message: message.trim(),
        }),
      });

      const newWish: Wish = {
        id: Date.now().toString(),
        name: name.trim(),
        message: message.trim(),
        createdAt: new Date().toISOString(),
      };

      setWishes((prev) => [newWish, ...prev]);
      setName("");
      setMessage("");
    } catch (error) {
      alert("Kesalahan jaringan saat mengirim ucapan.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const safeFormatDate = (dateString?: string) => {
    if (!dateString) return "Baru saja";
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "Baru saja";
      return date.toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      return "Baru saja";
    }
  };

  const safeWishes = Array.isArray(wishes) ? wishes : [];

  return (
    <div className="flex flex-col items-center space-y-24 pt-10 md:px-0">
      {/* --- GUESTBOOK SECTION --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // Latar belakang diubah menjadi white/40 dengan efek glassmorphism
        className="relative w-full max-w-2xl p-8 md:p-14 rounded-[2.5rem] shadow-[0_20px_50px_rgba(107,112,92,0.15)] text-center flex flex-col items-center bg-white/40 backdrop-blur-md border border-white/60 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-white/60 to-transparent pointer-events-none" />
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/40 rounded-full blur-2xl pointer-events-none" />

        <div className="space-y-3 z-10 mb-10">
          <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto border border-white">
            {/* Ikon diubah menjadi warna olive */}
            <MessageSquareHeart
              className="w-7 h-7 text-olive"
              strokeWidth={1.5}
            />
          </div>
          {/* Teks diubah menjadi warna olive */}
          <h2 className="font-script text-4xl md:text-5xl text-olive drop-shadow-sm pt-2">
            Kirimkan Doa & Ucapan
          </h2>
        </div>

        {/* Form Input */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-4 z-10 text-left"
        >
          <div className="space-y-1.5">
            <label className="font-sans text-[10px] tracking-widest uppercase text-olive/80 ml-2 font-medium">
              Nama Anda
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Budi & Keluarga"
              required
              autoComplete="off"
              data-lpignore="true"
              data-1p-ignore="true"
              className="w-full bg-white/80 backdrop-blur-sm text-[#2d2d2d] placeholder-olive/40 font-sans text-sm px-5 py-3.5 rounded-xl outline-none border border-white focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/20 transition-all shadow-sm"
            />
          </div>
          <div className="space-y-1.5">
            <label className="font-sans text-[10px] tracking-widest uppercase text-olive/80 ml-2 font-medium">
              Pesan & Doa
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tuliskan ucapan selamat..."
              required
              rows={4}
              data-gramm="false"
              data-gramm_editor="false"
              spellCheck="false"
              className="w-full bg-white/80 backdrop-blur-sm text-[#2d2d2d] placeholder-olive/40 font-serif text-sm px-5 py-4 rounded-xl outline-none border border-white focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/20 transition-all resize-none shadow-sm"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 flex items-center justify-center gap-2 font-sans text-xs tracking-widest uppercase font-medium text-white bg-olive hover:bg-olive-dark disabled:opacity-70 px-6 py-4 rounded-xl transition-all shadow-[0_5px_15px_rgba(107,112,92,0.2)] active:scale-[0.98]"
          >
            {isSubmitting ? (
              "Mengirim..."
            ) : (
              <>
                <Send size={14} />
                Kirim Ucapan
              </>
            )}
          </button>
        </form>

        <div className="w-full max-w-lg mt-14 z-10 text-left border-t border-olive/10 pt-8">
          <p className="font-sans text-[11px] tracking-widest uppercase text-olive/70 mb-6 text-center font-medium">
            {isLoadingWishes
              ? "Memuat doa & harapan..."
              : `${safeWishes.length} Doa & Harapan`}
          </p>

          {!isLoadingWishes && (
            <div className="max-h-[300px] overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-olive/20 scrollbar-track-transparent">
              <AnimatePresence>
                {safeWishes.map((wish) => (
                  <motion.div
                    key={wish.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    // Card wish disesuaikan jadi putih
                    className="bg-white/80 p-5 rounded-2xl border border-white shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-olive/10 flex items-center justify-center">
                          <User size={12} className="text-olive" />
                        </div>
                        <p className="font-serif font-medium text-olive-dark text-sm">
                          {wish.name}
                        </p>
                      </div>
                      <span className="font-sans text-[9px] text-olive/50 tracking-wider font-medium">
                        {safeFormatDate(wish.createdAt)}
                      </span>
                    </div>
                    <p className="font-serif text-olive/80 text-sm leading-relaxed pl-8">
                      &quot;{wish.message}&quot;
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </motion.div>

      {/* --- FOTO PENUTUP & CLOSING --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
        className="relative aspect-[4/5] w-full max-w-[280px] md:max-w-xs group"
      >
        <div className="absolute -inset-3 border-[1.5px] border-olive/20 rounded-2xl transform group-hover:rotate-2 transition-transform duration-700 ease-out z-0" />
        <div className="relative w-full h-full bg-crema rounded-xl shadow-2xl overflow-hidden border-8 border-white z-10">
          <Image
            src="/images/rings.jpeg"
            alt="Simbol Cincin Pernikahan"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
            sizes="(max-w-xs) 100vw, 320px"
          />
        </div>
      </motion.div>

      <div className="w-full text-center space-y-20 py-10 border-t border-olive/10">
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

export default Guestbook;
