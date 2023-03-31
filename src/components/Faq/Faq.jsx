import { useState } from "react";
import "./Faq.scss";

const Faq = () => {
  const [isopen, setIsOpen] = useState(2);
  return (
    <div className="faq container">
      <h2> FAQ'S</h2>
      <div className="wrapper">
        <div className="que">
          <button
            className={isopen === 1 ? "  focus" : ""}
            onClick={() => setIsOpen(1)}
          >
            Why use Parallel over other job boards?
          </button>
          <button
            className={isopen === 2 ? "  focus" : ""}
            onClick={() => setIsOpen(2)}
          >
            What types of jobs are on Parallel?
          </button>
          <button
            className={isopen === 3 ? "  focus" : ""}
            onClick={() => setIsOpen(3)}
          >
            What does apply direct or get referred mean?
          </button>
        </div>

        <div className="ans">
          <p className={isopen === 1 ? "active" : ""}>
            <b>Ans:</b> With Parallel your application goes directly to team
            members and decision makers. You can manage all your applications in
            one place, apply in two clicks, and get a decision / feedback much
            sooner.
          </p>
          <p className={isopen === 2 ? "active" : ""}>
            <b>Ans:</b> We are curating the best jobs from purpose driven
            companies in technology, direct to consumer, and lifestyle brands.
            New jobs are added every week.
          </p>
          <p className={isopen === 3 ? "active" : ""}>
            <b>Ans:</b> This means your application goes direct to the founder,
            hiring manager or the team you would be working with.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
