import type { ReactNode } from "react";
import Section from "@/app/components/section/Section";
import Title from "@/app/components/title/Title";
import { TitleVariant } from "@/app/components/title/constants";
import { BOOKING_PRACTICE_COPY } from "../constants/BookingPractice.constants";

const BookingPracticeIntro = (): ReactNode => (
  <Section
    ariaLabel={BOOKING_PRACTICE_COPY.BOOKING.TITLE}
    className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
  >
    <span className="text-sm font-semibold uppercase tracking-wide text-[#b96b59]">
      {BOOKING_PRACTICE_COPY.BOOKING.EYEBROW}
    </span>
    <Title
      variant={TitleVariant.PRIMARY}
      text={BOOKING_PRACTICE_COPY.BOOKING.TITLE}
      className="mt-2 text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl"
    />
    <p className="mt-3 max-w-3xl text-base text-slate-600">
      {BOOKING_PRACTICE_COPY.BOOKING.INTRO}
    </p>
  </Section>
);

export default BookingPracticeIntro;
