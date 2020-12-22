import axios from 'axios';
import {DELETE_DOCTOR, GET_DOCTOR, GET_DOCTORS, GET_ERRORS} from "./type";
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
    fetch(res).then(response => {
        if(response.ok) {
            return response;
        }
        else{
            var error = new Error('Error' + response.status+ ' ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmsg = new Error(error.message);
        throw errmsg;
    })
    dispatch({
        type: GET_DOCTORS,
        payload: res.data,
    })
    .catch(error => dispatch(getDoctorError(error.message)));
};

export const getDoctorError = (errmsg) => ({
    type: GET_ERRORS,
    payload: errmsg
})

export const deleteDoctor = (id) => async (dispatch) => {
    if(window.confirm("Are you sure ? This will delete the Doctor details")) {
        const res = await axios.delete(`http://localhost:8080/api/doctors/delete/${id}`);
        console.log(res);
        dispatch({
            type:DELETE_DOCTOR,
            payload:id
        });
    }
};


    export const getDoctor=(id,history)=>async dispatch=>{
        const res=await axios.get(`http://localhost:8080/api/doctors/${id}`);
        dispatch({
            type:GET_DOCTOR,
            payload:res.data
        });
    };