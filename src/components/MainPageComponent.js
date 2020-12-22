import React from "react";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { Link } from "react-router-dom";
class MainPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }
  render() {
    return (
      <div className="main">
        <HeaderComponent />
           <div className="main-page">
              <div className="row">
                 <div className="col-2">
                 <Link to="/add-doctor" className="btn btn-lg btn-info addButton">Add Doctor</Link>
                 </div>
                 <div className="col-2">
                 <Link to="/get-doctor" className="btn btn-lg btn-info addButton">Get Doctor</Link>
                 </div>
              </div>
           </div>
        <FooterComponent />
      </div>
    );
  }
}

export default MainPageComponent;
