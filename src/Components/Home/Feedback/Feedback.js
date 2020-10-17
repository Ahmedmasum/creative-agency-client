import React from "react";
import customer1 from "../../../Resources/images/customer-1.png";
import customer2 from "../../../Resources/images/customer-2.png";
import customer3 from "../../../Resources/images/customer-3.png";
import FeedbackCard from "../FeedbackCard/FeedbackCard";
import "./Feedback.css";

const feedbackData = [
  {
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Nash Patrik",
    company: "CEO, Manpol",
    img: customer1,
  },
  {
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Miriam Barron",
    from: "CEO, Manpal",
    img: customer2,
  },
  {
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Bria Malone",
    from: "CEO, Manpal",
    img: customer3,
  },
];

const Feedback = () => {
  return (
    <section className="feedbacks my-5 py-5">
      <div className="container">
        <div className="section-header">
          <h3 className="text-dark font-weight-bold text-center">
            Client <span style={{ color: "lightgreen" }}>Feedback</span>
          </h3>
        </div>
        <div className="card-deck mt-5">
          {feedbackData.map((feedback) => (
            <FeedbackCard
              feedback={feedback}
              key={feedback.name}
            ></FeedbackCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
