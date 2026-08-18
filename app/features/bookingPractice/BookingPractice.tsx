"use client";

import type { ReactNode } from "react";
import BookingFooter from "./components/BookingFooter";
import BookingHeader from "./components/BookingHeader";
import BookingSummary from "./components/BookingSummary";
import DateSelector from "./components/DateSelector";
import ProfessionalSelector from "./components/ProfessionalSelector";
import ProviderProfile from "./components/ProviderProfile";
import ServiceSelector from "./components/ServiceSelector";
import TimeSlotSelector from "./components/TimeSlotSelector";
import { useBookingPracticeViewModel } from "./hooks/useBookingPracticeViewModel";

const BookingPractice = (): ReactNode => {
  const bookingPracticeViewModel =
    useBookingPracticeViewModel();

  return (
    <div className="min-h-screen bg-[#F9F8F6] pt-[72px] font-sans text-[#191c1c] antialiased">
      <BookingHeader />
      <main className="mx-auto w-full max-w-[1200px] px-4 py-6 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="min-w-0 space-y-12 lg:col-span-8">
            <ProviderProfile />
            <ServiceSelector
              services={
                bookingPracticeViewModel.serviceOptions
              }
              onSelectService={
                bookingPracticeViewModel.handleSelectService
              }
            />
            <ProfessionalSelector
              professionals={
                bookingPracticeViewModel.professionalOptions
              }
              onSelectProfessional={
                bookingPracticeViewModel.handleSelectProfessional
              }
            />
            <DateSelector
              dates={bookingPracticeViewModel.dateOptions}
              onSelectDate={
                bookingPracticeViewModel.handleSelectDate
              }
            />
            <TimeSlotSelector
              timeSlots={
                bookingPracticeViewModel.timeSlotOptions
              }
              onSelectTimeSlot={
                bookingPracticeViewModel.handleSelectTimeSlot
              }
            />
          </div>
          <BookingSummary
            selectedDate={
              bookingPracticeViewModel.selectedDate
            }
            selectedProfessional={
              bookingPracticeViewModel.selectedProfessional
            }
            selectedService={
              bookingPracticeViewModel.selectedService
            }
            selectedTimeSlot={
              bookingPracticeViewModel.selectedTimeSlot
            }
          />
        </div>
      </main>
      <BookingFooter />
    </div>
  );
};

export default BookingPractice;
