// src/content/global/site.ts

export const site = {
  name: "Essence Medspa & Wellness Center",
  shortName: "Essence Medspa",
  tagline: "Where Science Meets Serenity",
  description:
    "Chicago's premier medspa offering advanced aesthetics, facials, body treatments, therapeutic massage, and IV therapy at 6413 N Kinzua Ave. 4.9 stars from 463+ Google reviews.",
  url: "https://www.essence-medspa.com",
  phone: "(773) 763-1212",
  phoneRaw: "+17737631212",
  email: "keepcalm@essence-medspa.com",
  address: {
    street: "6413 N Kinzua Ave",
    city: "Chicago",
    state: "IL",
    zip: "60646",
    neighborhood: "Edgebrook",
  },
  hours: [
    { day: "Monday", hours: "10:00 AM – 7:00 PM" },
    { day: "Tuesday", hours: "10:00 AM – 7:00 PM" },
    { day: "Wednesday", hours: "10:00 AM – 7:00 PM" },
    { day: "Thursday", hours: "10:00 AM – 7:00 PM" },
    { day: "Friday", hours: "10:00 AM – 7:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 5:00 PM" },
    { day: "Sunday", hours: "By Appointment" },
  ],
  social: {
    instagram: "https://www.instagram.com/essencechicago/",
    facebook: "https://www.facebook.com/essencemedspainchicago",
    tiktok: "https://www.tiktok.com/@essencechicago",
  },
  booking: {
    url: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now",
    servicesDirectory:
      "https://www.vagaro.com/essencemedspaandwellnesscenter/services",
    productsStore:
      "https://www.vagaro.com/essencemedspaandwellnesscenter/products",
    platform: "Vagaro",
  },
  googleReviews: {
    count: 463,
    rating: 4.9,
    // ASSUMPTION: Google review link — update with actual link
    url: "https://g.page/essence-medspa-chicago/review",
  },
  schema: {
    type: "MedicalSpa" as const,
    priceRange: "$$",
    areaServed: [
      "Chicago",
      "Edgebrook",
      "Sauganash",
      "Forest Glen",
      "Lincolnwood",
      "Park Ridge",
      "Niles",
      "Norwood Park",
    ],
  },
};
