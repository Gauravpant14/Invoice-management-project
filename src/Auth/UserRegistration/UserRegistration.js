import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { Back, InputFirst, InputS, PhoneInput } from "./UserRegistrationStyle";
import { postData } from "./../../Redux/Action/Action";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CompanyData } from './../../Redux/Action/ToCompanies'
import Select from 'react-select';

import { COUNTRY_CODE_LIST } from './../../Countries'



// import { CallingCodePicker } from 'rn-country-code-picker';
// import history from './../UserRegistration/UserRegistration'







const UserRegistration = ({ history }) => {
  const notify = () => toast.success("Success");
  const [org, setOrg] = useState([])
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  console.log(org)
  const onSubmit = (data) => {

    const body = {
      ...data,
      organizations: org.map(e => e.value)
    }
    dispatch(postData(body, history));
  };

  const signup = () => {
    console.log("signup");
  };

  const signin = () => {
    console.log("signin");
    history.push('./login')
  };

  const watchFields = watch(["firstName"]);
  console.log(history)



  useEffect(() => {
    dispatch(CompanyData());
    console.log(mapedData, "mapp data")

  }, [])


  const mapedData = state.companyId.to.map((e) =>
  ({
    'label': e.name,
    'value': e.id,
    'color': '#00B8D9'
  })
  )



  return (
    <>
      <Container>
        <Back>
          <form onSubmit={handleSubmit(onSubmit)} className="form-data">
            <h5 className="top-head">
              <div className="hover-effect">
                <ul className="options">
                  <li className="list1" onClick={signup}>
                    <b>Sign Up</b>
                  </li>
                  <li className="list1" onClick={signin}>
                    <b>Sign In</b>
                  </li>
                </ul>
              </div>
            </h5>
            <Row>
              <Col md="5">
                <Row className="first_input">
                  <Col md="6">
                    <label for="first_name">First Name</label>

                    <InputFirst
                      placeholder="First name"
                      autoComplete="off"
                      type="text"
                      {...register("firstName", {
                        required: true,
                      })}
                    />
                    <p className="para">
                      {errors.firstName && "First name is required*"}
                    </p>
                  </Col>

                  <Col md="6">
                    <label for="Last Name">Last Name</label>

                    <InputS
                      placeholder="Last Name"
                      autoComplete="off"
                      type="text"
                      {...register("lastName")}
                    />
                    {/* <p className="para">
                      {errors.lastName && "Last name is required"}
                    </p> */}
                  </Col>
                </Row>

                <Row>








                  {/* <Controller
                      as={Select}
                      name="organizations"
                      
                      options={e.value}
                      isMulti
                      control={control}
                      render={(p) => {
                        const { ref, onChange, value } = p.field
                        return (
                          <Select
                          
                            inputRef={ref}
                            classNamePrefix="addl-class"
                            options={e.value}
                            isMulti
                            value={e.value.find(c => c.value === value)}
                            onChange={val => { setOrg(val) }}

                          />
                        )
                      }}
                    /> */}









                  <Col md="4">
                    <label for="Cotact">Country code</label>

                    <select className="country-code" >
                      {COUNTRY_CODE_LIST.map(e => (
                        <option>{e.value}</option>
                      ))}
                    </select>


                  </Col>
                  <Col md="8">
                    <label for="Cotact">Contact</label>



                    {/* 
{COUNTRY_LIST.map(e => (
    <div>
      {e.dialCode}
    </div>)
  )} */}





                    <InputS
                      placeholder="contact number"
                      autoComplete="off"
                      type="number"
                      {...register("mobile",

                        {
                          required: true,
                          maxLength: 10,
                          pattern: {

                            // value:/^[0-9]{1,10}$/,
                            //   message: "invalid number",
                          },
                        })}
                    />
                    {/* {errors.mobile && <p className="error">{errors.mobile.message}</p>} */}

                  </Col>





                </Row>

                <Row>
                  <Col md="12">
                    <label for="Email">Email</label>

                    <InputS
                      placeholder="abc@example.com"
                      type="email"
                      autoComplete="off"
                      {...register("email", {
                        required: "enter your email",

                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Enter a valid e-mail address",
                        },

                      })}
                    />
                    {errors.email && <p className="error">{errors.email.message}</p>}

                    {/* <p className="para">
                      {" "}
                      {errors.email && "Email is required*"}
                    </p> */}
                  </Col>
                </Row>

                <Row>
                  <Col md="6">
                    <label for="Password">Password</label>

                    <InputS
                      placeholder="password"
                      type="password"
                      autoComplete="off"
                      {...register("password", {
                        required: true,
                      })}
                    />


                    <p className="para">
                      {" "}
                      {errors.password && "Password is required*"}
                    </p>
                  </Col>

                  <Col md="6">
                    <label for="ConfirmPassword">Confirm password</label>

                    <InputS
                      placeholder="confirm password"
                      type="password"
                      autoComplete="off"
                      {...register("confirmPassword", {
                        required: true,
                      })}
                    />
                    <p className="para">
                      {errors.password && "Password is required*"}
                    </p>
                  </Col>
                </Row>

                {/* <Row>
                  <Col md="12">
                    <label for="Cotact">Address</label>

                    <InputS
                      placeholder="KeyMouseit"
                      autoComplete="off"
                      type="text"
                      {...register("address", {
                        required: true,
                        max: 3,
                      })}
                    />
                    <p className="para">
                      {errors.address && "Please provide a valid Address*"}
                    </p>
                  </Col>
                </Row> */}

                <Row>
                  <Col md="12">
                    {/* <label for="status">Organization</label>
                                        <select {...register("organizations")} className="select">
                
                {state.companyId.to.map((e) => 
                 <option value={e.id}>{e.name}</option>
                 )}


                    
               </select>  */}


                    <label for="Organizations">Organizations</label>

                    <Controller
                      as={Select}
                      name="organizations"
                      options={mapedData}
                      isMulti
                      control={control}
                      render={(p) => {
                        const { ref, onChange, value } = p.field
                        return (
                          <Select
                            inputRef={ref}
                            classNamePrefix="addl-class"
                            options={mapedData}
                            isMulti
                            value={mapedData.find(c => c.value === value)}
                            onChange={val => { setOrg(val) }}

                          />
                        )
                      }}
                    />

                    {/* <Select
                                                isMulti
                                                name="colors"
                                                options={mapedData}
                                                className="basic-multi-select"
                                                classNamePrefix="select"
                                               
                                            /> */}






                  </Col>
                </Row>

                <Row>
                  <Col>
                    <InputS
                      type="checkbox"
                      autoComplete="off"
                      className="checkbox-para"
                      {...register("checkbox", {
                        required: true,
                        max: 3,
                      })}
                    />

                    <label for="checkbox" className="checkbox-para">
                      I've Read agree with Terms of service and our privacy
                      policy
                    </label>
                    <p className="para">
                      {errors.checkbox && " You must agree before submitting."}
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <button className="btn-sub" >
                      <div className="outer-icon">
                        <img
                          className="arrow-image"
                          src={
                            require("./../../Images/next_arrow@3x.png").default
                          }
                          alt="Header Img"
                        ></img>
                      </div>
                    </button>
                  </Col>
                </Row>
              </Col>

              <Col md="7">
                <img
                  src={require("../../Images/login_character.png").default}
                  alt="Header Img"
                ></img>
              </Col>
            </Row>
          </form>
        </Back>
      </Container>
      <ToastContainer />
    </>
  );
};

export default UserRegistration;
