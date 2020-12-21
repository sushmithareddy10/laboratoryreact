import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addDoctor} from '../../actions/DoctorAction';
class AddDoctor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doctorId:"",
            doctorName:"",
            doctorSpecialization:"",
            doctorPhoneNumber:"",
            doctorEmail:"",
            errors:{}
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("--------componentWillReceiveProps : Called----------");
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }

    onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
     }

    onSubmit=(event)=>{
        event.preventDefault();
        const newDoctor = {
            doctorId: this.state.doctorId,
            doctorName: this.state.doctorName,
            doctorSpecialization: this.state.doctorSpecialization,
            doctorPhoneNumber: this.state.doctorPhoneNumber,
            doctorEmail: this.state.doctorEmail
        }

      this.props.addDoctor(newDoctor,this.props.history);

    }

    render() {
        const {errors} = this.state;
        return (
            <div className="doctor">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Add Doctor Form</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="doctor Id" 
                                    name="doctorId" 
                                    onChange={this.onChange}
                                    value={this.state.doctorId}/>
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
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Doctor Specialization" 
                                    name="doctorSpecialization" 
                                    onChange={this.onChange}
                                    value={this.state.doctorSpecialization}
                                    />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Docto Number" 
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
                           
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

AddDoctor.propTypes = {
    addDoctor:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
errors: state.errors
});
export default connect(mapStateToProps,{addDoctor})(AddDoctor);