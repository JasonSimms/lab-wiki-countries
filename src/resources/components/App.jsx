import React from "react";
import data from "../countries.json";

import NavList from "./NavList";
import Details from "./CountryDetails";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCountry: null
      // query: null
    };
    this._clicked = this._clicked.bind(this);
  }
  render() {
    return (
      <div>
        <div className="Header">JASONS COUNTRIES</div>
        <div className="row">
          <NavList
            list={data.data.map(el => el.name.common)}
            clicked={this._clicked}
          />
          {this.state.selectedCountry && <Details state={this.state.selectedCountry}/>}
        </div>
      </div>
    );
  }
  _clicked(index) {
    console.log("clicked: ", index);
    this.setState({
        selectedCountry: data.data[index]
    });
    console.log(this.state.selectedCountry);
  }
}

export default App;
