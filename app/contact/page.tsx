"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      setStatus("sent");
      e.currentTarget.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="pt-16 min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 border border-border rounded-lg">
        <h1 className="text-3xl font-semibold mb-6">Get in Touch</h1>
        <div className="mb-4">
          <label className="block text-sm text-sub mb-1">Name</label>
          <input
            name="name"
            required
            className="w-full px-3 py-2 border border-border bg-transparent text-body"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-sub mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-border bg-transparent text-body"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-sub mb-1">Message</label>
          <textarea
            name="message"
            required
            rows={4}
            className="w-full px-3 py-2 border border-border bg-transparent text-body"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-cobalt text-body hover:bg-cobalt/80 transition-colors"
          disabled={status === "sending"}
        >
          {status === "sending"
            ? "Sending..."
            : status === "sent"
            ? "Sent!"
            : "Send Message"}
        </button>
        {status === "error" && (
          <p className="text-red-500 mt-2">오류가 발생했습니다. 다시 시도해주세요.</p>
        )}
      </form>
    </div>
  );
}
