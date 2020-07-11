import React, { Component } from "react";
import { BrowserRouter, Route, Link} from "react-router-dom"
 
class NavBar extends Component {
  render() {
    return (
        <BrowserRouter>
        <div>
            <Link to="/home">Home</Link>
            <Link to="/">Learn</Link>
            {/* <Route exact path="/home" component={Home} /> */}
        </div>
        </BrowserRouter>
    );
  }
}
 
export default NavBar;