'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { TextAnimate } from "@/components/magicui/text-animate";
import { Particles } from "@/components/magicui/particles";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
        <Particles
          className="absolute inset-0 z-0 opacity-70"
          quantity={100}
          ease={80}
          color={"#ffffff"}
          refresh
        />

        <section className="relative z-10 flex flex-col items-center text-center px-4" id="hero">
          <div className="p-4">
            <Image
              src={"/Logo/logo.png"}
              width={180}
              height={180}
              alt="Logo MitzuStudios"
            />
          </div>
          <TextAnimate 
            as="p" 
            animation="fadeIn" 
            className="text-xl md:text-2xl font-bold mt-6"
          >
            MITZUSTUDIOS
          </TextAnimate>
          <TextAnimate as="p" animation="fadeIn" className="mt-4 text-gray-300 max-w-md">Construyendo hoy el futuro que imagino para mañana</TextAnimate>
        </section>
      </div>
    </main>
  );
}
