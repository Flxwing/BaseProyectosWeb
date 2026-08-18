import type {
  BookingPracticeDate,
  BookingPracticeProfessional,
  BookingPracticeService,
  BookingPracticeTimeSlot,
  SelectableBookingPracticeDate,
  SelectableBookingPracticeProfessional,
  SelectableBookingPracticeService,
  SelectableBookingPracticeTimeSlot,
} from "./BookingPractice.interface";

export interface BookingPracticeViewModel {
  dateOptions: SelectableBookingPracticeDate[];
  handleSelectDate: (date: BookingPracticeDate) => void;
  handleSelectProfessional: (
    professional: BookingPracticeProfessional
  ) => void;
  handleSelectService: (
    service: BookingPracticeService
  ) => void;
  handleSelectTimeSlot: (
    timeSlot: BookingPracticeTimeSlot
  ) => void;
  professionalOptions: SelectableBookingPracticeProfessional[];
  selectedDate: BookingPracticeDate;
  selectedProfessional: BookingPracticeProfessional;
  selectedService: BookingPracticeService;
  selectedTimeSlot: BookingPracticeTimeSlot;
  serviceOptions: SelectableBookingPracticeService[];
  timeSlotOptions: SelectableBookingPracticeTimeSlot[];
}
