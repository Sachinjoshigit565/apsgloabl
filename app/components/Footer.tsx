"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-black text-white pt-16 pb-8 px-6 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-4 gap-10">

        {/* ================= LOGO + ABOUT ================= */}
        <div>
          <Link href="/" className="flex items-center mb-3">
            <Image
              src="/icon/logoaps.png"
              alt="Logo"
              width={65}
              height={40}
            />
          </Link>

          <p className="text-gray-400 text-sm mb-4">
            Reliable global logistics solutions with speed and trust.
          </p>

          {/* ================= SOCIAL ICONS ================= */}
          <div className="flex gap-4 mt-4">

            {[
              { src: "/icon/facebook.png", link: "#" },
              { src: "/icon/linkedin.png", link: "#" },
              { src: "/icon/instagram.png", link: "#" },
              { src: "/icon/twitter.png", link: "#" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.link}
                target="_blank"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]"
              >
                <Image
                  src={item.src}
                  alt="social icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </Link>
            ))}

          </div>
        </div>

        {/* ================= SERVICES ================= */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Air Freight</li>
            <li>Sea Freight</li>
            <li>Custom Clearance</li>
          </ul>
        </div>

        {/* ================= COMPANY ================= */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 text-sm">Delhi, India</p>
        </div>

      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2026 Your Logistics Company
      </div>

    </footer>
  );
}