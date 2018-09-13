import React from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Home from "./Home";
// import Blog from "./Blog";
// import Contact from "./Contact";
import Details from "./CountryDetails";

const NavList = props => {
  const mappedList = props.list.map((el, i) => (
    <React.Fragment>
      <NavLink
        key={i}
        to={"/" + el}
        className="list-group-item list-group-item-action"
        onClick={() => props.clicked(i)}
      >
        {el}
      </NavLink>
      <Route path={"/" + el} component={Details} />
    </React.Fragment>
  ));
  return (
    <BrowserRouter>
      <div className="pseudoNav">
        <NavLink to="/">Home</NavLink>

        <Route exact path="/" component={Details} />
      </div>
    </BrowserRouter>
    // <div className="list-group nav-list">{mappedList}</div>
  );
};

export default NavList;
