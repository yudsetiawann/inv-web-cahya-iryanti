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

const paymentData = {
  pria: {
    label: "Mempelai Pria",
    methods: [
      {
        id: "bsi-pria",
        type: "Bank",
        name: "BSI",
        number: "7185347502",
        holder: "Cahya Lesmana",
        icon: WalletCards,
      },
      {
        id: "dana-pria",
        type: "E-Wallet",
        name: "DANA",
        number: "085353112223",
        holder: "Cahya Lesmana",
        icon: Smartphone,
      },
    ],
  },
  wanita: {
    label: "Mempelai Wanita",
    methods: [
      {
        id: "bsi-wanita",
        type: "Bank",
        name: "BSI",
        number: "7241962312",
        holder: "Iryanti",
        icon: WalletCards,
      },
      {
        id: "dana-wanita",
        type: "E-Wallet",
        name: "DANA",
        number: "085812461550",
        holder: "Iryanti",
        icon: Smartphone,
      },
    ],
  },
};

const DigitalGift = () => {
  const [activeTab, setActiveTab] = useState<"pria" | "wanita">("pria");
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
        className="relative w-full max-w-md bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] text-center flex flex-col items-center border border-white/60"
      >
        {/* Header */}
        <div className="space-y-4 z-10 mb-8">
          <div className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center mx-auto border border-olive/10">
            <Gift className="w-6 h-6 text-olive" strokeWidth={1.5} />
          </div>
          <h2 className="font-script text-4xl md:text-5xl text-olive">
            Kado Digital
          </h2>
          <p className="font-serif text-xs md:text-sm italic text-olive/70 leading-relaxed px-4">
            Tanpa mengurangi rasa hormat, bagi Anda yang ingin memberikan tanda
            kasih, dapat melalui fitur di bawah ini:
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-olive/10 p-1 rounded-full mb-8 w-full z-10 border border-olive/5">
          {(["pria", "wanita"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-olive text-white shadow-md"
                  : "text-olive/60 hover:text-olive"
              }`}
            >
              {paymentData[tab].label}
            </button>
          ))}
        </div>

        {/* Content Cards */}
        <div className="w-full relative z-10 min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {paymentData[activeTab].methods.map((method) => {
                const Icon = method.icon;
                const isCopied = copiedId === method.id;

                return (
                  <div
                    key={method.id}
                    className="bg-white/60 rounded-2xl p-5 border border-white flex flex-col items-center space-y-4 shadow-sm"
                  >
                    <div className="flex items-center gap-2 text-olive/50">
                      <Icon size={14} />
                      <span className="font-sans text-[9px] tracking-widest uppercase font-bold">
                        {method.type} {method.name}
                      </span>
                    </div>

                    <div className="w-full border-y border-olive/5 py-3">
                      <p className="font-serif text-lg tracking-[0.1em] text-olive-dark font-medium">
                        {method.number}
                      </p>
                      <p className="font-sans text-[10px] tracking-widest text-olive/60 uppercase mt-1">
                        a.n. {method.holder}
                      </p>
                    </div>

                    <button
                      onClick={() => handleCopy(method.id, method.number)}
                      className="flex items-center gap-2 font-sans text-[10px] tracking-widest uppercase font-bold bg-olive text-white px-6 py-2.5 rounded-full hover:bg-olive-dark active:scale-95 transition-all duration-300 w-full justify-center"
                    >
                      <AnimatePresence mode="wait">
                        {isCopied ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle2 size={12} />
                            <span>Tersalin</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="flex items-center gap-2"
                          >
                            <Copy size={12} />
                            <span>Salin Nomor</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default DigitalGift;
