import type { ReactNode } from "react";
import Button from "@/app/components/button/Button";
import { BUTTON } from "@/app/components/button/constants";
import { BOOKING_PRACTICE_COPY } from "../constants/BookingPractice.constants";
import type {
  BookingPracticeDate,
  SelectableBookingPracticeDate,
} from "../models/BookingPractice.interface";

interface DateSelectorProps {
  dates: SelectableBookingPracticeDate[];
  onSelectDate: (date: BookingPracticeDate) => void;
}

const DateSelector = ({
  dates,
  onSelectDate,
}: DateSelectorProps): ReactNode => (
  <section>
    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-sm font-semibold leading-5 text-[#1A1C1E]">
        3. {BOOKING_PRACTICE_COPY.DATE_SELECTOR.TITLE}
      </h2>
      <div className="flex items-center gap-3">
        <Button
          type="button"
          variant={BUTTON.BASE}
          aria-label={
            BOOKING_PRACTICE_COPY.DATE_SELECTOR.PREVIOUS
          }
          className="flex size-8 items-center justify-center rounded-full border border-[#E2E4E6] bg-white text-[#404849] transition-colors hover:bg-[#f3f4f4]"
        >
          {"<"}
        </Button>
        <span className="text-sm font-semibold leading-5 text-[#1A1C1E]">
          {
            BOOKING_PRACTICE_COPY.DATE_SELECTOR
              .VISIBLE_MONTH
          }
        </span>
        <Button
          type="button"
          variant={BUTTON.BASE}
          aria-label={
            BOOKING_PRACTICE_COPY.DATE_SELECTOR.NEXT
          }
          className="flex size-8 items-center justify-center rounded-full border border-[#E2E4E6] bg-white text-[#404849] transition-colors hover:bg-[#f3f4f4]"
        >
          {">"}
        </Button>
      </div>
    </div>
    <div className="flex gap-2 overflow-x-auto pb-1">
      {dates.map((date) => (
        <Button
          key={date.id}
          type="button"
          variant={BUTTON.BASE}
          aria-pressed={date.isSelected}
          onClick={() => onSelectDate(date)}
          className={`min-w-[62px] rounded-lg border px-3 py-3 text-center transition-all duration-200 ${date.className}`}
        >
          <span className="block text-xs font-medium leading-4">
            {date.dayName}
          </span>
          <span className="mt-1 block text-sm font-bold leading-5">
            {date.label}
          </span>
        </Button>
      ))}
    </div>
  </section>
);

export default DateSelector;
