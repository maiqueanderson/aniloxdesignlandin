import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anilox Design | Agência de Marketing Digital e Design Gráfico",
  description: "Mais de 10 anos de experiência em Marketing Digital e Design Gráfico. Criamos projetos de Branding, Mídias Sociais, Criação de Sites e Tráfego Pago.",
  keywords: ["Marketing Digital", "Design Gráfico", "Agência", "Tráfego Pago", "Meta Ads", "Branding", "Criação de Sites", "Anilox Design"],
  openGraph: {
    title: "Anilox Design | Agência de Marketing Digital e Design Gráfico",
    description: "Criamos projetos de Branding, Mídias Sociais, Criação de Sites e Marketing Digital.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased selection:bg-purple-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
