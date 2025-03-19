export interface Client {
  company: string;
  primaryContact: string;
  title: string;
  preferences: {
    dietary: string[];
    cabin: string;
    seating: string;
    beverages: string[];
  };
  yearToDate: {
    flights: number;
    revenue: number;
    satisfaction: number;
  };
  nextFlight?: {
    date: Date;
    destination: string;
    departureTime: string;
    arrivalTime: string;
    flightNumber: string;
  };
}

// Sample clients with upcoming flights
export const clients: Client[] = [
  {
    company: "Acme Corp",
    primaryContact: "John Smith",
    title: "CEO",
    preferences: {
      dietary: ["Kosher", "Low sodium"],
      cabin: "72°F",
      seating: "Forward facing",
      beverages: ["Macallan 18", "Fiji Water"],
    },
    yearToDate: {
      flights: 24,
      revenue: 2400000,
      satisfaction: 98,
    },
    nextFlight: {
      date: new Date(2025, 3, 28), // March 28, 2025
      destination: "New York",
      departureTime: "08:30 AM",
      arrivalTime: "11:45 AM",
      flightNumber: "GA1234",
    },
  },
  {
    company: "Global Ventures LLC",
    primaryContact: "Sarah Chen",
    title: "Managing Director",
    preferences: {
      dietary: ["Vegetarian"],
      cabin: "70°F",
      seating: "Rear cabin",
      beverages: ["Spanish wines", "Sparkling water"],
    },
    yearToDate: {
      flights: 18,
      revenue: 1800000,
      satisfaction: 96,
    },
    nextFlight: {
      date: new Date(2025, 3, 30), // March 30, 2025
      destination: "London",
      departureTime: "10:15 PM",
      arrivalTime: "11:30 AM",
      flightNumber: "GA5678",
    },
  },
];
