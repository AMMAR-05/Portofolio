import React, { useState } from "react";
import "./Project.css";
import ProjectsData from "./ProjectsData";
function Project(props) {
  const [current, setCurrent] = useState(0);
  const length = ProjectsData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="project_slider">
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
            <>
              <a href={project.gitLink} target="blank">
                <h3 className="gitlink_title">GitHub</h3>
              </a>

              <a href={project.link} target="blank">
                <img
                  src={project.image}
                  className="project_image"
                  alt="project"
                />
              </a>
            </>
          )}
        </div>
      ))}
    </section>

    // <section className="project_container">
    //   <a href={props.gitLink} className="project_info" target="blank">
    //     <h3 className="project__code">GitHub</h3>
    //   </a>
    //   <a href={props.link} className="project" target="blank">
    //     <img className="project__image" src={props.image} alt="project" />
    //   </a>
    // </section>
  );
}

export default Project;
