import axios from "axios";
import { toast } from "react-toastify";
import { postLoginData } from "./LoginAction";
// const baseUrl=require("../../Constants/Api")
// const z=baseUrl.API_BASE_URL
import { API_BASE_URL } from './../../Constants/Api'

export const fetchUsersRequest = () => {
  return {
    type: "FETCH_USERS_REQUEST",
  };
};

export const fetchUsersSuccess = (data) => {
  console.log(data);
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: data,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: "FETCH_USERS_FAILURE",
    payload: error,
  };
};

export const postData = (data, history) => {
  console.log("form data ===>", data);
  // const org = []
  // org.push(data.organizations);

  // localStorage.setItem("selected_org", JSON.stringify(org))



  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .post(`${API_BASE_URL}user/register`, data)

      .then((response) => {
        console.log(response, "response in registration page............")
        if (response?.data?._id) {

          toast.success("Successfully Registered!");


          const loginData = { email: data.email, password: data.password }

          dispatch(postLoginData(loginData, history))

          setTimeout(() => {
            history.push('/form', {
              userData: data
            })
          }, 1000);

        }
        console.log(response, "========response");
      })

      .catch((error) => {
        if (error?.response?.data?.password) {
          toast.error(error?.response?.data?.password);
        }
        toast.error(error.response.data.name);
        toast.error(error.response.data.detail);
        toast.error(error.response.data.email);
        toast.error(error.response.data.mobile);
        console.log("error===========", error.response);
      });
  };
};
