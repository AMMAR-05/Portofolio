import React from "react";
import Project from "./Project";
import "./Projects.css";
import { motion } from "framer-motion";
function Projects() {
  return (
    <motion.section className="projects">
      <Project />
    </motion.section>
  );
}

export default Projects;
