import {combineReducers} from 'redux';
import errorReducer from './errorReducer';
import doctorsReducer from './doctorsReducer';

export default combineReducers({
    errors:errorReducer,
    doctors: doctorsReducer
    
});