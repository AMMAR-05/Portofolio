import React, { useContext, useState } from "react";
import "./Project.css";
import ProjectsData from "./ProjectsData";
import { motion } from "framer-motion";
import ReadMore from "../UI/ReadMore";
import { ThemeContext } from "../../components/UI/themeContext";

function Project(props) {
  const [current, setCurrent] = useState(0);
  const [animateSlide, setAnimateSlide] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const length = ProjectsData.length;

  const theme = useContext(ThemeContext);

  const nextSlide = () => {
    setAnimateSlide(!animateSlide);

    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setAnimateSlide(!animateSlide);

    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Modal Read More
  const onOpenReadMore = () => {
    setIsOpen(true);
  };
  const onCloseReadMore = () => {
    setIsOpen(false);
  };

  return (
    <motion.section className="project_slider">
      <div className="arrow to_next" onClick={nextSlide}>
        <div className="arrow-top"></div>
        <div className="arrow-bottom"></div>
      </div>
      <div className="arrow to_previous" onClick={previousSlide}>
        <div className="arrow-top"></div>
        <div className="arrow-bottom"></div>
      </div>

      {ProjectsData.map((project, index) => (
        <div className="project_items" key={index}>
          {index === current && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="btns">
                {/* Github btn */}
                <a href={project.gitLink} target="blank">
                  <h3 className="project_btn">GitHub</h3>
                </a>

                {/* open Read more  */}
                <h3 onClick={onOpenReadMore} className="project_btn">
                  Read More
                </h3>

                {/* Theme toggler */}
                <h3
                  className={`${"project_btn theme_btn"} `}
                  onClick={theme.toggleTheme}
                >
                  {theme.theme === "" ? `Light` : `Dark`}
                </h3>
              </div>

              {/* Read More Modal */}
              {isOpen && (
                <ReadMore
                  tools={project.tools}
                  description={project.description}
                  link={project.link}
                  onClose={onCloseReadMore}
                />
              )}

              {/* Image btn */}
              <a href={project.link} target="blank">
                <img
                  src={project.image}
                  className="project_image"
                  alt="project"
                />
              </a>
            </motion.div>
          )}
        </div>
      ))}
    </motion.section>
  );
}

export default Project;
