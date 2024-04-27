import React from "react";
import Details from "./Details";
import Avator from "./Avator";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>

        <Avator img={props.img} />
      </div>
      <div className="bottom">
        <Details phone={props.phone} email={props.email} />
      </div>
    </div>
  );
}
export default Card;
