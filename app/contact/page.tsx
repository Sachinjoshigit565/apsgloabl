"use client";

import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-24 bg-[#07101F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
            relative
            rounded-[40px]
            overflow-hidden
            bg-gradient-to-r
            from-orange-500
            via-orange-600
            to-orange-500
            p-10 lg:p-16
          "
        >
          {/* Decorative Circles */}
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-black/10" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>

              <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold">
                GET IN TOUCH
              </span>

              <h2 className="mt-6 text-4xl lg:text-6xl font-black text-white leading-tight">
                Ready To Move
                <br />
                Your Cargo
                <span className="block text-[#07101F]">
                  Worldwide?
                </span>
              </h2>

              <p className="mt-6 text-lg text-orange-100 max-w-xl">
                APS Goldenways Logistics delivers reliable freight,
                warehousing, customs clearance and global shipping
                solutions tailored to your business needs.
              </p>

            </div>

            {/* RIGHT */}
            <div className="lg:text-right">

              <div className="flex flex-col gap-5 lg:items-end">

                <Link
                  href="/quote"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    bg-white
                    text-orange-600
                    px-8
                    py-4
                    rounded-2xl
                    font-bold
                    text-lg
                    hover:scale-105
                    transition
                  "
                >
                  Request Free Quote
                  <ArrowRight size={20} />
                </Link>

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    border
                    border-white/30
                    text-white
                    px-8
                    py-4
                    rounded-2xl
                    font-semibold
                    hover:bg-white/10
                    transition
                  "
                >
                  Contact Our Team
                </Link>

              </div>

              {/* Contact Info */}
              <div className="mt-10 flex flex-col gap-4 lg:items-end">

                <div className="flex items-center gap-3 text-white">
                  <Phone size={18} />
                  <span>+91 98765 43210</span>
                </div>

                <div className="flex items-center gap-3 text-white">
                  <Mail size={18} />
                  <span>info@apsgoldenways.com</span>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}