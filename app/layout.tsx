import type { Metadata, Viewport } from "next";
import { Quicksand } from "next/font/google";
import "./../styles/globals.css";
import { Analytics } from "@vercel/analytics/react"
import clsx from "clsx";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MitzuStudios",
    template: `%s - MitzuStudios`,
  },
  description: "Sitio web de MitzuStudios, Made by Mitzunie",
  icons: {
    icon: "/favicon.ico",
  },
};

  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="es" suppressHydrationWarning>
        <body className={clsx("min-h-screen",quicksand.variable)} >
          {children}
          <Analytics/>
        </body>
      </html>
    );
  }
