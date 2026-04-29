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
  title: "Fernanda & Gustavo • Website Undangan",
  description:
    "Website undangan digital untuk pernikahan Fernanda & Gustavo pada 14 November 2025.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${pinyon.variable} ${lora.variable} bg-crema text-olive antialiased font-serif`}
      >
        {children}
      </body>
    </html>
  );
}
