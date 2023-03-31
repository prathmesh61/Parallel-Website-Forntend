import { useState } from "react";
import "./Profile.scss";
import pic1 from "../../assect/pic1.png";
import pic2 from "../../assect/pic2.png";

const Profile = () => {
  const [select, setselect] = useState(1);
  return (
    <sction className="profile">
      <div className="wrapper">
        <div className="buttons">
          <button
            onClick={() => setselect(1)}
            className={select === 1 ? " button focus" : "button"}
          >
            Parallel
          </button>
          <button
            onClick={() => setselect(2)}
            className={select === 2 ? "button focus" : "button"}
          >
            Jobs Sites
          </button>
        </div>
        <div className="images">
          <img src={pic1} alt="" className={select === 2 ? "none" : ""} />
          <img src={pic2} alt="" className={select === 1 ? "none" : ""} />
        </div>
      </div>
    </sction>
  );
};

export default Profile;
