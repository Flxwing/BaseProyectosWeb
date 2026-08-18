import type { ReactNode } from "react";
import Button from "@/app/components/button/Button";
import { BUTTON } from "@/app/components/button/constants";
import { BOOKING_PRACTICE_COPY } from "../constants/BookingPractice.constants";
import type {
  BookingPracticeProfessional,
  SelectableBookingPracticeProfessional,
} from "../models/BookingPractice.interface";

interface ProfessionalSelectorProps {
  onSelectProfessional: (
    professional: BookingPracticeProfessional
  ) => void;
  professionals: SelectableBookingPracticeProfessional[];
}

const ProfessionalSelector = ({
  onSelectProfessional,
  professionals,
}: ProfessionalSelectorProps): ReactNode => (
  <section>
    <h2 className="mb-4 text-sm font-semibold leading-5 text-[#1A1C1E]">
      2. {BOOKING_PRACTICE_COPY.PROFESSIONALS.TITLE}
    </h2>
    <div className="grid gap-3 sm:grid-cols-3">
      {professionals.map((professional) => (
        <Button
          key={professional.id}
          type="button"
          variant={BUTTON.BASE}
          aria-pressed={professional.isSelected}
          onClick={() => onSelectProfessional(professional)}
          className={`rounded-lg border p-4 text-center transition-all duration-200 ${professional.className}`}
        >
          <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#f3f4f4] text-xs font-bold text-[#0e4d52] ring-1 ring-[#E2E4E6]">
            {professional.avatarLabel}
          </span>
          <span className="mt-3 block text-sm font-semibold leading-5 text-[#1A1C1E]">
            {professional.name}
          </span>
          <span className="mt-1 block text-xs font-medium leading-4 text-[#404849]">
            {professional.role}
          </span>
          {professional.isSelected && (
            <span className="mx-auto mt-3 block h-1 w-8 rounded-full bg-[#0e4d52]" />
          )}
        </Button>
      ))}
    </div>
  </section>
);

export default ProfessionalSelector;
