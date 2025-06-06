import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import NavegationMobile from "./components/NavegationMobile";
import NavegationDesktop from "./components/NavegationDesktop";
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Horario de Anime en Español : Fechas y Plataformas de Estreno",
  description:
    "Consulta los horarios de anime en español latino 📅✨ ¡Descubre cuándo y en qué plataformas (Crunchyroll, Netflix, Prime Video y más) podrás ver tus animes favoritos! 🚀 Mantente al día con los estrenos de esta temporada 🖥️🎬",
  icons: { icon: "https://i.imghippo.com/files/aaF3073iU.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <meta
        name="google-adsense-account"
        content="ca-pub-1680603531729114"
      ></meta>
      <body className={`${inter.className} `}>
        <div className="">
          <NavegationMobile />
          <NavegationDesktop />
        </div>
        {children}
      </body>
      <Toaster />
    </html>
  );
}
