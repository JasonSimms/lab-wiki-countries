import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css';
import data from './resources/countries.json'
// import data from "../../data.json";

class App extends React.Component {
  render() {
    return (
      <div>
<div class="row">
  <div class="col-5">Column 5/12</div>
  <div class="col-7">Column 7/12</div>
</div>

<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">Cras justo odio (active)</a>
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
  <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
</div>
<nav>
    <h2>
        NAV BAR GOES HERE
        </h2>
        <button> LIST of Countries Here</button>
       <h3>data.data.length = {data.data.length}</h3> 

</nav>
      </div>
    );
  }
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ),
  document.getElementById('root')
);