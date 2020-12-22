import {DELETE_DOCTOR, GET_DOCTOR, GET_DOCTORS} from '../actions/type';

const initialState = {
    doctors: [],
    doctor: {}
};

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_DOCTORS:
            return {
                ...state,
                doctors: action.payload,
            }
        case DELETE_DOCTOR:
            return {
                ...state,
                doctors: state.doctors.filter(
                    doctor => doctor.doctorId!==action.payload
                )
            }
        case GET_DOCTOR:
            return {
                ...state,
                doctor: action.payload
            };
        default:
            return state;
    }
}