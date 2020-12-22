import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getDoctors, deleteDoctor } from "../../actions/DoctorAction";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      searchValue: "",
    };
  }

  componentDidMount() {
    console.log("PROPS:", this.props);
    this.props.getDoctors();
  }

  handleSearchChange = (event) => {
    console.log('--------HandleSearchChange Function Called--------')
    this.setState({ searchValue: event.target.value });
  };

  onDelete = (id) => {
    console.log('--------OnDelete Fucntion called--------')
    this.props.deleteDoctor(id);
  };

  render() {
    const { doctors } = this.props.doctors;
    const { doctor } = this.props;
        return (
      <div className="doctorList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <input
                type="text"
                value={this.state.searchValue}
                onChange={this.handleSearchChange}
              ></input>
            </div>
            <div className="col-md-12">
              <table class="table table-striped table-hover">
                <tr>
                  <th>Doctor Id</th>
                  <th>Doctor Name</th>
                  <th>Doctor Specialization</th>
                  <th>Doctor PhoneNumber</th>
                  <th>Doctor Email</th>
                  <th colSpan="2">Edit/Delete</th>
                </tr>
                {this.state.searchValue
                  ? doctors.map((doctor) => {
                      if (
                        doctor.doctorSpecialization.includes(
                          this.state.searchValue
                        )
                      ) {
                        return (
                          <tr>
                            <td>{doctor.doctorId}</td>
                            <td>{doctor.doctorName}</td>
                            <td>{doctor.doctorSpecialization}</td>
                            <td>{doctor.doctorPhoneNumber}</td>
                            <td>{doctor.doctorEmail}</td>
                            <td><Link>EDIT</Link></td>
                            <td> <Link onClick= { this.onDelete.bind(this, doctor.doctorId)}>DELETE</Link></td>
                          </tr>
                        );
                      }
                    })
                  : doctors.map((doctor) => {
                      return (
                        <tr>
                          <td>{doctor.doctorId}</td>
                          <td>{doctor.doctorName}</td>
                          <td>{doctor.doctorSpecialization}</td>
                          <td>{doctor.doctorPhoneNumber}</td>
                          <td>{doctor.doctorEmail}</td>
                          <td><Link to={`/update-doctor/${doctor.doctorId}`}>EDIT</Link></td>
                          <td><Link onClick= { this.onDelete.bind(this, doctor.doctorId)}>DELETE</Link></td>
                        </tr>
                      );
                    })}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  doctors: state.doctors,
});

export default connect(mapStateToProps, { getDoctors , deleteDoctor})(Dashboard);
