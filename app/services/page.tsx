"use client";

import Image from "next/image";
import {
  Truck,
  Ship,
  Plane,
  Warehouse,
  PackageCheck,
  FileCheck,
} from "lucide-react";

const services = [
  {
    title: "Road Freight",
    description:
      "We offer reliable and efficient road freight services for the safe transportation of goods across cities and states. Our modern fleet, experienced drivers, and streamlined logistics network ensure timely deliveries, real-time tracking, and secure handling of cargo, helping businesses maintain smooth supply chain operations and meet customer expectations.",
    icon: Truck,
    image: "/icon/truck.jpg",
  },
  {
    title: "Sea Freight",
    description:
      "We offer reliable and cost-effective sea freight services for international cargo transportation. Through our global shipping network and trusted carrier partnerships, we ensure secure handling, efficient transit, and timely delivery of goods across major ports worldwide, helping businesses streamline their import and export operations with confidence.",
    icon: Ship,
    image: "/icon/ship.jpeg",
  },
  {
    title: "Air Freight",
    description:
      "We offer fast and reliable air freight services for urgent shipments worldwide. Our global logistics network ensures secure cargo handling, expedited transit, and timely deliveries across international destinations. Whether for time-sensitive documents, high-value goods, or critical supplies, we provide efficient transportation solutions tailored to your business needs.",
    icon: Plane,
    image: "/icon/plane.jpeg",
  },
  {
    title: "Warehousing",
    description:
      "We offer secure and scalable warehousing solutions designed to meet your storage and distribution needs. Our modern facilities provide safe cargo handling, organized inventory management, and efficient stock control systems, ensuring your goods are stored securely and readily available for timely dispatch and seamless supply chain operations.",
    icon: Warehouse,
    image: "/icon/warehouse.jpeg",
  },
  {
    title: "Cargo Handling",
    description:
      "We provide professional cargo handling services to ensure the safe and efficient movement of goods at every stage of the logistics process. Our experienced team manages loading, unloading, packaging, and transportation with precision, minimizing risks and ensuring timely delivery while maintaining the highest standards of safety and operational efficiency.",
    icon: PackageCheck,
    image: "/icon/lcpnew.jpeg",
  },
  {
    title: "Custom Clearance",
    description:
      "We offer comprehensive customs clearance services to ensure hassle-free import and export operations. Our experienced team handles documentation, regulatory compliance, duty processing, and customs procedures efficiently, helping businesses avoid delays and ensuring smooth, timely clearance of goods across international borders.",
    icon: FileCheck,
    image: "/icon/quoteban.jpeg",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-5 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
            OUR SERVICES
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900">
            Complete Logistics &
            <span className="text-orange-500">
              {" "}
              Freight Solutions
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            APS Goldenways Logistics provides end-to-end freight
            forwarding and supply chain solutions to ensure your
            cargo reaches its destination safely and efficiently.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  min-h-[340px]
                  shadow-lg
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >
                {/* Optimized Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority={index < 3}
                  quality={75}
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-500" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full p-8 text-white">
                  <div
                    className="
                      h-16
                      w-16
                      rounded-2xl
                      bg-orange-500/20
                      backdrop-blur-md
                      border
                      border-white/20
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Icon
                      size={32}
                      className="text-orange-400"
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-white/80 leading-7 flex-grow">
                    {service.description}
                  </p>

               
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}