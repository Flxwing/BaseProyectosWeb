export const BOOKING_PRACTICE_COPY = {
  BOOKING: {
    EYEBROW: "Reserva de servicio",
    INTRO:
      "Elige el servicio, profesional, fecha y horario que mejor se ajusten a tu agenda.",
    TITLE: "Perfil de proveedor",
  },
  DATE_SELECTOR: {
    NEXT: "Siguiente semana",
    PREVIOUS: "Semana anterior",
    TITLE: "Selecciona la fecha",
    VISIBLE_MONTH: "Octubre 2024",
  },
  FOOTER: {
    COPYRIGHT:
      "© 2024 Reservas Pro. Todos los derechos reservados.",
    HELP: "Ayuda",
    PRIVACY: "Privacidad",
    TERMS: "Términos",
  },
  HEADER: {
    BRAND: "Reservas Pro",
    EXPLORE: "Explorar",
    MY_BOOKINGS: "Mis reservaciones",
    USER_PROFILE: "AV",
  },
  PROFESSIONALS: {
    DESCRIPTION:
      "La plataforma soporta proveedores individuales y equipos con varios colaboradores.",
    TITLE: "Elige quién te atenderá",
  },
  PROVIDER: {
    AVAILABILITY: "Disponible esta semana",
    CATEGORY: "Entrenador Personal",
    DESCRIPTION:
      "Acompañamiento personalizado para mejorar fuerza, movilidad y condición física.",
    LOCATION: "San José, Costa Rica",
    NAME: "Carlos Vargas",
    RATING: "4.9",
    REVIEWS: "48 opiniones",
  },
  SERVICES: {
    PRICE_LABEL: "Precio informativo",
    TITLE: "Servicios",
  },
  SUMMARY: {
    DATE: "Fecha",
    DURATION: "Duración",
    PAYMENT_NOTE:
      "El pago se coordina directamente con el proveedor.",
    PRICE: "Precio del servicio",
    PROFESSIONAL: "Profesional",
    SERVICE: "Servicio",
    SUBMIT: "Confirmar reservación",
    TIME: "Hora",
    TITLE: "Tu reservación",
  },
  TIME_SLOTS: {
    AVAILABLE: "Disponible",
    SELECTED: "Seleccionado",
    TITLE: "Horarios disponibles",
    UNAVAILABLE: "No disponible",
  },
} as const;

export const BOOKING_PRACTICE_DATES = [
  {
    dayName: "Lun",
    id: "monday-14",
    label: "14",
    value: "Lunes, 14 de Octubre",
  },
  {
    dayName: "Mar",
    id: "tuesday-15",
    label: "15",
    value: "Martes, 15 de Octubre",
  },
  {
    dayName: "Mié",
    id: "wednesday-16",
    label: "16",
    value: "Miércoles, 16 de Octubre",
  },
  {
    dayName: "Jue",
    id: "thursday-17",
    label: "17",
    value: "Jueves, 17 de Octubre",
  },
  {
    dayName: "Vie",
    id: "friday-18",
    label: "18",
    value: "Viernes, 18 de Octubre",
  },
  {
    dayName: "Sáb",
    id: "saturday-19",
    label: "19",
    value: "Sábado, 19 de Octubre",
  },
  {
    dayName: "Dom",
    id: "sunday-20",
    label: "20",
    value: "Domingo, 20 de Octubre",
  },
] as const;

export const BOOKING_PRACTICE_PROFESSIONALS = [
  {
    avatarLabel: "CV",
    id: "carlos-vargas",
    name: "Carlos Vargas",
    role: "Proveedor principal",
  },
  {
    avatarLabel: "AM",
    id: "andrea-morales",
    name: "Andrea Morales",
    role: "Colaboradora",
  },
  {
    avatarLabel: "SP",
    id: "no-preference",
    name: "Sin preferencia",
    role: "Asignar según disponibilidad",
  },
] as const;

export const BOOKING_PRACTICE_SERVICES = [
  {
    description:
      "Sesión individual adaptada a los objetivos del cliente.",
    duration: "60 min",
    iconLabel: "ST",
    id: "personal-training",
    name: "Entrenamiento personalizado",
    price: "15.000",
  },
  {
    description:
      "Evaluación de condición física y objetivos.",
    duration: "45 min",
    iconLabel: "EF",
    id: "initial-assessment",
    name: "Evaluación física inicial",
    price: "10.000",
  },
  {
    description:
      "Revisión del progreso y ajustes al entrenamiento.",
    duration: "45 min",
    iconLabel: "SG",
    id: "follow-up-session",
    name: "Sesión de seguimiento",
    price: "12.000",
  },
] as const;

export const BOOKING_PRACTICE_TIME_SLOTS = [
  {
    id: "slot-0800",
    isAvailable: true,
    label: "8:00 AM",
  },
  {
    id: "slot-0900",
    isAvailable: true,
    label: "9:00 AM",
  },
  {
    id: "slot-1030",
    isAvailable: true,
    label: "10:30 AM",
  },
  {
    id: "slot-1400",
    isAvailable: true,
    label: "2:00 PM",
  },
  {
    id: "slot-1630",
    isAvailable: false,
    label: "4:30 PM",
  },
  {
    id: "slot-1800",
    isAvailable: true,
    label: "6:00 PM",
  },
] as const;
