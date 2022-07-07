import React from "react";
import ReactDom from "react-dom";
import "./HomeLoading.css";

function HomeLoading(props) {
  const Backdrop = () => {
    return <div className="backdorp"></div>;
  };

  const ModalOverlay = (props) => {
    return (
      <div className="modal_overlay">
        <div class="bubbles">
          <div class="bubble">DO</div>
          <div class="bubble">SOMETHING</div>
          <div class="bubble">GREAT</div>
          <div class="bubble">DO</div>
          <div class="bubble">SOMETHING</div>
          <div class="bubble">GREAT</div>
          <div class="bubble">DO</div>
          <div class="bubble">SOMETHING</div>
          <div class="bubble">GREAT</div>
          <div class="bubble">DO</div>
          <div class="bubble">SOMETHING</div>
          <div class="bubble">GREAT</div>
        </div>
        {/* <div className="text_overlay"> */}
        <h3 className="do">DO</h3>
        <div className="do_spinner"></div>
        <h3 className="something">SOMETHING</h3>
        <div className="something_spinner"></div>
        <h3 className="great">GREAT</h3>
        <div className="great_spinner"></div>
        {/* </div> */}
      </div>
    );
  };

  const backdorpFragment = document.getElementById("overlay");

  return (
    <React.Fragment>
      {ReactDom.createPortal(<Backdrop />, backdorpFragment)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        backdorpFragment
      )}
    </React.Fragment>
  );
}

export default HomeLoading;
