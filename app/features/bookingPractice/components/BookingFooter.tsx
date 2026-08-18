import type { ReactNode } from "react";
import Link from "@/app/components/link/Link";
import { BOOKING_PRACTICE_COPY } from "../constants/BookingPractice.constants";

const BookingFooter = (): ReactNode => (
  <footer className="mt-12 border-t border-[#E2E4E6] bg-[#f3f4f4] py-8">
    <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-10">
      <span className="text-sm font-semibold text-[#191c1c]">
        {BOOKING_PRACTICE_COPY.FOOTER.COPYRIGHT}
      </span>
      <nav className="flex gap-6 text-xs font-medium text-[#404849]">
        <Link
          href="/booking-practice"
          className="underline transition-colors hover:text-[#0e4d52]"
        >
          {BOOKING_PRACTICE_COPY.FOOTER.PRIVACY}
        </Link>
        <Link
          href="/booking-practice"
          className="underline transition-colors hover:text-[#0e4d52]"
        >
          {BOOKING_PRACTICE_COPY.FOOTER.TERMS}
        </Link>
        <Link
          href="/booking-practice"
          className="underline transition-colors hover:text-[#0e4d52]"
        >
          {BOOKING_PRACTICE_COPY.FOOTER.HELP}
        </Link>
      </nav>
    </div>
  </footer>
);

export default BookingFooter;
