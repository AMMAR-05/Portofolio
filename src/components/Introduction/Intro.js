import { useEffect, useState } from "react";
import HomeLoading from "../UI/HomeLoading";
import AmmarImg from "./images/Ammar.JPG";
import { FaDev } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import "./intro.css";
function Intro() {
  const [homeIsLoading, setHomeIsLoading] = useState(false);

  useEffect(() => {
    setHomeIsLoading(true);
    const timer = setTimeout(() => {
      setHomeIsLoading(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {homeIsLoading && <HomeLoading />}
      <section className="intro" id="intro">
        <div className="intro__image-container">
          <img className="intro__image" src={AmmarImg} alt="" />
        </div>

        <div className="intro_info">
          <div className="intro__text">
            {/* Title */}
            <h2>Hi, I'm Ammar. I design & build user interfaces.</h2>

            {/* Job */}
            <div className="intro__job">
              <FaDev className="intro__icon" />
              <p className="intro__kind">Web Developer</p>
            </div>

            {/* Location */}
            <div className="intro__location">
              <MdLocationCity className="intro__icon" />
              <p className="intro__kind">Germany, Duesseldorf</p>
            </div>
          </div>
        </div>

        {/* More Info */}
        {/* <div className="moreInfo">
        <p className="creativity">Creativity</p>
        <p className="patience">Patience</p>
        <p className="dedication">Dedication</p>
      </div> */}
      </section>
    </>
  );
}

export default Intro;
