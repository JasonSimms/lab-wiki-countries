import React from "react";
// import Home from "./Home";
// import Blog from "./Blog";
// import Contact from "./Contact";


const NavList = props => {
    const mappedList = props.list.map((el,i) =>
    
    <a 
        key={i} 
        to={el}
        className="list-group-item list-group-item-action"
        onClick={() => props.clicked(i)}
    >{el}</a>
    
    )
    return (
      <div className="list-group nav-list">
        {mappedList}
      </div>
    );
  
}

export default NavList;