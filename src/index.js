import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css';
import data from './resources/countries.json'
import NavList from './resources/components/NavList'

class App extends React.Component {
  render() {
    return (
      <div>
 <div class="row">
  <div class="col-5">Column 5/12</div>
  <div class="col-7">Column 7/12</div>
</div>

<nav>
    <h2>
        NAV BAR GOES HERE or there
        <NavList list = {data.data.map(el => el.name.common)} />
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