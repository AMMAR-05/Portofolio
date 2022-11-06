import React from "react";
import "./ReadMore.css";
import { motion } from "framer-motion";
function ReadMore(props) {
  return (
    <>
      <motion.div
        className="backdrop"
        onClick={props.onClose}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <motion.div
        className="modal_container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="modal_content">
          <div>{props.description}</div>
          <div>Tools: {props.tools}</div>
        </div>

        <div className="modal_buttons">
          <a className="modal_btn" href={props.link} target="blank">
            visit website
          </a>

          <button className="modal_btn" onClick={props.onClose}>
            close
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default ReadMore;
