import React from "react";

const FeedbackCard = (props) => {
  const { comment, name, img, from } = props.feedback;
  return (
    <div className="card ">
      <div className="card-footer d-flex  align-items-center">
        <img className="mx-3" src={img} alt="" width="60" />
        <div>
          <h6 className="text-primary">{name}</h6>
          <p className="m-0">{from}</p>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text text-center">{comment}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
