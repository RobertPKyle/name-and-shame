"use server";

import { Resend } from "resend";

export type SubmitState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitCompany(
  _prev: SubmitState,
  formData: FormData
): Promise<SubmitState> {
  const companyName = (formData.get("companyName") as string)?.trim();
  const tags = formData.getAll("tags") as string[];

  if (!companyName) {
    return { status: "error", message: "Company name is required." };
  }

  if (tags.length === 0) {
    return { status: "error", message: "Please select at least one tag." };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Name & Shame <onboarding@resend.dev>",
      to: "nameandshamewebsite@gmail.com",
      subject: `New Submission: ${companyName}`,
      text: `New company submission for Name & Shame\n========================================\n\nCompany Name: ${companyName}\n\nTags: ${tags.join(", ")}`,
    });

    return { status: "success", message: "Submitted! We'll review it and add it to the list." };
  } catch (err) {
    console.error("Email send error:", err);
    return { status: "error", message: "Failed to send — please try again later." };
  }
}
