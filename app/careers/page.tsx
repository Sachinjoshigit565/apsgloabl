"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CareersPage() {
  const [fileName, setFileName] = useState("");

  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">

        <img
          src="/icon/careerna.jpeg"
          alt="career banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Build Your Career With Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-200 text-lg md:text-xl"
          >
            Join our logistics team and grow in a global fast-paced environment
          </motion.p>

        </div>
      </section>

      {/* ================= FORM + CONTENT SECTION ================= */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* ===== LEFT SIDE ===== */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Life at Our LCP 🚀
            </h2>

            <p className="text-gray-600 text-lg">
              We believe in growth, innovation, and teamwork. Our culture encourages
              creativity, ownership, and continuous learning in a fast-paced logistics environment.
            </p>

            <div className="space-y-4">

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
                  ✓
                </div>
                <p>Friendly and collaborative work culture</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
                  ✓
                </div>
                <p>Opportunities for global exposure</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
                  ✓
                </div>
                <p>Fast career growth & skill development</p>
              </div>

            </div>

            <p className="text-sm text-gray-500 pt-4">
              Be part of a team that's shaping the future of logistics.
            </p>
          </motion.div>

          {/* ===== RIGHT SIDE (FORM) ===== */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100"
          >

            <h2 className="text-2xl font-bold mb-6">
              Apply Now
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="Full Name"
                className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Position Applied For"
                className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Resume Upload */}
              <div className="md:col-span-2">
                <label className="block mb-2 font-medium text-gray-700">
                  Upload Resume (PDF / DOC)
                </label>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) =>
                    setFileName(e.target.files?.[0]?.name || "")
                  }
                  className="w-full border rounded-xl px-4 py-3 bg-gray-50"
                />

                {fileName && (
                  <p className="text-green-600 text-sm mt-2">
                    Selected File: {fileName}
                  </p>
                )}
              </div>

              <textarea
                rows={4}
                placeholder="Tell us about yourself..."
                className="md:col-span-2 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="md:col-span-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl hover:scale-[1.02] transition"
              >
                Submit Application →
              </button>

            </form>
          </motion.div>

        </div>
      </section>

      {/* ================= FOOTER NOTE ================= */}
      <section className="py-10 text-center text-gray-500 text-sm">
        We will contact you if your profile matches our requirements.
      </section>

    </main>
  );
}