import axios from "axios";
import { toast } from "react-toastify";
export const fetchCompanyRequest = () => {
  return {
    type: "FETCH_COMPANY_REQUEST",
  };
};

export const fetchCompanySuccess = (companydata) => {
  console.log(companydata);
  return {
    type: "FETCH_COMPANY_SUCCESS",
    payload: companydata,
  };
};

export const fetchCompanyFailure = (error) => {
  return {
    type: "FETCH_COMPANY_FAILURE",
    payload: error,
  };
};

export const postCompanyData = (companydata) => {
  console.log("form companydata ===>", companydata);
  return (dispatch) => {
    dispatch(fetchCompanyRequest);
    axios
      .post("http://192.168.1.78:9000/org/register", companydata)

      .then((response) => {
        if (response?.status === 200) {
          toast.success("Successfully Registered");
        }
        console.log(response, "========response");
      })

      .catch((error) => {
        if (error?.response?.companydata?.password) {
          toast.error(error?.response?.companydata?.password);
        }
        toast.error(error.response.data.name);
        toast.error(error.response.data.detail);
        toast.error(error.response.data.email);
        toast.error(error.response.data.password);
        console.log("error===========", error.response);
      });
  };
};