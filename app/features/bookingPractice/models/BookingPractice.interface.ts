import type {
  BOOKING_PRACTICE_DATES,
  BOOKING_PRACTICE_PROFESSIONALS,
  BOOKING_PRACTICE_SERVICES,
  BOOKING_PRACTICE_TIME_SLOTS,
} from "../constants/BookingPractice.constants";

export type BookingPracticeDate =
  (typeof BOOKING_PRACTICE_DATES)[number];

export type BookingPracticeProfessional =
  (typeof BOOKING_PRACTICE_PROFESSIONALS)[number];

export type BookingPracticeService =
  (typeof BOOKING_PRACTICE_SERVICES)[number];

export type BookingPracticeTimeSlot =
  (typeof BOOKING_PRACTICE_TIME_SLOTS)[number];

export type SelectableBookingPracticeDate =
  BookingPracticeDate & {
    className: string;
    isSelected: boolean;
  };

export type SelectableBookingPracticeProfessional =
  BookingPracticeProfessional & {
    className: string;
    isSelected: boolean;
  };

export type SelectableBookingPracticeService =
  BookingPracticeService & {
    className: string;
    isSelected: boolean;
  };

export type SelectableBookingPracticeTimeSlot =
  BookingPracticeTimeSlot & {
    className: string;
    isSelected: boolean;
    statusLabel: string;
  };
