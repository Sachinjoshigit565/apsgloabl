"use client";

import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-5 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">

        <div className="
          h-16
          rounded-2xl
          border border-white/10
          bg-[#07101F]/60
          backdrop-blur-2xl
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          flex items-center justify-between
          px-6
        ">

          {/* LOGO */}
      <Link href="/" className="flex items-center gap-3">

  <Image
    src="./icon/logoaps.png"
    alt="Swift Logistics"
    width={180}
    height={60}
    priority
    className="h-12 w-auto object-contain"
  />
    {/* Company Name */}
  <div className="leading-tight">
    <h2 className="text-white font-bold text-xl lg:text-2xl tracking-wide">
      APS <span className="text-orange-500">GOLDENWAYS</span>
    </h2>

    <p className="text-sm text-slate-300 font-medium">
      Logistics Pvt. Ltd.
    </p>
  </div>

</Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  relative
                  text-sm
                  font-medium
                  transition
                  hover:text-orange-500
                  ${index === 0 ? "text-orange-500" : "text-white/80"}
                `}
              >
                {item.name}

                {index === 0 && (
                  <span className="
                    absolute
                    -bottom-2
                    left-0
                    h-[2px]
                    w-full
                    bg-orange-500
                    rounded-full
                  " />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/quote"
              className="
                flex items-center gap-2
                rounded-xl
                bg-gradient-to-r
                from-orange-500
                to-orange-600
                px-6 py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:scale-105
              "
            >
              Get Quote
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-white"
          >
            {mobileMenu ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="
            mt-3
            rounded-2xl
            border border-white/10
            bg-[#07101F]/95
            backdrop-blur-2xl
            p-6
            lg:hidden
          ">
            <div className="flex flex-col gap-5">

              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-orange-500"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/quote"
                className="
                  mt-2
                  rounded-xl
                  bg-orange-500
                  px-5 py-3
                  text-center
                  font-semibold
                  text-white
                "
              >
                Get Quote
              </Link>

            </div>
          </div>
        )}
      </div>
    </header>
  );
}