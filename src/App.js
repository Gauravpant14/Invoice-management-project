import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import ComapnyReg from './Auth/CompanyRegistration/CompanyReg'
import UserRegistration from './Auth/UserRegistration/UserRegistration'
import Login from './Auth/Login/Login'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Result from './Components/Result'
import DownloadPage from './Components/DownloadPage';
import ViewInvoice from './Components/ViewInvoice';


function App() {
  return (
    <div className="App">

      {/* <UserReg /> */}
      
      

      
  

      <Router>
        <Switch>
        {/* <Login /> */}
          <Route exact path="/" component={UserRegistration}  />
          <Route exact path="/login" component={Login}  />
         
         
          { localStorage.getItem('user_token') ? <Route exact path="/form" component={Form} /> : <Redirect to="/"/> }
         
          {/* <Route exact path="/form" component={Form} /> */}
          <Route exact path="/company" component={ComapnyReg}  />
          <Route exact path="/download" component={DownloadPage}  />
          <Route exact path="/view_invoice" component={ViewInvoice}  />
          {/* <UserRegistration /> */}
      <ComapnyReg />
      <Form />

        </Switch>
      </Router>
     
    

   
    </div>
  );
}

export default App;
