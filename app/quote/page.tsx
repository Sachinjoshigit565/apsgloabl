// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function GetQuotePage() {
//     const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     type: "",
//     title: "",
//     company: "",
//     address: "",
//     city: "",
//     country: "",
//     email: "",
//     phone: "",
//     services: [] as string[],
//   });

//   const servicesList = [
//     "Air Freight",
//     "LCL Consolidation",
//     "Air, Road & Rail Trans",
//     "Chartering Services",
//     "Cargo Insurance",
//     "Warehousing",
//     "Port Handling",
//     "Others",
//   ];

//   const handleServiceChange = (service: string) => {
//     setForm((prev) => {
//       const exists = prev.services.includes(service);
//       return {
//         ...prev,
//         services: exists
//           ? prev.services.filter((s) => s !== service)
//           : [...prev.services, service],
//       };
//     });
//   };




//   const handleSubmit = async (e: any) => {
//   e.preventDefault();
// setLoading(true);
//   try {
//     const res = await fetch("/api/send-quote", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(form),
//     });

//     const text = await res.text(); // 👈 get raw response first
//     console.log("SERVER RESPONSE:", text);

//     let result;
//     try {
//       result = JSON.parse(text);
//     } catch {
//       throw new Error("API is not returning JSON");
//     }

//     if (result.success) {
//       alert("✅ Request sent successfully!");
//       handleReset();
//     } else {
//       alert("❌ Failed to send request");
//     }
//   } catch (error) {
//     console.error("ERROR:", error);
//     alert("❌ Something went wrong");
//   }
//   finally {
//     setLoading(false); // 🔥 STOP LOADING (VERY IMPORTANT)
//   }
// };

//   const handleReset = () => {
//     setForm({
//       firstName: "",
//       lastName: "",
//       type: "",
//       title: "",
//       company: "",
//       address: "",
//       city: "",
//       country: "",
//       email: "",
//       phone: "",
//       services: [],
//     });
//   };

//   return (
//     <main className="bg-white text-gray-900">

//       {/* ================= HERO ================= */}
//   {/* ================= HERO BANNER ================= */}
// <section
//   className="relative py-28 text-center px-6 text-white bg-cover bg-center">
//       <img
//     src="/icon/quoteban.jpeg"   // 👉 add this image
//     alt="about banner"
//     className="absolute inset-0 w-full h-full object-cover"
//   />


//   {/* Dark Overlay */}
//   <div className="absolute inset-0 bg-black/60"></div>

//   {/* Content */}
//   <div className="relative z-10 max-w-4xl mx-auto">

//     <motion.h1
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="text-4xl md:text-5xl font-bold"
//     >
//       Request a Quotation
//     </motion.h1>

//     <p className="text-gray-200 mt-4 text-lg">
//       Get fast, accurate pricing for your logistics and freight forwarding needs
//     </p>

//     {/* Optional highlight badge */}
//     <div className="mt-6 inline-block bg-blue-600/90 px-4 py-2 rounded-full text-sm">
//       Trusted Global Freight Solutions
//     </div>

//   </div>
// </section>

//       {/* ================= FORM ================= */}
//       <section className="py-16 px-6 max-w-6xl mx-auto">

//       <form
//   onSubmit={handleSubmit}
//   className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-2xl rounded-3xl p-6 md:p-10 space-y-10"
// >

//   {/* ================= SECTION CARD ================= */}
//   <div className="bg-gray-50 p-6 rounded-2xl border">
//     <h2 className="text-lg font-semibold mb-6 text-blue-600">
//       Personal Information
//     </h2>

//     <div className="grid md:grid-cols-2 gap-5">

//       <input
//         placeholder="First Name *"
//         className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-xl outline-none transition"
//         value={form.firstName}
//         onChange={(e) =>
//           setForm({ ...form, firstName: e.target.value })
//         }
//         required
//       />

//       <input
//         placeholder="Last Name *"
//         className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 rounded-xl outline-none transition"
//         value={form.lastName}
//         onChange={(e) =>
//           setForm({ ...form, lastName: e.target.value })
//         }
//         required
//       />

//     </div>
//   </div>

//   {/* ================= ROLE ================= */}
//   <div className="bg-gray-50 p-6 rounded-2xl border">
//     <h2 className="text-lg font-semibold mb-4 text-blue-600">
//       You are *
//     </h2>

//     <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

//       {[
//         "Manufacturer",
//         "Freight Forwarder",
//         "Exporter",
//         "Importer",
//         "Agent",
//         "Individual",
//       ].map((type) => (
//         <label
//           key={type}
//           className={`cursor-pointer rounded-xl p-3 text-center border transition font-medium
//           ${
//             form.type === type
//               ? "bg-blue-600 text-white border-blue-600 shadow-md"
//               : "bg-white hover:bg-blue-50 border-gray-300"
//           }`}
//         >
//           <input
//             type="radio"
//             name="type"
//             className="hidden"
//             checked={form.type === type}
//             onChange={() => setForm({ ...form, type })}
//           />
//           {type}
//         </label>
//       ))}

//     </div>
//   </div>

//   {/* ================= COMPANY ================= */}
//   <div className="bg-gray-50 p-6 rounded-2xl border">
//     <h2 className="text-lg font-semibold mb-6 text-blue-600">
//       Company Details
//     </h2>

//     <div className="grid md:grid-cols-2 gap-5">

//       <input
//         placeholder="Title"
//         className="input"
//         value={form.title}
//         onChange={(e) =>
//           setForm({ ...form, title: e.target.value })
//         }
//       />

//       <input
//         placeholder="Company Name"
//         className="input"
//         value={form.company}
//         onChange={(e) =>
//           setForm({ ...form, company: e.target.value })
//         }
//       />

//       <input
//         placeholder="Street Address *"
//         className="md:col-span-2 input"
//         value={form.address}
//         onChange={(e) =>
//           setForm({ ...form, address: e.target.value })
//         }
//         required
//       />

//       <input
//         placeholder="City / Zip Code *"
//         className="input"
//         value={form.city}
//         onChange={(e) =>
//           setForm({ ...form, city: e.target.value })
//         }
//         required
//       />

//       <input
//         placeholder="Country *"
//         className="input"
//         value={form.country}
//         onChange={(e) =>
//           setForm({ ...form, country: e.target.value })
//         }
//         required
//       />

//       <input
//         placeholder="Email *"
//         className="input"
//         value={form.email}
//         onChange={(e) =>
//           setForm({ ...form, email: e.target.value })
//         }
//         required
//       />

//       <input
//         placeholder="Phone Number *"
//         className="input"
//         value={form.phone}
//         onChange={(e) =>
//           setForm({ ...form, phone: e.target.value })
//         }
//         required
//       />

//     </div>
//   </div>

//   {/* ================= SERVICES ================= */}
//   <div className="bg-gray-50 p-6 rounded-2xl border">
//     <h2 className="text-lg font-semibold mb-4 text-blue-600">
//       Services Needed
//     </h2>

//     <div className="grid md:grid-cols-4 gap-3">

//       {servicesList.map((service) => (
//         <label
//           key={service}
//           className={`cursor-pointer text-sm rounded-xl p-3 border transition text-center
//           ${
//             form.services.includes(service)
//               ? "bg-blue-600 text-white border-blue-600"
//               : "bg-white hover:bg-blue-50 border-gray-300"
//           }`}
//         >
//           <input
//             type="checkbox"
//             className="hidden"
//             checked={form.services.includes(service)}
//             onChange={() => handleServiceChange(service)}
//           />
//           {service}
//         </label>
//       ))}

//     </div>
//   </div>

//   {/* ================= BUTTONS ================= */}
//   <div className="flex gap-4 pt-4">

//     <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50"
//             >
//               {loading ? "Sending..." : "Submit Request"}
//             </button>

//     <button
//       type="button"
//       onClick={handleReset}
//       className="w-full border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition"
//     >
//       Reset
//     </button>

//   </div>

// </form>

//       </section>

//     </main>
//   );
// }
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { sendQuoteEmail } from "@/lib/sendQuote";

export default function GetQuotePage() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    type: "",
    title: "",
    company: "",
    address: "",
    city: "",
    country: "",
    email: "",
    phone: "",
    services: [] as string[],
  });

  const servicesList = [
    "Air Freight",
    "LCL Consolidation",
    "Air, Road & Rail Trans",
    "Chartering Services",
    "Cargo Insurance",
    "Warehousing",
    "Port Handling",
    "Others",
  ];

  const handleServiceChange = (service: string) => {
    setForm((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendQuoteEmail(form);
      alert("✅ Request sent successfully!");
      handleReset();
    } catch (error) {
      console.log(error);
      alert("❌ Failed to send request");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setForm({
      firstName: "",
      lastName: "",
      type: "",
      title: "",
      company: "",
      address: "",
      city: "",
      country: "",
      email: "",
      phone: "",
      services: [],
    });
  };

  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative py-28 text-center px-6 text-white bg-cover bg-center">
        <img
          src="/icon/quoteban.jpeg"
          alt="about banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Request a Quotation
          </motion.h1>

          <p className="text-gray-200 mt-4 text-lg">
            Get fast, accurate pricing for your logistics needs
          </p>

          <div className="mt-6 inline-block bg-blue-600/90 px-4 py-2 rounded-full text-sm">
            Trusted Global Freight Solutions
          </div>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="py-16 px-6 max-w-6xl mx-auto">

        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-2xl rounded-3xl p-6 md:p-10 space-y-10"
        >

          {/* PERSONAL */}
          <div className="bg-gray-50 p-6 rounded-2xl border">
            <h2 className="text-lg font-semibold mb-6 text-blue-600">
              Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <input className="input" placeholder="First Name *"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                required
              />

              <input className="input" placeholder="Last Name *"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                required
              />
            </div>
          </div>

          {/* TYPE */}
          <div className="bg-gray-50 p-6 rounded-2xl border">
            <h2 className="text-lg font-semibold mb-4 text-blue-600">You are *</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {["Manufacturer","Freight Forwarder","Exporter","Importer","Agent","Individual"].map((type) => (
                <label
                  key={type}
                  className={`cursor-pointer rounded-xl p-3 text-center border transition font-medium
                  ${form.type === type ? "bg-blue-600 text-white" : "bg-white"}`}
                >
                  <input
                    type="radio"
                    className="hidden"
                    checked={form.type === type}
                    onChange={() => setForm({ ...form, type })}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* COMPANY */}
          <div className="bg-gray-50 p-6 rounded-2xl border">
            <h2 className="text-lg font-semibold mb-6 text-blue-600">
              Company Details
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input className="input" placeholder="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />

              <input className="input" placeholder="Company Name"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />

              <input className="input md:col-span-2" placeholder="Address *"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                required
              />

              <input className="input" placeholder="City *"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                required
              />

              <input className="input" placeholder="Country *"
                value={form.country}
                onChange={(e) => setForm({ ...form, country: e.target.value })}
                required
              />

              <input className="input" placeholder="Email *"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />

              <input className="input" placeholder="Phone *"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />
            </div>
          </div>

          {/* SERVICES */}
          <div className="bg-gray-50 p-6 rounded-2xl border">
            <h2 className="text-lg font-semibold mb-4 text-blue-600">
              Services Needed
            </h2>

            <div className="grid md:grid-cols-4 gap-3">
              {servicesList.map((service) => (
                <label
                  key={service}
                  className={`cursor-pointer text-sm rounded-xl p-3 border text-center
                  ${form.services.includes(service) ? "bg-blue-600 text-white" : "bg-white"}`}
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={form.services.includes(service)}
                    onChange={() => handleServiceChange(service)}
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold"
            >
              {loading ? "Sending..." : "Submit Request"}
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="w-full border py-3 rounded-xl"
            >
              Reset
            </button>
          </div>

        </form>
      </section>

    </main>
  );
}