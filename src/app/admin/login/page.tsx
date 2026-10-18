import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { hasAdminSession } from "@/lib/adminAuth";

export const metadata: Metadata = {
  title: "Admin Login | पं. सोनू गुरु",
  robots: { index: false, follow: false }
};

export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  if (await hasAdminSession()) redirect("/admin");

  return (
    <main className="grid min-h-screen place-items-center bg-[#FFFDFC] px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border border-[#F1C9CD] bg-white p-6 shadow-[0_18px_65px_rgba(143,23,37,0.08)] sm:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B91C2C]">
          Private administration
        </p>
        <h1 className="serif mt-3 text-3xl font-bold text-[#8F1725]">
          Admin लॉगिन
        </h1>
        <p className="mt-3 text-sm leading-6 text-[#686168]">
          Booking requests देखने के लिए अपने admin credentials से लॉगिन करें।
        </p>
        <AdminLoginForm />
      </div>
    </main>
  );
}
