import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card--stuff">
        <div className="first-element">
          <img src={props.item.imageUrl} className="card--location--logo" />{" "}
        </div>
        <div className="second-element">
          <span>
            <img src="../images/location pin-24px.ico"></img>
          </span>
          <span>{props.item.location} </span>
          <span>
            <a href={props.item.googleMapsUrl}>view on google maps </a>
          </span>
          <h1>{props.item.title}</h1>
          <h4 className="bold">
            {props.item.startDate} - {props.item.endDate}
          </h4>
          <p className="description">{props.item.description}</p>
        </div>
      </div>
    </div>
  );
}
