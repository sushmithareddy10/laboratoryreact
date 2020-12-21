import {GET_DOCTORS} from '../actions/type';

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
            };
        default:
            return state;
    }
}