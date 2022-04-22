import { GET_person } from "./actiontypes";
import axios from "axios";
export const getpersons = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/getperson");
    dispatch({
      type: GET_person,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const addperson = (newperson) => async (dispatch) => {
  try {
    await axios.post("/api/addperson", newperson);
    dispatch(getpersons());
  } catch (error) {
    console.log(error);
  }
};

export const deleteperson = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/deleteperson/${id}`);
    dispatch(getpersons());
  } catch (error) {
    console.log(error);
  }
};

export const editperson = (contact, id) => async (dispatch) => {
  try {
    await axios.put(`/api/editperson/${id}`, contact);
    dispatch(getpersons());
  } catch (error) {
    console.log(error);
  }
};
