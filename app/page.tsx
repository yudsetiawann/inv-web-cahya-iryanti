"use client";

import { motion, MotionProps } from "framer-motion";
import Cover from "@/components/Cover";
import AudioPlayer from "@/components/AudioPlayer";
import Countdown from "@/components/Countdown";
import EventDetails from "@/components/EventDetails";
import Timeline from "@/components/Timeline";
import DressCode from "@/components/DressCode";
import DigitalGift from "@/components/DigitalGift";
import RSVP from "@/components/RSVP";

export const fadeInUpVariant: MotionProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fefae0] overflow-x-hidden">
      {/* 1. Cover / Hero Section (Full Height) */}
      <Cover />

      {/* Kontainer Utama dengan Whitespace Premium */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24 space-y-24 md:space-y-32">
        {/* 2. Audio Player Section */}
        <motion.div {...fadeInUpVariant}>
          <AudioPlayer />
        </motion.div>
        
        {/* 4. Countdown & Kalender Section */}
        <motion.div {...fadeInUpVariant}>
          <Countdown />
        </motion.div>

        {/* 5. Event Details (Gereja & Pesta) */}
        <motion.div {...fadeInUpVariant}>
          <EventDetails />
        </motion.div>

        {/* 6. Itinerary Timeline Section */}
        <motion.div {...fadeInUpVariant}>
          <Timeline />
        </motion.div>

        {/* 7. Dress Code Section */}
        {/* <motion.div {...fadeInUpVariant}>
          <DressCode />
        </motion.div> */}

        {/* 8. Digital Gift / QR Section */}
        <motion.div {...fadeInUpVariant}>
          <DigitalGift />
        </motion.div>

        {/* 9. RSVP & Footer Section */}
        <motion.div {...fadeInUpVariant} className="!space-y-0">
          <RSVP />
        </motion.div>
      </div>
    </main>
  );
}
