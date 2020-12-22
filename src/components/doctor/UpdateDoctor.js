import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addDoctor, getDoctor } from "../../actions/DoctorAction";
class UpdateDoctor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      doctorId: "",
      doctorName: "",
      doctorSpecialization: "",
      doctorPhoneNumber: "",
      doctorEmail: "",
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const newDoctor = {
      doctorId: this.state.doctorId,
      doctorName: this.state.doctorName,
      doctorSpecialization: this.state.doctorSpecialization,
      doctorPhoneNumber: this.state.doctorPhoneNumber,
      doctorEmail: this.state.doctorEmail,
    };

    this.props.addDoctor(newDoctor, this.props.history);
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    this.props.getDoctor(id, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    const {
      doctorId,
      doctorName,
      doctorSpecialization,
      doctorPhoneNumber,
      doctorEmail,
    } = nextProps.doctor;

    this.setState({
      doctorId,
      doctorName,
      doctorSpecialization,
      doctorPhoneNumber,
      doctorEmail,
    });
  }

  render() {
    return (
      <div className="doctor">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Update Doctor Form</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="doctor Id"
                    name="doctorId"
                    onChange={this.onChange}
                    value={this.state.doctorId}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Doctor Name"
                    name="doctorName"
                    onChange={this.onChange}
                    value={this.state.doctorName}
                  />
                </div>

                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    name="doctorSpecialization"
                    value={this.state.doctorSpecialization}
                    onChange={this.onChange}
                  >
                    <option value="">Choose Specialization</option>
                    <option value="Ortho">Ortho</option>
                    <option value="Heart">Heart</option>
                    <option value="Skin">Skin</option>
                    <option value="Hair">Hair</option>
                  </select>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Doctor Number"
                    name="doctorPhoneNumber"
                    onChange={this.onChange}
                    value={this.state.doctorPhoneNumber}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Doctor Email"
                    name="doctorEmail"
                    onChange={this.onChange}
                    value={this.state.doctorEmail}
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateDoctor.propTypes = {
  addDoctor: PropTypes.func.isRequired,
  getDoctor: PropTypes.func.isRequired,
  doctor: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  doctor: state.doctors.doctor,
});
export default connect(mapStateToProps, { addDoctor,  getDoctor })(UpdateDoctor);
