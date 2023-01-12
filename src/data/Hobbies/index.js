import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBiking,
  faGlobeEurope,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";

const hobbies = [
  {
    name: "Cycling",
    IconName: () => (
      <FontAwesomeIcon
        size="lg"
        className="shrink-0 text-primaryColor"
        icon={faBiking}
      />
    ),
    description:
      "A keen cyclist, I have enjoyed week long trips around the Lakes, Yorkshire Dales and Scotland. Also on self supported cycles trips, travelled the width of France from Geneva to Bordeaux,  Auckland to Christchurch in New Zealand and over 600km around Corsica. ",
  },
  {
    name: "Travel",
    IconName: () => (
      <FontAwesomeIcon
        size="lg"
        className="shrink-0 text-primaryColor"
        icon={faGlobeEurope}
      />
    ),
    description:
      "I have visited over 40 countries and my interest in travel led to a career at STA. I like to travel overland as much as possible, preferably by bike. During a gap year, I was lucky to have spent 4 months in Australia and over 6 months exploring Asia.",
  },
  {
    name: "Food",
    IconName: () => (
      <FontAwesomeIcon
        size="lg"
        className="shrink-0 text-primaryColor"
        icon={faPizzaSlice}
      />
    ),
    description:
      "I am a keen home cook and baker, regularly makinhg sourdough loaves and pizzas. Even pre-lockdown, I was frequently trying out recipes inspired by my travels.",
  },
];
export default hobbies;
