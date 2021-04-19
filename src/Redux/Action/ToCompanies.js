import axios from 'axios'
import { toast } from 'react-toastify'
export const fetchCompanyRequest = () => {

  return {
    type: 'FETCH_COMPANY_REQUEST'
  }
}

export const fetchCompanySuccess = to => {
  console.log(to)
  return {
    type: 'FETCH_COMPANY_SUCCESS',
    payload: to
  }
}

export const fetchCompanyFailure = error => {
  return {
    type: 'FETCH_COMPANY_FAILURE',
    payload: error
  }
}




export const CompanyData = () => {
  
  return (dispatch) => {
    dispatch(fetchCompanyRequest);
    axios.get("http://192.168.1.78:9000/org/alldetail")

      .then(response => {
       
        console.log(response,"========response from cId")
        dispatch(fetchCompanySuccess(response.data))
      })

      .catch(error => 
        {
        
          console.log('error===========', error.response);
        }
        
      )

  };
};
