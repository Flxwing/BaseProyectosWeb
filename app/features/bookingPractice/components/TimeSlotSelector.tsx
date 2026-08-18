import type { ReactNode } from "react";
import Button from "@/app/components/button/Button";
import { BUTTON } from "@/app/components/button/constants";
import { BOOKING_PRACTICE_COPY } from "../constants/BookingPractice.constants";
import type {
  BookingPracticeTimeSlot,
  SelectableBookingPracticeTimeSlot,
} from "../models/BookingPractice.interface";

interface TimeSlotSelectorProps {
  onSelectTimeSlot: (
    timeSlot: BookingPracticeTimeSlot
  ) => void;
  timeSlots: SelectableBookingPracticeTimeSlot[];
}

const TimeSlotSelector = ({
  onSelectTimeSlot,
  timeSlots,
}: TimeSlotSelectorProps): ReactNode => (
  <section>
    <h2 className="mb-4 text-sm font-semibold leading-5 text-[#1A1C1E]">
      4. {BOOKING_PRACTICE_COPY.TIME_SLOTS.TITLE}
    </h2>
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-6 lg:grid-cols-6">
      {timeSlots.map((timeSlot) => (
        <Button
          key={timeSlot.id}
          type="button"
          variant={BUTTON.BASE}
          aria-pressed={timeSlot.isSelected}
          disabled={!timeSlot.isAvailable}
          onClick={() => onSelectTimeSlot(timeSlot)}
          className={`rounded px-3 py-2 text-center text-xs font-semibold leading-4 transition-all duration-200 ${timeSlot.className}`}
        >
          {timeSlot.label}
        </Button>
      ))}
    </div>
  </section>
);

export default TimeSlotSelector;
