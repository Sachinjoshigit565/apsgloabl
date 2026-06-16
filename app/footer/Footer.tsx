"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#07101F] text-white">

      <div className="h-[1px] bg-white/10" />

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* COMPANY */}
          <div>

            <div className="flex items-center gap-4">

              <Image
                src="/icon/logoaps.png"
                alt="APS Goldenways Logistics"
                width={60}
                height={60}
                className="object-contain"
              />

              <div>
                <h3 className="text-2xl font-bold">
                  APS{" "}
                  <span className="text-orange-500">
                    GOLDENWAYS
                  </span>
                </h3>

                <p className="text-slate-400 text-sm">
                  Logistics Pvt. Ltd.
                </p>
              </div>

            </div>

            <p className="mt-6 text-slate-400 leading-7">
              APS Goldenways Logistics Pvt. Ltd. provides
              complete freight forwarding, transportation,
              warehousing, customs clearance and global
              logistics solutions with reliability,
              efficiency and excellence.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h4 className="text-xl font-bold mb-6">
              Quick Links
            </h4>

            <ul className="space-y-4 text-slate-400">

              <li>
                <Link href="/" className="hover:text-orange-500 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-orange-500 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-orange-500 transition">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/tracking" className="hover:text-orange-500 transition">
                  Career
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-orange-500 transition">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* SERVICES */}
          <div>

            <h4 className="text-xl font-bold mb-6">
              Our Services
            </h4>

            <ul className="space-y-4 text-slate-400">

              <li>Road Freight</li>
              <li>Sea Freight</li>
              <li>Air Freight</li>
              <li>Warehousing</li>
              <li>Cargo Handling</li>
              <li>Custom Clearance</li>

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h4 className="text-xl font-bold mb-6">
              Contact Info
            </h4>

            <div className="space-y-5">

              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="text-orange-500 mt-1"
                />
                <p className="text-slate-400">
                  Gurgaon, Haryana, India
                </p>
              </div>

              <div className="flex gap-3">
                <Phone
                  size={18}
                  className="text-orange-500 mt-1"
                />
                <p className="text-slate-400">
                  +91 98765 43210
                </p>
              </div>

              <div className="flex gap-3">
                <Mail
                  size={18}
                  className="text-orange-500 mt-1"
                />
                <p className="text-slate-400">
                  info@apsgoldenways.com
                </p>
              </div>

            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-8">

              <Link
                href="#"
                className="
                  h-11 w-11
                  rounded-xl
                  bg-white/5
                  flex items-center justify-center
                  hover:bg-orange-500
                  transition-all
                "
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="#"
                className="
                  h-11 w-11
                  rounded-xl
                  bg-white/5
                  flex items-center justify-center
                  hover:bg-orange-500
                  transition-all
                "
              >
                <FaLinkedinIn size={18} />
              </Link>

              <Link
                href="#"
                className="
                  h-11 w-11
                  rounded-xl
                  bg-white/5
                  flex items-center justify-center
                  hover:bg-orange-500
                  transition-all
                "
              >
                <FaInstagram size={18} />
              </Link>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} APS Goldenways Logistics Pvt. Ltd.
            All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">

            <Link
              href="/privacy-policy"
              className="text-slate-500 hover:text-orange-500"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-slate-500 hover:text-orange-500"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/"
              className="flex items-center gap-1 text-orange-500"
            >
              Back to Top
              <ArrowUpRight size={14} />
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}