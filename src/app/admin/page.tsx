import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { AdminLogoutButton } from "@/components/admin/AdminLogoutButton";
import { connectMongo } from "@/lib/mongodb";
import { hasAdminSession } from "@/lib/adminAuth";
import { Booking } from "@/models/Booking";

export const metadata: Metadata = {
  title: "Bookings Dashboard | Admin",
  robots: { index: false, follow: false }
};

export const dynamic = "force-dynamic";
const PAGE_SIZE = 50;

const statusLabels: Record<string, string> = {
  pending: "नई बुकिंग",
  confirmed: "पुष्टि की गई",
  completed: "पूरी हुई",
  cancelled: "रद्द"
};

export default async function AdminDashboardPage({
  searchParams
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  if (!(await hasAdminSession())) redirect("/admin/login");

  await connectMongo();
  const params = await searchParams;
  const requestedPage = /^\d+$/.test(params.page ?? "") ? Number(params.page) : 1;
  const totalBookings = await Booking.countDocuments();
  const totalPages = Math.max(1, Math.ceil(totalBookings / PAGE_SIZE));
  const page = Math.min(Math.max(requestedPage, 1), totalPages);
  const bookings = await Booking.find()
    .select("name phone email service date time location message status createdAt")
    .sort({ createdAt: -1, _id: -1 })
    .skip((page - 1) * PAGE_SIZE)
    .limit(PAGE_SIZE)
    .lean();

  return (
    <main className="min-h-screen bg-[#FFFDFC] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#F1C9CD] pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B91C2C]">
              Private administration
            </p>
            <h1 className="serif mt-2 text-3xl font-bold text-[#8F1725] sm:text-4xl">
              Booking Dashboard
            </h1>
            <p className="mt-2 text-sm text-[#686168]">
              कुल {totalBookings} booking requests · पेज {page} / {totalPages}
            </p>
          </div>
          <AdminLogoutButton />
        </header>

        {bookings.length === 0 ? (
          <section className="rounded-2xl border border-[#F1C9CD] bg-white p-8 text-center">
            <h2 className="text-lg font-semibold text-[#8F1725]">
              अभी कोई booking request नहीं है
            </h2>
            <p className="mt-2 text-sm text-[#686168]">
              नई booking आने पर वह यहाँ दिखाई देगी।
            </p>
          </section>
        ) : (
          <section aria-label="Booking requests" className="space-y-4">
            {bookings.map((booking) => (
              <article
                key={booking._id.toString()}
                className="rounded-2xl border border-[#F1C9CD] bg-white p-5 shadow-[0_6px_24px_rgba(143,23,37,0.05)] sm:p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#F1C9CD] pb-4">
                  <div>
                    <h2 className="text-lg font-bold text-[#8F1725]">
                      {booking.name}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-[#242124]">
                      {booking.service}
                    </p>
                  </div>
                  <span className="rounded-full bg-[#FFF1F2] px-3 py-1.5 text-xs font-semibold text-[#8F1725]">
                    {statusLabels[booking.status] ?? booking.status}
                  </span>
                </div>

                <dl className="mt-4 grid gap-x-6 gap-y-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <dt className="text-xs text-[#686168]">फोन</dt>
                    <dd className="mt-1 font-medium">
                      <a className="text-[#8F1725] underline" href={`tel:${booking.phone}`}>
                        {booking.phone}
                      </a>
                    </dd>
                  </div>
                  {booking.email && (
                    <div>
                      <dt className="text-xs text-[#686168]">ईमेल</dt>
                      <dd className="mt-1 break-all font-medium">
                        <a className="text-[#8F1725] underline" href={`mailto:${booking.email}`}>
                          {booking.email}
                        </a>
                      </dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-xs text-[#686168]">पसंदीदा तिथि / समय</dt>
                    <dd className="mt-1 font-medium text-[#242124]">
                      {booking.date}{booking.time ? ` · ${booking.time}` : ""}
                    </dd>
                  </div>
                  {booking.location && (
                    <div>
                      <dt className="text-xs text-[#686168]">स्थान</dt>
                      <dd className="mt-1 whitespace-pre-wrap text-[#242124]">
                        {booking.location}
                      </dd>
                    </div>
                  )}
                  {booking.message && (
                    <div className="sm:col-span-2 lg:col-span-3">
                      <dt className="text-xs text-[#686168]">संदेश</dt>
                      <dd className="mt-1 whitespace-pre-wrap break-words text-[#242124]">
                        {booking.message}
                      </dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-xs text-[#686168]">अनुरोध प्राप्त हुआ</dt>
                    <dd className="mt-1 text-[#242124]">
                      {booking.createdAt.toLocaleString("hi-IN", {
                        dateStyle: "medium",
                        timeStyle: "short",
                        timeZone: "Asia/Kolkata"
                      })}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </section>
        )}

        {totalPages > 1 && (
          <nav
            aria-label="Booking pages"
            className="mt-8 flex items-center justify-between gap-4"
          >
            {page > 1 ? (
              <Link
                className="rounded-full border border-[#F1C9CD] bg-white px-5 py-3 text-sm font-semibold text-[#8F1725] hover:bg-[#FFF1F2]"
                href={`/admin?page=${page - 1}`}
              >
                पिछली bookings
              </Link>
            ) : <span />}
            {page < totalPages && (
              <Link
                className="ml-auto rounded-full border border-[#F1C9CD] bg-white px-5 py-3 text-sm font-semibold text-[#8F1725] hover:bg-[#FFF1F2]"
                href={`/admin?page=${page + 1}`}
              >
                पुरानी bookings
              </Link>
            )}
          </nav>
        )}
      </div>
    </main>
  );
}
