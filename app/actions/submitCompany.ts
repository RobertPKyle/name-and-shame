"use server";

import nodemailer from "nodemailer";

export type SubmitState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitCompany(
  _prev: SubmitState,
  formData: FormData
): Promise<SubmitState> {
  const companyName = (formData.get("companyName") as string)?.trim();
  const tags = (formData.get("tags") as string)?.trim();

  if (!companyName) {
    return { status: "error", message: "Company name is required." };
  }

  if (!tags) {
    return { status: "error", message: "Please select at least one tag." };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const body = `
New company submission for Name & Shame
========================================

Company Name: ${companyName}

Tags: ${tags}
  `.trim();

  try {
    await transporter.sendMail({
      from: `"Name & Shame Submissions" <${process.env.GMAIL_USER}>`,
      to: "nameandshamewebsite@gmail.com",
      subject: `New Submission: ${companyName}`,
      text: body,
    });

    return { status: "success", message: "Submitted! We'll review it and add it to the list." };
  } catch (err) {
    console.error("Email send error:", err);
    return { status: "error", message: "Failed to send — please try again later." };
  }
}
