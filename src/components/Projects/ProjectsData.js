import PetTakerImage from "./images/pettaker.png";
import CryptoImage from "./images/cryptyimg.png";
import LuckyDrinkImage from "./images/luckydrink.png";
import PizzaImage from "./images/pizza.png";
const projectsApi = [
  {
    title: "Pet Taker",
    type: "Full-Stack",
    description:
      "Pet Taker is a Full-Stack application to help out people who have pets but cannot take care of them for a period of time. It will also come in handy if someone does not have a pet but always wanted to try it out.",

    tools: [
      "React | Material UI | React Hook Form | Node JS | Mongo DB | Express | Multer | Cloudinary ",
    ],
    image: [PetTakerImage],
    gitLink: "https://github.com/AMMAR-05/pet-taker",
    link: "https://react-star.web.app",
  },
  {
    title: "Crypto",
    type: "Front-End",
    description:
      "Crypto is a Front-End application to keep track of all the Crypto currencies based on the Coingeko Api.",
    tools: [
      "React | Redux | Redux toolkit | Tailwind | React paginate | Axios | Coingeko API",
    ],
    image: [CryptoImage],
    gitLink: "https://github.com/AMMAR-05/Crypto",
    link: "http://crypto.ammardan.com/",
  },
  {
    title: "Lucky Drink",
    type: "Front-End",
    description:
      "Lucky Drink is a Front-End Website a simple Landing Page for a bar.",
    tools: ["Html | Css | Jqurey"],
    image: [LuckyDrinkImage],
    gitLink: "https://github.com/AMMAR-05/LUCKY_DRINK",
    link: "http://luckydrink.ammardan.com/",
  },
  {
    title: "Pizza",
    type: "Front-End",
    description: "Pizza is a Resturant website.",
    tools: ["Next.js | Tailwind "],
    image: [PizzaImage],
    gitLink: "https://github.com/AMMAR-05/PIZZA",
    link: "https://pizza-ivory-xi.vercel.app/",
  },
];
export default projectsApi;
