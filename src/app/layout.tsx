import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { ContextProvider } from "@/context/ContextProvider";

const roboto = Roboto({ subsets: ["latin"], weight: ["500", "700"] });

export const metadata: Metadata = {
  title: "Batalha de Heróis: Selecione, Liste e Combata!",
  description:
    "Selecione duas cartas de heróis para uma batalha épica, onde suas habilidades serão postas à prova em uma luta simulada. ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
