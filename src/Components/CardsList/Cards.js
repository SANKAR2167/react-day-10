import React from "react";
import IconButton from '@mui/material/IconButton';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import "./Cards.css"
const Cards = () => {
  const cardData = [];
  return (
    <section className="cards mx-3 my-5">
    
      <div className="row">
        {cardData.map((data,index)=>
      <div className="col" key={index}>
      </div>
        )}
      </div>
    </section>
  );
};

export default Cards;