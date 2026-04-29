"use client";
import { Gift, Copy, CheckCircle2, WalletCards, QrCode } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DigitalGift = () => {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  // Data Rekening (Bisa disesuaikan nanti)
  const noRekening = "1234567890";
  const namaBank = "BCA";
  const atasNama = "Cahya Lesmana";

  const handleCopy = () => {
    navigator.clipboard.writeText(noRekening);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-olive rounded-3xl shadow-2xl p-8 md:p-14 text-crema flex flex-col items-center text-center space-y-10 relative overflow-hidden border border-olive-light/20">
      {/* Background Ornamen Transparan */}
      <div className="absolute -top-24 -right-24 opacity-10 pointer-events-none">
        <Gift className="w-64 h-64 text-crema" />
      </div>

      <div className="space-y-4 z-10">
        <div className="w-16 h-16 bg-crema/10 rounded-full flex items-center justify-center mx-auto border border-crema/20">
          <Gift className="w-8 h-8 text-crema" />
        </div>
        <h2 className="font-script text-5xl md:text-6xl text-crema drop-shadow-sm">
          Kado Digital
        </h2>
      </div>

      <p className="font-serif text-base md:text-lg italic tracking-wide max-w-lg z-10 text-crema/90 leading-relaxed">
        &quot;Kehadiran dan doa restu Anda adalah hadiah terindah bagi kami. Namun,
        jika Anda ingin memberikan tanda kasih, Anda dapat mengirimkannya
        melalui fitur di bawah ini.&quot;
      </p>

      {/* Kartu Rekening Premium */}
      <div className="w-full max-w-sm bg-olive-dark/60 backdrop-blur-sm rounded-2xl p-6 border border-crema/10 shadow-inner relative z-10 flex flex-col items-center space-y-6">
        <div className="flex items-center gap-3 text-crema/80">
          <WalletCards className="w-5 h-5" />
          <span className="font-serif text-sm tracking-widest uppercase">
            Transfer Bank
          </span>
        </div>

        <div className="space-y-1 w-full border-y border-crema/10 py-4">
          <p className="font-serif font-bold text-2xl tracking-widest text-crema">
            {namaBank}
          </p>
          <p className="font-serif text-lg tracking-[0.2em]">{noRekening}</p>
          <p className="font-serif text-sm tracking-widest text-crema/70 uppercase pt-2">
            a.n. {atasNama}
          </p>
        </div>

        {/* Tombol Salin Interaktif */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 font-serif text-xs md:text-sm tracking-widest uppercase font-medium bg-crema text-olive px-6 py-2.5 rounded-full hover:bg-crema-dark active:scale-95 transition-all duration-300 shadow-md"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <CheckCircle2 className="w-4 h-4 text-green-600" />
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Copy className="w-4 h-4" />
              </motion.div>
            )}
          </AnimatePresence>
          {copied ? "Berhasil Disalin" : "Salin Rekening"}
        </button>
      </div>

      {/* Bagian QR Code (Reveal Interaction) */}
      <div className="z-10 flex flex-col items-center space-y-4 pt-4">
        <button
          onClick={() => setShowQR(!showQR)}
          className="flex items-center gap-2 font-serif text-xs tracking-widest uppercase text-crema/70 hover:text-crema transition-colors border-b border-crema/30 pb-1"
        >
          <QrCode className="w-4 h-4" />
          {showQR ? "Sembunyikan QR Code" : "Tampilkan QR Code"}
        </button>

        <AnimatePresence>
          {showQR && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.9 }}
              animate={{ opacity: 1, height: "auto", scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="relative p-3 mt-4 bg-white rounded-2xl shadow-xl w-[200px] aspect-square flex flex-col items-center justify-center group">
                <div className="grid grid-cols-8 gap-0.5 w-full h-full">
                  {Array.from({ length: 64 }).map((_, i) => {
                    const isDark = (i * 17 + 23) % 10 > 4;
                    return (
                      <div
                        key={i}
                        className={`bg-black ${isDark ? "opacity-100" : "opacity-10"}`}
                      />
                    );
                  })}
                </div>
                {/* Frame Siku untuk Aesthetic QR */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-olive rounded-tl-md" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-olive rounded-tr-md" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-olive rounded-bl-md" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-olive rounded-br-md" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DigitalGift;
