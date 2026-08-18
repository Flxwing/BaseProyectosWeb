import type { ReactNode } from "react";
import Section from "@/app/components/section/Section";
import Title from "@/app/components/title/Title";
import { TitleVariant } from "@/app/components/title/constants";
import { BOOKING_PRACTICE_COPY } from "../constants/BookingPractice.constants";

const ProviderProfile = (): ReactNode => (
  <Section
    ariaLabel={BOOKING_PRACTICE_COPY.PROVIDER.NAME}
    className="rounded-lg border border-[#E2E4E6] bg-white p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)]"
  >
    <div className="flex flex-col gap-6 md:flex-row md:items-center">
      <div className="relative flex size-24 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#E2E4E6] bg-[radial-gradient(circle_at_35%_25%,#f8b994_0,#f8b994_16%,#0e4d52_17%,#0e4d52_48%,#e7e8e8_49%)] text-2xl font-bold text-white shadow-inner">
        <span className="absolute bottom-0 h-10 w-full bg-[#1A1C1E]/20" />
        <span className="relative">CV</span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Title
              variant={TitleVariant.PRIMARY}
              text={BOOKING_PRACTICE_COPY.PROVIDER.NAME}
              className="text-2xl font-bold leading-8 text-[#1A1C1E] md:text-[32px] md:leading-10"
            />
            <p className="mt-1 text-sm font-semibold leading-5 text-[#0e4d52]">
              {BOOKING_PRACTICE_COPY.PROVIDER.CATEGORY}
            </p>
          </div>
          <div className="flex items-center gap-1 rounded bg-[#f3f4f4] px-2 py-1">
            <span className="text-sm text-[#D4AF37]">
              ★
            </span>
            <span className="text-sm font-semibold text-[#191c1c]">
              {BOOKING_PRACTICE_COPY.PROVIDER.RATING}
            </span>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-4 text-sm text-[#404849]">
          <span className="inline-flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-[#0e4d52]" />
            {BOOKING_PRACTICE_COPY.PROVIDER.LOCATION}
          </span>
          <span>
            {BOOKING_PRACTICE_COPY.PROVIDER.REVIEWS}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[#0e4d52]">
            <span className="size-2 rounded-full bg-[#0e4d52]" />
            {BOOKING_PRACTICE_COPY.PROVIDER.AVAILABILITY}
          </span>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-[#404849]">
          {BOOKING_PRACTICE_COPY.PROVIDER.DESCRIPTION}
        </p>
      </div>
    </div>
  </Section>
);

export default ProviderProfile;
