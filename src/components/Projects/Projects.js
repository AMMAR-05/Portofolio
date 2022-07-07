import React from "react";
import Project from "./Project";
import "./Projects.css";
import PetTakerImage from "./images/pettaker.png";
import LuckyDrinkImage from "./images/luckydrink.png";
import PizzaImage from "./images/pizza.png";
import GreenfoodImage from "./images/greenfood.png";

const petTaker = {
  title: "Pet Taker",
  type: "Full-Stack Project",
  description: "",
  tools: ["React", "Redux", "Node", "Express", "Mysql", "Figma"],
  image: [PetTakerImage],
  gitLink: "",
  link: "http://pettaker.coding-school.org/",
};
const luckyDrink = {
  title: "Lucky Drink",
  type: "Front-end Project",
  description: "",
  tools: ["Html", "Css", "Jqurey"],
  image: [LuckyDrinkImage],
  gitLink: "https://github.com/AMMAR-05/LUCKY_DRINK",
  link: "http://luckydrink.ammardan.com/",
};
const pizza = {
  title: "Pizza",
  type: "Front-end Project",
  description: "",
  tools: ["React", "Css", "Next.js"],
  image: [PizzaImage],
  gitLink: "https://github.com/AMMAR-05/PIZZA",
  link: "https://pizza-ivory-xi.vercel.app/",
};
const greenfood = {
  title: "Green Food",
  type: "Front-end Project",
  description: "",
  tools: ["React", "Css", "Tailwind"],
  image: [GreenfoodImage],
  gitLink: "https://github.com/AMMAR-05/Green_Food",
  link: "http://greenfood.ammardan.com/",
};

function Projects() {
  return (
    <section className="projects" id="projects">
      <Project
        title={petTaker.title}
        type={petTaker.type}
        description={petTaker.description}
        tools={petTaker.tools}
        image={petTaker.image}
        link={petTaker.link}
      />
      <Project
        title={luckyDrink.title}
        type={luckyDrink.type}
        description={luckyDrink.description}
        tools={luckyDrink.tools}
        image={luckyDrink.image}
        link={luckyDrink.link}
        gitLink={luckyDrink.gitLink}
      />
      <Project
        title={pizza.title}
        type={pizza.type}
        description={pizza.description}
        tools={pizza.tools}
        image={pizza.image}
        link={pizza.link}
        gitLink={pizza.gitLink}
      />
      <Project
        title={greenfood.title}
        type={greenfood.type}
        description={greenfood.description}
        tools={greenfood.tools}
        image={greenfood.image}
        link={greenfood.link}
        gitLink={greenfood.gitLink}
      />
    </section>
  );
}

export default Projects;
