import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper container">
        <div className="left">
          <h3>Join for free career tips!</h3>
          <div className="signUp">
            <input type="text" placeholder="Email..." />
            <button>Sign Up</button>
          </div>
        </div>
        <div className="right">
          <p>
            2021 Parallel Group. All Rights Reserved,Terms of Service Privacy
            Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
