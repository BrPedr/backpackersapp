import Budget from "../assets/budget.png";
import Events from "../assets/flame-success.png";
import Tickets from "../assets/flame-start-up-support.png";
import Lodge from "../assets/flame-coming-soon.png";
import Routes from "../assets/conifer-193.png";
import Adressess from "../assets/cherry-page-not-found.png";
import Documents from "../assets/undraw_filing_system_b5d2.svg";
import TravelLog from "../assets/kingdom-4.png";

export const data = {
  titles: {
    banner: {
      title: "There’s a whole world waiting for you. Go see it!",
      subtitle:
        "Backpackers is your ultimate travel companion. Carries all the information you need while travelling.",
    },
    section: {
      title: [
        "Join the biggest community of backpackers",
        "Choose the plan that’s right for you",
      ],
      call: [
        "PLAN AHEAD",
        "GET CONNECTED",
        "DISCOVER NEW PLACES",
        "PRICING TABLE",
      ],
      subtitle: [
        "The world is just one click away from you",
        "Meet your friends around the world",
        "Life is an adventure. Seize it!",
      ],
      perks: {
        title: [
          "Choose Roads",
          "Control The Budget",
          "Manage Your Time",
          "Share Memories",
          "Share Plans",
          "Follow travellers",
          "Get Suggestions",
          "Create Events",
          "Be Secure",
        ],
        description: [
          "Create complete travel plans with the maps and places you want to stay",
          "Take control of your expenses by managing them inside the app itself",
          "Define how much time you want to spend on each location",
          "Share your log travel with your fellow travellers and get to know them more",
          "Send your cards travels to anyone you want and make a trip together",
          "Like and discover places recommended by backpackers",
          "See sugestions of places and events to attend based on the cities you are at",
          "Create an event to gather other backpackers",
          "Be secure sharing your location in real time with anyone you trust",
        ],
      },
    },
  },
};

export const features = () => [
  {
    cards: [
      {
        name: "Routes",
        color: "#E24E42",
        area: "ROUTE",
        url: Routes,
      },
      {
        name: "Documents",
        color: "#E9B000",
        area: "DOC",
        url: Documents,
      },
      {
        name: "Adressess",
        color: "#EB6E80",
        area: "ADRESSESS",
        url: Adressess,
      },
      {
        name: "Travel Log",
        color: "#FFC7CD",
        area: "LOG",
        url: TravelLog,
      },
      {
        name: "Tickets",
        color: "#008F95",
        area: "TICKETS",
        url: Tickets,
      },
      {
        name: "Budget",
        color: "#97D3ED",
        area: "BUDGET",
        url: Budget,
      },
      {
        name: "Events",
        color: "#48BFC4",
        area: "EVENTS",
        url: Events,
      },
      {
        name: "Lodging",
        color: "#ED5C5C",
        area: "LODGE",
        url: Lodge,
      },
      {
        name: "People",
        color: "#E9B000",
        area: "PEOPLE",
        url: { Budget },
      },
    ],
  },
];
