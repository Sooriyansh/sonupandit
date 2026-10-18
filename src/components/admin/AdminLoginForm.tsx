"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export function AdminLoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.get("username"),
          password: formData.get("password")
        })
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setError(result.message || "लॉगिन नहीं हो सका।");
        return;
      }

      router.replace("/admin");
      router.refresh();
    } catch {
      setError("लॉगिन सेवा तक पहुँचा नहीं जा सका। कृपया दोबारा प्रयास करें।");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={submit} className="mt-7 space-y-5">
      <label className="block text-sm font-medium text-[#242124]">
        Admin username
        <input
          autoComplete="username"
          className="mt-2 min-h-12 w-full rounded-xl border border-[#F1C9CD] bg-white px-4 text-base outline-none focus-visible:ring-2 focus-visible:ring-[#B91C2C]"
          name="username"
          required
          maxLength={200}
        />
      </label>
      <label className="block text-sm font-medium text-[#242124]">
        Password
        <input
          autoComplete="current-password"
          className="mt-2 min-h-12 w-full rounded-xl border border-[#F1C9CD] bg-white px-4 text-base outline-none focus-visible:ring-2 focus-visible:ring-[#B91C2C]"
          name="password"
          type="password"
          required
          maxLength={500}
        />
      </label>
      {error && (
        <p role="alert" className="text-sm font-medium text-[#B91C2C]">
          {error}
        </p>
      )}
      <button
        className="min-h-12 w-full rounded-full bg-[#8F1725] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#B91C2C] disabled:cursor-wait disabled:opacity-60"
        disabled={submitting}
        type="submit"
      >
        {submitting ? "जाँच हो रही है..." : "सुरक्षित लॉगिन"}
      </button>
    </form>
  );
}
