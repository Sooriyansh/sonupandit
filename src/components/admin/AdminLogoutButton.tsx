"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function AdminLogoutButton() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function logout() {
    setError("");

    try {
      const response = await fetch("/api/admin/logout", { method: "POST" });
      if (!response.ok) {
        setError("लॉगआउट नहीं हो सका। कृपया फिर प्रयास करें।");
        return;
      }
      router.replace("/admin/login");
      router.refresh();
    } catch {
      setError("लॉगआउट सेवा तक पहुँचा नहीं जा सका। कृपया फिर प्रयास करें।");
    }
  }

  return (
    <div>
      <button
        className="min-h-11 rounded-full border border-[#F1C9CD] bg-white px-5 py-2 text-sm font-semibold text-[#8F1725] hover:bg-[#FFF1F2] focus-visible:ring-2 focus-visible:ring-[#B91C2C]"
        onClick={logout}
        type="button"
      >
        लॉगआउट
      </button>
      {error && <p role="alert" className="mt-2 text-xs text-[#B91C2C]">{error}</p>}
    </div>
  );
}
