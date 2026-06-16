import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      type,
      title,
      company,
      address,
      city,
      country,
      email,
      phone,
      services,
    } = body;

   const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true, // STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // helpful during local dev
  },
});


   const mailContent = `
      🚚 NEW QUOTE REQUEST

      Name: ${firstName} ${lastName}
      Type: ${type}
      Title: ${title || "-"}
      Company: ${company || "-"}

      Address: ${address}, ${city}, ${country}

      Email: ${email}
      Phone: ${phone}

      Services Requested:
      ${services?.length ? services.join(", ") : "None"}
    `;




    await transporter.sendMail({
from: `"LeMeilleur Cargo" <csoperation@lemeilleurcargo.com>`,
      to: "hr@lemeilleurcargo.com", // 👈 test with gmail
      subject: "New Quote Request",
      text: mailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("MAIL ERROR:", error);
    return NextResponse.json({ success: false, error });
  }
}