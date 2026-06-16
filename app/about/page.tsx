"use client";

import { Globe, Truck, Ship, Warehouse } from "lucide-react";

export default function AboutCompany() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            <span className="
              inline-block
              bg-orange-100
              text-orange-600
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
            ">
              ABOUT COMPANY
            </span>

            <h2 className="
              mt-5
              text-4xl
              lg:text-5xl
              font-black
              text-slate-900
            ">
              APS Goldenways
              <span className="text-orange-500">
                {" "}Logistics
              </span>
            </h2>

            <p className="
              mt-6
              text-lg
              text-slate-600
              leading-8
            ">
              APS Goldenways Logistics Pvt. Ltd. is a trusted
              logistics and freight forwarding company providing
              seamless transportation solutions across road,
              sea, and air networks.

              We specialize in cargo movement, customs clearance,
              warehousing, and end-to-end supply chain management
              for businesses worldwide.
            </p>

          </div>

          {/* RIGHT */}
       {/* RIGHT IMAGE */}
<div className="relative">

  <div className="relative overflow-hidden rounded-3xl shadow-2xl">

    <img
      src="/hero/team-logistics.png"
      alt="APS Goldenways Team"
      className="h-[550px] w-full object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

    {/* Experience Card */}
    <div className="
      absolute
      bottom-8
      left-8
      bg-white
      rounded-2xl
      px-8
      py-6
      shadow-xl
    ">
      <h3 className="text-4xl font-black text-orange-500">
        10+
      </h3>

      <p className="text-slate-600 font-medium">
        Years Experience
      </p>
    </div>

    {/* Team Card */}
    <div className="
      absolute
      top-8
      right-8
      bg-white/90
      backdrop-blur-xl
      rounded-2xl
      px-6
      py-4
      shadow-xl
    ">
      <p className="text-sm text-slate-500">
        Trusted By
      </p>

      <h4 className="text-2xl font-bold text-slate-900">
        500+ Clients
      </h4>
    </div>

  </div>

</div>
  </div>

</div>
    </section>
  );
}