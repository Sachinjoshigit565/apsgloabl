"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    company: "Global Exports Pvt Ltd",
    review:
      "APS Goldenways Logistics has consistently delivered our shipments on time. Their professionalism and communication are outstanding.",
  },
  {
    name: "Amit Verma",
    company: "AV Manufacturing",
    review:
      "We've been working with APS Goldenways for years. Their customs clearance and freight services are reliable and cost-effective.",
  },
  {
    name: "Priya Mehta",
    company: "International Traders",
    review:
      "Excellent logistics partner with a strong global network. Their team ensures smooth cargo movement every time.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-5 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
            CLIENT TESTIMONIALS
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900">
            What Our
            <span className="text-orange-500"> Clients Say</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Trusted by businesses across industries for reliable,
            secure, and efficient logistics solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="
                bg-slate-50
                rounded-3xl
                p-8
                border border-slate-100
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-slate-600 leading-8 italic">
                "{item.review}"
              </p>

              {/* User */}
              <div className="mt-8 flex items-center gap-4">

                <div
                  className="
                    h-14
                    w-14
                    rounded-full
                    bg-orange-500
                    text-white
                    flex
                    items-center
                    justify-center
                    font-bold
                    text-lg
                  "
                >
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {item.company}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Stats */}
        <div className="mt-20 bg-[#07101F] rounded-3xl p-10 lg:p-14">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-black text-orange-500">
                5000+
              </h3>
              <p className="text-slate-300 mt-2">
                Shipments Delivered
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-orange-500">
                50+
              </h3>
              <p className="text-slate-300 mt-2">
                Global Partners
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-orange-500">
                25+
              </h3>
              <p className="text-slate-300 mt-2">
                Countries Served
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-orange-500">
                98%
              </h3>
              <p className="text-slate-300 mt-2">
                Client Satisfaction
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}