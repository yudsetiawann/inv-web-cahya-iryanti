import type { Metadata } from "next";
// Impor font langsung dari Google Fonts
import { Pinyon_Script, Lora } from "next/font/google";
import "./globals.css";

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  // Sangat penting untuk menentukan metadataBase agar Next.js bisa membaca path gambar relatif dengan benar saat di-deploy
  metadataBase: new URL("https://cahya-iryanti-wedding.vercel.app/"), // Ganti dengan domain asli nantinya

  title: "Undangan Pernikahan Cahya & Iryanti",
  description:
    "Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir pada hari bahagia kami.",

  openGraph: {
    title: "Undangan Pernikahan | Cahya & Iryanti",
    description:
      "Minggu, 24 Mei 2026. Merupakan suatu kehormatan apabila Bapak/Ibu/Saudara/i berkenan hadir.",
    url: "/",
    siteName: "Pernikahan Cahya & Iryanti",
    images: [
      {
        url: "/images/rings.jpeg", // Akan otomatis membaca dari public/images/rings.jpeg
        width: 1200, // Ukuran standar rekomendasi WhatsApp & Facebook
        height: 630,
        alt: "Cincin Pernikahan Cahya & Iryanti",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  // Tambahan opsional untuk preview di Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Undangan Pernikahan | Cahya & Iryanti",
    description: "Minggu, 24 Mei 2026",
    images: ["/images/rings.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning={true}>
      <body
        className={`${pinyon.variable} ${lora.variable}`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
