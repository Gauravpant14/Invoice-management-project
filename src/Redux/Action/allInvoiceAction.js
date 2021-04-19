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




export const getAllInvoices = () => {
  const user_token = localStorage.getItem("user_token");
  console.log(user_token,"ut");
  return (dispatch) => {
   
    dispatch(fetchInvoicesRequest);
   
    axios.get("http://192.168.1.78:9000/invoice",{
        headers: {
        'Authorization': user_token
        }})
      .then(response =>{
        const result = response.data.results
        dispatch(fetchInvoicesSuccess(result))
      })
      .catch((error) => {
      
            console.log(error)
       
      });
  };
};

// export const CompanyData = () => {
  
//   return (dispatch) => {
//     dispatch(fetchCompanyRequest);
//     axios.get("http://192.168.1.82:9000/org/alldetail")

//       .then(response => {
       
//         console.log(response,"========response from cId")
//         dispatch(fetchCompanySuccess(response.data))
//       })

//       .catch(error => 
//         {
        
//           console.log('error===========', error.response);
//         }
        
//       )

//   };
// };
