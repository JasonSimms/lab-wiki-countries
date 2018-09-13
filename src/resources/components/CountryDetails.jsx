import React from "react";
import data from "../countries.json";


const Details = props => {
console.log(data.data[5].name.common)

let neighbor1 = props.state.borders.map((a,i) => {
  return(
<li key={i+a}>
      {a}
    </li>
  )
})



  return (
    <div className="col-7 details">
      <h5>Official Name: {props.state.name.official}</h5>
      <h6>Place where everything goes down: {props.state.capital}</h6>

      <h6>Size: {props.state.area} kms</h6>

      <h6>Country Borders:</h6>

      {props.state.flag}
{neighbor1}
    </div>
  );
};

export default Details;
