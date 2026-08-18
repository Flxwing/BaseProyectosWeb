"use client";

import { useState } from "react";
import {
  BOOKING_PRACTICE_COPY,
  BOOKING_PRACTICE_DATES,
  BOOKING_PRACTICE_PROFESSIONALS,
  BOOKING_PRACTICE_SERVICES,
  BOOKING_PRACTICE_TIME_SLOTS,
} from "../constants/BookingPractice.constants";
import type {
  BookingPracticeDate,
  BookingPracticeProfessional,
  BookingPracticeService,
  BookingPracticeTimeSlot,
} from "../models/BookingPractice.interface";
import type { BookingPracticeViewModel } from "../models/BookingPracticeViewModel.interface";

const SELECTED_CARD_CLASS =
  "border-[#0e4d52] bg-[#f1faf8] text-[#1A1C1E] shadow-[0_10px_15px_-8px_rgba(26,28,30,0.2)] ring-1 ring-[#0e4d52]";
const SELECTED_CHIP_CLASS =
  "border-[#0e4d52] bg-[#0e4d52] text-white shadow-sm";
const UNSELECTED_CARD_CLASS =
  "border-[#E2E4E6] bg-white text-[#1A1C1E] hover:-translate-y-0.5 hover:border-[#0e4d52] hover:shadow-[0_10px_15px_-10px_rgba(26,28,30,0.24)]";
const UNSELECTED_CHIP_CLASS =
  "border-[#E2E4E6] bg-white text-[#1A1C1E] hover:border-[#0e4d52] hover:bg-[#f3f4f4]";
const UNAVAILABLE_CHIP_CLASS =
  "cursor-not-allowed border-[#f3f4f4] bg-[#f3f4f4] text-[#9CA3AF]";

export const useBookingPracticeViewModel =
  (): BookingPracticeViewModel => {
    const [selectedService, setSelectedService] =
      useState<BookingPracticeService>(
        BOOKING_PRACTICE_SERVICES[0]
      );
    const [selectedProfessional, setSelectedProfessional] =
      useState<BookingPracticeProfessional>(
        BOOKING_PRACTICE_PROFESSIONALS[0]
      );
    const [selectedDate, setSelectedDate] =
      useState<BookingPracticeDate>(
        BOOKING_PRACTICE_DATES[2]
      );
    const [selectedTimeSlot, setSelectedTimeSlot] =
      useState<BookingPracticeTimeSlot>(
        BOOKING_PRACTICE_TIME_SLOTS[2]
      );

    const handleSelectService = (
      service: BookingPracticeService
    ): void => {
      setSelectedService(service);
    };

    const handleSelectProfessional = (
      professional: BookingPracticeProfessional
    ): void => {
      setSelectedProfessional(professional);
    };

    const handleSelectDate = (
      date: BookingPracticeDate
    ): void => {
      setSelectedDate(date);
    };

    const handleSelectTimeSlot = (
      timeSlot: BookingPracticeTimeSlot
    ): void => {
      if (!timeSlot.isAvailable) {
        return;
      }

      setSelectedTimeSlot(timeSlot);
    };

    const serviceOptions = BOOKING_PRACTICE_SERVICES.map(
      (service) => {
        const isSelected =
          service.id === selectedService.id;

        return {
          ...service,
          className: isSelected
            ? SELECTED_CARD_CLASS
            : UNSELECTED_CARD_CLASS,
          isSelected,
        };
      }
    );

    const professionalOptions =
      BOOKING_PRACTICE_PROFESSIONALS.map((professional) => {
        const isSelected =
          professional.id === selectedProfessional.id;

        return {
          ...professional,
          className: isSelected
            ? SELECTED_CARD_CLASS
            : UNSELECTED_CARD_CLASS,
          isSelected,
        };
      });

    const dateOptions = BOOKING_PRACTICE_DATES.map(
      (date) => {
        const isSelected = date.id === selectedDate.id;

        return {
          ...date,
          className: isSelected
            ? SELECTED_CHIP_CLASS
            : UNSELECTED_CHIP_CLASS,
          isSelected,
        };
      }
    );

    const timeSlotOptions = BOOKING_PRACTICE_TIME_SLOTS.map(
      (timeSlot) => {
        const isSelected =
          timeSlot.id === selectedTimeSlot.id;
        const statusLabel = !timeSlot.isAvailable
          ? BOOKING_PRACTICE_COPY.TIME_SLOTS.UNAVAILABLE
          : isSelected
            ? BOOKING_PRACTICE_COPY.TIME_SLOTS.SELECTED
            : BOOKING_PRACTICE_COPY.TIME_SLOTS.AVAILABLE;

        return {
          ...timeSlot,
          className: !timeSlot.isAvailable
            ? UNAVAILABLE_CHIP_CLASS
            : isSelected
              ? SELECTED_CHIP_CLASS
              : UNSELECTED_CHIP_CLASS,
          isSelected,
          statusLabel,
        };
      }
    );

    return {
      dateOptions,
      handleSelectDate,
      handleSelectProfessional,
      handleSelectService,
      handleSelectTimeSlot,
      professionalOptions,
      selectedDate,
      selectedProfessional,
      selectedService,
      selectedTimeSlot,
      serviceOptions,
      timeSlotOptions,
    };
  };
