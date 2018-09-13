import React, { Component } from "react";
// import Home from "./Home";
// import Blog from "./Blog";
// import Contact from "./Contact";

const NavList = props => {
    const mappedList = props.list.map(el =>
    
  <a href="#" className="list-group-item list-group-item-action col-5">{el}</a>
    
    )
    return (
      <div className="list-group nav-list">
{mappedList}
      </div>
    );
  
}

export default NavList;