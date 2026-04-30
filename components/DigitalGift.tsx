"use client";

import {
  Gift,
  Copy,
  CheckCircle2,
  WalletCards,
  Smartphone,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Data Pembayaran
const paymentMethods = [
  {
    id: "bsi",
    type: "Bank",
    name: "BSI (Bank Syariah Indonesia)",
    number: "7185347502",
    holder: "Cahya Lesmana",
    icon: WalletCards,
  },
  {
    id: "dana",
    type: "E-Wallet",
    name: "DANA",
    number: "085353112223",
    holder: "Cahya Lesmana",
    icon: Smartphone,
  },
];

const DigitalGift = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, number: string) => {
    navigator.clipboard.writeText(number);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="py-20 relative overflow-hidden flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-2xl bg-white/40 p-10 md:p-16 rounded-[2.5rem] shadow-[0_15px_40px_rgba(107,112,92,0.06)] text-center flex flex-col items-center space-y-12 border border-[#6b705c]/10"
      >
        {/* Inner Border Halus */}
        <div className="absolute inset-3 border border-[#6b705c]/5 rounded-[2rem] pointer-events-none" />

        {/* Header */}
        <div className="space-y-4 z-10">
          <div className="w-16 h-16 bg-[#fefae0]/50 rounded-full flex items-center justify-center mx-auto border border-[#6b705c]/10">
            <Gift className="w-8 h-8 text-[#6b705c]" strokeWidth={1.5} />
          </div>
          <h2 className="font-script text-5xl md:text-6xl text-[#6b705c]">
            Kado Digital
          </h2>
        </div>

        <p className="font-serif text-sm md:text-base italic tracking-wide max-w-md z-10 text-[#6b705c]/80 leading-relaxed">
          &quot;Kehadiran dan doa restu Anda adalah hadiah terindah bagi kami.
          Namun, jika Anda ingin memberikan tanda kasih, Anda dapat
          mengirimkannya melalui fitur di bawah ini.&quot;
        </p>

        {/* Container Rekening & E-Wallet */}
        <div className="w-full grid md:grid-cols-2 gap-6 relative z-10">
          {paymentMethods.map((method) => {
            const Icon = method.icon;
            const isCopied = copiedId === method.id;

            return (
              <div
                key={method.id}
                className="bg-[#fefae0]/30 rounded-2xl p-6 border border-[#6b705c]/10 flex flex-col items-center space-y-5 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-2 text-[#6b705c]/60">
                  <Icon size={16} />
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-medium">
                    {method.type}
                  </span>
                </div>

                <div className="space-y-1.5 w-full border-y border-[#6b705c]/10 py-4">
                  <p className="font-serif font-medium text-lg text-[#2d2d2d] tracking-wide">
                    {method.name}
                  </p>
                  <p className="font-serif text-xl tracking-[0.15em] text-[#6b705c]">
                    {method.number}
                  </p>
                  <p className="font-sans text-[11px] tracking-widest text-[#6b705c]/70 uppercase pt-1">
                    a.n. {method.holder}
                  </p>
                </div>

                <button
                  onClick={() => handleCopy(method.id, method.number)}
                  className="flex items-center gap-2 font-sans text-[11px] tracking-[0.15em] uppercase font-medium bg-[#6b705c] text-[#fefae0] px-6 py-2.5 rounded-full hover:bg-[#5a5e4d] active:scale-95 transition-all duration-300 w-full justify-center"
                >
                  <AnimatePresence mode="wait">
                    {isCopied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CheckCircle2 size={14} className="text-[#fefae0]" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Copy size={14} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {isCopied ? "Tersalin" : "Salin Nomor"}
                </button>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default DigitalGift;
