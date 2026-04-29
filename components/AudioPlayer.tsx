"use client";
import { Play, Pause, Music } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

// Komponen mini untuk Audio Visualizer (Waveform)
const Waveform = ({ isPlaying }: { isPlaying: boolean }) => (
  <div className="flex items-center gap-[3px] h-4">
    {[1, 2, 3, 4, 5].map((i) => (
      <motion.div
        key={i}
        className="w-1 bg-olive rounded-full origin-bottom"
        animate={
          isPlaying
            ? { height: ["20%", "100%", "40%", "90%", "30%"] }
            : { height: "20%" }
        }
        transition={{
          duration: 0.7,
          repeat: Infinity,
          delay: i * 0.1,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Link lagu placeholder
  const audioUrl =
    "/audio/a-night-to-remember.mpeg";

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((e) => console.error("Error playing:", e));
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-6 text-center py-10 w-full">
      {/* Header Kecil */}
      <div className="flex items-center gap-2 text-olive/80">
        <Music className="w-4 h-4" />
        <p className="font-serif text-sm tracking-widest uppercase">
          Lagu Kami
        </p>
      </div>

      {/* Main Player Card (Glassmorphism + Soft Shadow) */}
      <div className="relative w-full max-w-sm bg-crema/40 backdrop-blur-md border border-olive/20 p-3 pr-5 rounded-full shadow-[0_8px_30px_rgba(107,112,92,0.1)] flex items-center gap-4 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(107,112,92,0.15)] hover:border-olive/30">
        {/* Piringan Hitam (Vinyl) Custom CSS */}
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="relative flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-tr from-[#1a1a1a] to-[#333333] border-2 border-olive/30 shadow-md flex items-center justify-center overflow-hidden"
        >
          {/* Alur/Groove Piringan Hitam */}
          <div className="absolute inset-1 rounded-full border border-white/10" />
          <div className="absolute inset-2 rounded-full border border-white/5" />
          <div className="absolute inset-3 rounded-full border border-white/10" />

          {/* Label Tengah Vinyl */}
          <div className="w-5 h-5 bg-olive rounded-full border-2 border-crema z-10 flex items-center justify-center">
            <div className="w-1 h-1 bg-crema rounded-full" />
          </div>
        </motion.div>

        {/* Track Info & Visualizer */}
        <div className="flex-1 flex flex-col items-start justify-center overflow-hidden">
          <p className="font-serif text-base font-semibold text-olive truncate w-full text-left">
            A Night to Remember
          </p>
          <div className="flex items-center gap-2 mt-0.5">
            <p className="font-serif text-xs text-olive/70 truncate">Laufey</p>
            <span className="text-olive/30 text-xs">•</span>
            {/* Waveform aktif saat lagu menyala */}
            <Waveform isPlaying={isPlaying} />
          </div>
        </div>

        {/* Play/Pause Button (Elevated) */}
        <button
          onClick={togglePlay}
          className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-olive text-crema rounded-full shadow-[0_4px_15px_rgba(107,112,92,0.4)] hover:bg-olive-dark hover:scale-105 active:scale-95 transition-all duration-300 group"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 fill-crema" />
          ) : (
            <Play className="w-5 h-5 fill-crema ml-1 group-hover:drop-shadow-[0_0_8px_rgba(254,250,224,0.5)] transition-all" />
          )}
        </button>

        {/* Circular Progress Bar (Absolute di sekeliling tombol play) */}
        <svg className="absolute right-3 w-12 h-12 pointer-events-none transform -rotate-90">
          <circle
            cx="24"
            cy="24"
            r="23"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            className="text-olive/10"
          />
          <circle
            cx="24"
            cy="24"
            r="23"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray={2 * Math.PI * 23}
            strokeDashoffset={
              2 * Math.PI * 23 - (progress / 100) * 2 * Math.PI * 23
            }
            className="text-olive transition-all duration-300 ease-linear"
          />
        </svg>
      </div>

      <audio ref={audioRef} src={audioUrl} />
    </div>
  );
};

export default AudioPlayer;
