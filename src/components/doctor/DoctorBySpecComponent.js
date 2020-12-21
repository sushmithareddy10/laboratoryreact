import React from 'react';
import MainPageComponent from '../MainPageComponent';
class DoctorBySpecComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doctors =[]
        }
    }

    componentDidMount() {
        console.log("PROPS:", this.props)
        this.props.getDoctors();
    }

    render() {
        const doctors = this.props.doctors;
        return(
            <div className="specList">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <table>
                                <tr>
                                    <th>Doctor Id</th>
                                    <th>Doctor Name</th>
                                    <th>Doctor Specialization</th>
                                    <th>Doctor PhoneNumber</th>
                                    <th>Doctor Email</th>
                                </tr>
                            
                               
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=> ({
    doctors:state.doctors
});


export default connect(mapStateToProps,{getDoctors})(DoctorBySpecComponent);
