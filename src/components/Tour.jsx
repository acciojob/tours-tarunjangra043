import React, { useState } from "react";
import "../styles/Tour.css";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour">
      <img src={image} alt={name} className="tour-img" />
      <div className="tour-info">
        <h4 className="tour-name">{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p id={`tour-item-para-${id}`} className="tour-text">
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button
          id={`see-more-${id}`}
          className="btn-read"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "Show less" : "See more"}
        </button>
      </p>
      <button
        id={`delete-btn-${id}`}
        className="btn-delete"
        onClick={() => removeTour(id)}
      >
        Not Interested
      </button>
    </article>
  );
};

export default Tour;
