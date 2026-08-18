import type { ReactNode } from "react";
import Link from "@/app/components/link/Link";
import { BOOKING_PRACTICE_COPY } from "../constants/BookingPractice.constants";

const BookingHeader = (): ReactNode => (
  <header className="fixed top-0 z-50 w-full border-b border-[#E2E4E6] bg-white shadow-sm">
    <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
      <Link
        href="/booking-practice"
        className="flex items-center gap-4"
      >
        <span className="relative flex size-8 items-center justify-center overflow-hidden rounded bg-[#e7f1ef] text-[10px] font-bold text-[#0e4d52] ring-1 ring-[#c6ddda]">
          <span className="absolute inset-x-1 top-1 h-2 rounded-full bg-[#0e4d52]" />
          <span className="absolute bottom-1 left-1 size-2 rounded-full bg-[#D4AF37]" />
          <span className="relative">RP</span>
        </span>
        <span className="text-xl font-bold leading-7 text-[#0e4d52]">
          {BOOKING_PRACTICE_COPY.HEADER.BRAND}
        </span>
      </Link>
      <nav className="hidden items-center gap-8 text-base text-[#404849] md:flex">
        <Link
          href="/booking-practice"
          className="transition-colors hover:text-[#0e4d52]"
        >
          {BOOKING_PRACTICE_COPY.HEADER.EXPLORE}
        </Link>
        <Link
          href="/booking-practice"
          className="transition-colors hover:text-[#0e4d52]"
        >
          {BOOKING_PRACTICE_COPY.HEADER.MY_BOOKINGS}
        </Link>
      </nav>
      <div className="flex size-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#0e4d52,#e08f74)] text-sm font-bold text-white shadow-sm">
        {BOOKING_PRACTICE_COPY.HEADER.USER_PROFILE}
      </div>
    </div>
  </header>
);

export default BookingHeader;
