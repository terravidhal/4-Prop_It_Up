import React from "react";
import PropTypes from "prop-types";
import "./PersonCard.css";



const PersonCard = (props) => {
  const { firstName, lastName, age, hairColor } = props;
  return (
  <div className="PersonCard">
    <h2>{ firstName }, { lastName }</h2>
     <p>Age : { age }</p>
     <p>Hair Color : { hairColor }</p>
  </div>);
};

PersonCard.propTypes = {};

PersonCard.defaultProps = {};

export default PersonCard;
