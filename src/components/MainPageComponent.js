import React from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import { Link } from 'react-router-dom';
class MainPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query :''
        }
    }
    render() {
        return (
            <div className="main">
                <HeaderComponent />
                <div className="main-page">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="doctor-button">
                                    <Link to="/add-doctor" className="btn btn-lg btn-info">Add Doctor</Link>
                                </div>
                                <div className="doctor-button">
                                    <input type="text"value= {this.state.query}></input>
                                    <button>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterComponent />
            </div>
        );
    }
}

export default MainPageComponent;