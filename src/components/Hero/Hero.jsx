import "./Hero.scss";
import t1 from "../../assect/t1.svg";
import t2 from "../../assect/t2.svg";
import t3 from "../../assect/t3.svg";
import t4 from "../../assect/t4.svg";
import t5 from "../../assect/t5.svg";
import t6 from "../../assect/t6.svg";
import t7 from "../../assect/t7.svg";
import t8 from "../../assect/t8.svg";
import t9 from "../../assect/t9.svg";
import t10 from "../../assect/t10.svg";
import t11 from "../../assect/t11.svg";
import t12 from "../../assect/t12.svg";

const Hero = () => {
  return (
    <main className="hero-section">
      <div className="wrapper">
        <div className="top">
          <h1>
            Your direct path <br /> to hired.
          </h1>
          <p>
            Skip the blackbox & instantly stand out by applying directly
            <br />
            to teams at top startups.
          </p>
          <div className="search">
            <input type="text" placeholder="Search Jobs..." />
            <button>Search</button>
          </div>
          <div className="trending-jobs">
            <h3>Trending Search :</h3>
            <div className="trending-search">
              <span>Designer</span>
              <span>Frontend</span>
              <span>Ui/Ux</span>
              <span>Backend</span>
            </div>
          </div>
        </div>
        <div className="bottom-logo-slider">
          <div className="slider">
            <img src={t1} alt="" />
            <img src={t2} alt="" />
            <img src={t3} alt="" />
            <img src={t4} alt="" />
            <img src={t5} alt="" />
            <img src={t6} alt="" />
            <img src={t7} alt="" />
            <img src={t8} alt="" />
            <img src={t9} alt="" />
            <img src={t10} alt="" />
            <img src={t11} alt="" />
            <img src={t12} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
