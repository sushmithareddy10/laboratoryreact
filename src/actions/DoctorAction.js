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
    console.log(res);
    dispatch({
        type: GET_DOCTORS,
        payload: res.data,
    });
};

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


    export const updateDoctor=(id,history)=>async dispatch=>{
        const res=await axios.put(`http://localhost:8080/api/doctors/${id}`);
        dispatch({
            type:GET_DOCTOR,
            payload:res.data
        });
    };