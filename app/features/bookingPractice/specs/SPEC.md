# Booking Practice

## Intent

Create a reusable provider profile and service reservation UI for a general services platform. The example provider is a personal trainer, but the structure must remain neutral enough for other appointment-based providers.

## In scope

- Neutral platform header
- Provider profile section with mock provider details
- Selectable service cards
- Selectable professional/collaborator options
- Visual date selector
- Time slot selector with available, selected, and unavailable states
- Sticky desktop booking summary and mobile summary at the end
- Visual alignment with the approved Stitch screen `Reservas Pro - Perfil de proveedor y reservación`
- Local interactive state only

## Out of scope

- Firebase, API, backend, authentication, persistence, checkout, payment processing, or payment collection
- Replacing the existing home page
- Business-specific branding for barber shops, gyms, clinics, or medical systems

## Requirements

- The route must be available at `/booking-practice`
- The page must use mock data for Carlos Vargas as an example provider
- The code names must remain generic: provider, service, professional, date, time slot, summary
- The price must be displayed only as service information
- The summary must explicitly say payment is coordinated directly with the provider
- The primary action must confirm or reserve the appointment, not start a checkout
- Basic selection state must be handled locally without Redux
- The desktop layout must use a sticky summary column
- The mobile layout must collapse to one column with the summary after the selectors
- The desktop visual language should follow Stitch: 72px fixed header, 1200px max content, warm background, compact provider card, service rows, professional cards, horizontal date strip, time chips, and a right summary card

## Edge cases and errors

- Unavailable time slots cannot be selected
- The summary updates when service, professional, date, or time changes
- The UI remains usable when rendered on narrow mobile screens

## Constraints

- Skills that apply: component-architecture, component-standards, code-style-standards, constants-standards
- Use a feature folder with colocated constants, models, hook, minis, and spec
- Keep `.tsx` files presentation-only; selection logic belongs in `useBookingPracticeViewModel`
- Reuse existing shared `Button`, `Section`, and `Link` primitives where practical
- Do not install dependencies

## Acceptance criteria

- [ ] `/booking-practice` renders without replacing the existing home page
- [ ] A user can select one of three services
- [ ] A user can select Carlos Vargas, Andrea Morales, or Sin preferencia
- [ ] A user can select a date
- [ ] A user can select available time slots and cannot select unavailable slots
- [ ] The summary reflects the current selection
- [ ] The UI avoids payment/checkout language
- [ ] The layout is responsive with sticky summary on desktop
