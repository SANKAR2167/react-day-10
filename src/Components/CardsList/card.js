import React from "react";
import "./card.css";

export const PartnerCard = () => {
  const cardData = [];
  return (
    <section className="my-5">   
      <div className="row mx-2">
        {cardData.map((data, index) => (
          <div className="col" key={index}>
          </div>
        ))}
      </div>
    </section>
  );
};