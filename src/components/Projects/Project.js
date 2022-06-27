import React from "react";
import "./Project.css";

function Project(props) {
  const tools = props.tools;
  const listOfTools = tools.map((tool) => (
    <span key={Math.random(10)}>{tool}</span>
  ));

  return (
    <section className="project_container">
      <a href={props.gitLink} className="project_info" target="blank">
        <h3 className="project__code">GitHub</h3>
      </a>
      <a href={props.link} className="project" target="blank">
        <img className="project__image" src={props.image} alt="bat" />
        <h2 className="project__title">{props.title}</h2>
        <p className="project__type">{props.type}</p>
        <div className="project__technologies">{listOfTools}</div>
      </a>
    </section>
  );
}

export default Project;
