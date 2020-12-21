import React from 'react';
import { connect } from 'react-redux';
import {getDoctors} from '../../actions/DoctorAction';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doctors: []
        }
    }

    componentDidMount() {
        console.log("PROPS:", this.props)
        this.props.getDoctors();
    }

    render() {
        const { doctors } = this.props.doctors;

        return (
            <div className="doctorList">
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
                                {
                                    doctors.map((doctor) => {
                                        return (
                                            <tr>
                                            <td>{doctor.doctorId}</td>
                                            <td>{doctor.doctorName}</td>
                                            <td>{doctor.doctorSpecialization}</td>
                                            <td>{doctor.doctorPhoneNumber}</td>
                                            <td>{doctor.doctorEmail}</td>
                                            </tr>)
                                    })
                                }
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

export default connect(mapStateToProps,{getDoctors})(Dashboard);