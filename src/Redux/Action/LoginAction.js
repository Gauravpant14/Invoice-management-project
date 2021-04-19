import axios from 'axios'
import { Login_URL } from './../../Constants/Api'
import { toast } from "react-toastify";
export const fetchLoginRequest = () => {

    return {
        type: 'FETCH_LOGIN_REQUEST'
    }
}

export const fetchLoginSuccess = (logindata) => {
    console.log(logindata, "loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")
    return {
        type: 'FETCH_LOGIN_SUCCESS',
        payload: logindata 
    }
}

export const fetchLoginFailure = error => {
    return {
        type: 'FETCH_LOGIN_FAILURE',
        payload: error
    }
}




export const postLoginData = (logindata, history) => {
    console.log("form logindata ===>", logindata)
    return async (dispatch) => {
        dispatch(fetchLoginRequest);
        try {
            const x = await axios.post("http://192.168.1.78:9000/user/login", logindata)
            console.log(x.data.token,"token is from login ")
            console.log(x,"loginnnnnnnn")
            const token = x.data.token
            localStorage.setItem("user_token", token);
            localStorage.setItem("selected_company",JSON.stringify(x.data.companies))
            fetchLoginSuccess({
                'token': x.data.token,
                'companies': x.data.companies
            })
            history.push('/form')
        }

        catch (err) {
            toast.error(err.response.data.password);
            toast.error(err.response.data.email);
            toast.error(err.response.data.Detail);
            console.log(err.response.data);
            console.log("error", err);
          }
        };
      };
      

