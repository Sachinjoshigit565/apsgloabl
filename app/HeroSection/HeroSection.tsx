"use client";

import Link from "next/link";
import {
  ArrowRight,
  Package,
  Globe,
  ShieldCheck,
  Truck,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero/freight-banner.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07101F]/95 via-[#07101F]/75 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">

        <div className="max-w-3xl pt-24">

     

          {/* Heading */}
          <h1 className="mt-8 text-4xl md:text-5xl xl:text-6xl font-black leading-[1.05] tracking-tight text-white">

            Fast, Reliable &
            <br />

            Secure

            <span className="block text-orange-500">
              Freight Solutions
            </span>

          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-slate-300 leading-9">

            APS Goldenways Logistics delivers world-class
            freight forwarding, transportation, customs
            clearance and supply chain solutions across
            India and international markets.

          </p>


         

        </div>

      </div>

      {/* Floating Service Cards */}
      <div
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          hidden
          lg:flex
          gap-5
          z-20
        "
      >


      </div>
    </section>
  );
}