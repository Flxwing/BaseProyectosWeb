import type { ReactNode } from "react";
import Button from "@/app/components/button/Button";
import { BUTTON } from "@/app/components/button/constants";
import { BOOKING_PRACTICE_COPY } from "../constants/BookingPractice.constants";
import type {
  BookingPracticeService,
  SelectableBookingPracticeService,
} from "../models/BookingPractice.interface";

interface ServiceSelectorProps {
  onSelectService: (
    service: BookingPracticeService
  ) => void;
  services: SelectableBookingPracticeService[];
}

const ServiceSelector = ({
  onSelectService,
  services,
}: ServiceSelectorProps): ReactNode => (
  <section>
    <h2 className="mb-4 text-sm font-semibold leading-5 text-[#1A1C1E]">
      1. {BOOKING_PRACTICE_COPY.SERVICES.TITLE}
    </h2>
    <div className="grid gap-3">
      {services.map((service) => (
        <Button
          key={service.id}
          type="button"
          variant={BUTTON.BASE}
          aria-pressed={service.isSelected}
          onClick={() => onSelectService(service)}
          className={`w-full rounded-lg border p-0 text-left transition-all duration-200 ${service.className}`}
        >
          <span className="grid w-full grid-cols-[40px_minmax(0,1fr)_auto_20px] items-center gap-4 p-4">
            <span className="flex size-10 items-center justify-center rounded-lg bg-[#f3f4f4] text-xs font-bold text-[#0e4d52]">
              {service.iconLabel}
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold leading-5 text-[#1A1C1E]">
                {service.name}
              </span>
              <span className="mt-1 block text-sm leading-5 text-[#404849]">
                {service.description}
              </span>
              <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-[#404849]">
                <span className="size-1.5 rounded-full bg-[#bfc8c9]" />
                {service.duration}
              </span>
            </span>
            <span className="text-sm font-semibold text-[#1A1C1E]">
              {service.price}
            </span>
            <span
              className={`size-4 rounded-full border ${
                service.isSelected
                  ? "border-[#0e4d52] bg-[#0e4d52] shadow-[inset_0_0_0_4px_white]"
                  : "border-[#bfc8c9] bg-white"
              }`}
            />
          </span>
        </Button>
      ))}
    </div>
  </section>
);

export default ServiceSelector;
