import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";
import { addDoctor } from "../../actions/DoctorAction";
class AddDoctor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorId: "",
      doctorName: "",
      doctorSpecialization: "",
      doctorPhoneNumber: "",
      doctorEmail: "",
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("--------componentWillReceiveProps : Called----------");
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
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

  render() {
    const { errors } = this.state;
    return (
      <div className="doctor">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="text-center">Add Doctor Form</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg",{"is-invalid":errors.doctorId})}
                    placeholder="doctor Id"
                    name="doctorId"
                    onChange={this.onChange}
                    value={this.state.doctorId}
                  />
                  {errors.doctorId && (
                    <div className="invalid-feedback">
                        {errors.doctorId}
                    </div>
                )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg",{"is-invalid":errors.doctorName})}
                    placeholder="Doctor Name"
                    name="doctorName"
                    onChange={this.onChange}
                    value={this.state.doctorName}
                  />
                  {errors.doctorName && (
                    <div className="invalid-feedback">
                        {errors.doctorName}
                    </div>
                )}
                </div>

                <div className="form-group">
                  <select
                    className={classnames("form-control form-control-lg",{"is-invalid":errors.doctorSpecialization})}
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
                  {errors.doctorSpecialization && (
                    <div className="invalid-feedback">
                        {errors.doctorSpecialization}
                    </div>
                )}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg",{"is-invalid":errors.doctorPhoneNumber})}
                    placeholder="Doctor Number"
                    name="doctorPhoneNumber"
                    onChange={this.onChange}
                    value={this.state.doctorPhoneNumber}
                  />
                  {errors.doctorPhoneNumber && (
                    <div className="invalid-feedback">
                        {errors.doctorPhoneNumber}
                    </div>
                )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg",{"is-invalid":errors.doctorEmail})}
                    placeholder="Doctor Email"
                    name="doctorEmail"
                    onChange={this.onChange}
                    value={this.state.doctorEmail}
                  />
                  {errors.doctorEmail && (
                    <div className="invalid-feedback">
                        {errors.doctorEmail}
                    </div>
                )}
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

AddDoctor.propTypes = {
  addDoctor: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  errors: state.errors,
});
export default connect(mapStateToProps, { addDoctor })(AddDoctor);
