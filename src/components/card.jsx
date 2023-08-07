import * as React from "react";

const ActionAreaCard = (props) => {
  return (
    <div className="main">
      <div className="top">
        <img src={props.link} alt="" width="200px" height="200px" />
        <div className="heading">{props.name}</div>
      </div>
      <div className="below-data">
        <div className="lang">{props.language}</div>
        <div className="score">{(props.score * 100).toFixed(2) + "%"}</div>
      </div>
      <div className="g">
        {props.genre.map((k) => {
          return <div className="genre">{k}</div>;
        })}
      </div>
      <div className="button-cont">
        <button className="btn" onClick={props.clickfunc}>
          More
        </button>
      </div>
    </div>
  );
};

export default ActionAreaCard;
