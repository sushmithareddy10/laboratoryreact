import axios from 'axios';
import {GET_DOCTORS, GET_ERRORS} from "./type";
export const addDoctor = (doctor,history) => async (dispatch) => {
    let res ={};
    try {
        res = await axios.post("http://localhost:8080/api/doctors/insert",doctor);
        history.push("/get-doctor");
    }catch(error) {
        console.log("ERROR", error)
       dispatch({
        type: GET_ERRORS,
        payload: error.response.data,
       });
    }
};

export const getDoctors = () => async (dispatch) => {
    const res = await axios.get("http://localhost:8080/api/doctors/all");
    console.log(res);
    dispatch({
        type: GET_DOCTORS,
        payload: res.data,
    });
};