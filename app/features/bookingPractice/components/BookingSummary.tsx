import type { ReactNode } from "react";
import Button from "@/app/components/button/Button";
import { BUTTON } from "@/app/components/button/constants";
import { BOOKING_PRACTICE_COPY } from "../constants/BookingPractice.constants";
import type {
  BookingPracticeDate,
  BookingPracticeProfessional,
  BookingPracticeService,
  BookingPracticeTimeSlot,
} from "../models/BookingPractice.interface";

interface BookingSummaryProps {
  selectedDate: BookingPracticeDate;
  selectedProfessional: BookingPracticeProfessional;
  selectedService: BookingPracticeService;
  selectedTimeSlot: BookingPracticeTimeSlot;
}

interface SummaryItemProps {
  iconLabel: string;
  label: string;
  secondaryValue?: string;
  value: string;
}

const SummaryItem = ({
  iconLabel,
  label,
  secondaryValue,
  value,
}: SummaryItemProps): ReactNode => (
  <div className="flex items-start gap-3">
    <dt className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#f3f4f4] text-[10px] font-bold text-[#0e4d52]">
      {iconLabel}
    </dt>
    <dd>
      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#404849]">
        {label}
      </p>
      <p className="text-base font-medium leading-6 text-[#1A1C1E]">
        {value}
      </p>
      {secondaryValue && (
        <p className="text-base font-medium leading-6 text-[#1A1C1E]">
          {secondaryValue}
        </p>
      )}
    </dd>
  </div>
);

const BookingSummary = ({
  selectedDate,
  selectedProfessional,
  selectedService,
  selectedTimeSlot,
}: BookingSummaryProps): ReactNode => (
  <aside className="relative lg:col-span-4">
    <div className="rounded-lg border border-[#E2E4E6] bg-white p-6 shadow-md lg:sticky lg:top-24">
      <h2 className="border-b border-[#E2E4E6] pb-4 text-xl font-semibold leading-7 text-[#1A1C1E]">
        {BOOKING_PRACTICE_COPY.SUMMARY.TITLE}
      </h2>
      <dl className="mt-6 flex flex-col gap-4">
        <SummaryItem
          iconLabel="S"
          label={BOOKING_PRACTICE_COPY.SUMMARY.SERVICE}
          value={selectedService.name}
        />
        <SummaryItem
          iconLabel="P"
          label={BOOKING_PRACTICE_COPY.SUMMARY.PROFESSIONAL}
          value={selectedProfessional.name}
        />
        <SummaryItem
          iconLabel="F"
          label={`${BOOKING_PRACTICE_COPY.SUMMARY.DATE} y ${BOOKING_PRACTICE_COPY.SUMMARY.TIME}`}
          value={selectedDate.value}
          secondaryValue={selectedTimeSlot.label}
        />
        <SummaryItem
          iconLabel="D"
          label={BOOKING_PRACTICE_COPY.SUMMARY.DURATION}
          value={selectedService.duration}
        />
      </dl>
      <div className="mt-6 border-t border-[#E2E4E6] pt-4">
        <div className="mb-1 flex items-center justify-between gap-4">
          <span className="text-sm text-[#404849]">
            {BOOKING_PRACTICE_COPY.SUMMARY.PRICE}
          </span>
          <span className="text-base font-bold text-[#1A1C1E]">
            {selectedService.price}
          </span>
        </div>
        <p className="text-xs leading-4 text-[#404849]">
          {BOOKING_PRACTICE_COPY.SUMMARY.PAYMENT_NOTE}
        </p>
      </div>
      <Button
        type="button"
        variant={BUTTON.BASE}
        className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#0e4d52] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#003539]"
      >
        {BOOKING_PRACTICE_COPY.SUMMARY.SUBMIT}
        <span aria-hidden="true">→</span>
      </Button>
    </div>
  </aside>
);

export default BookingSummary;
