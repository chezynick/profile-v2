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
      "On top of week long trips around the Lakes, Yorkshire Dales and Scotland, I have spent 2 weeks cycling the width of France from Geneva to Bordeaux, cycled self supported from Auckland to Christchurch while in New Zealand and cycled over 600km around Corsica. ",
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
      "Before and during my time with STA I am lucky enough to have visited over 40 countries, I like to travel overland as much as possible preferably by bike surprisingly but have also spent 4 months in Australia as well as over 6 months exploring Asia.",
  },
  {
    name: "Food!",
    IconName: () => (
      <FontAwesomeIcon
        size="lg"
        className="shrink-0 text-primaryColor"
        icon={faPizzaSlice}
      />
    ),
    description:
      "I am a keen home cook and baker, I have kept a sourdough starter alive for over 4 years and regularly use it for loaves and pizza, even pre lock down I could be found regularly trying out recipes inspired by my travels.",
  },
];
export default hobbies;
