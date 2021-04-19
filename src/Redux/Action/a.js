import axios from "axios";
export const fetchInvoicesRequest = () => {
  return {
    type: "FETCH_INVOICES_REQUEST",
  };
};
export const fetchInvoicesSuccess = (allInvoices) => {
  console.log(allInvoices);
  return {
    type: "FETCH_INVOICES_SUCCESS",
    payload: allInvoices,
  };
};
export const fetchInvoicesFailure = (error) => {
  return {
    type: "FETCH_INVOICES_FAILURE",
    payload: error,
  };
};
const user_token = localStorage.getItem("user_token");
export const getAllInvoices = () => {
  console.log(user_token,"ut");
  return (dispatch) => {
    dispatch(fetchInvoicesRequest);
    axios.get("http://192.168.1.78:9000/invoice",{
        headers: {
        'Authorization': user_token
        }})
      .then(response =>{console.log(response,"res from pdf ")})
      .catch((error) => {
            console.log(error)
      });
  };
};