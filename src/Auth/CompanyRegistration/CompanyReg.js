import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { Container, Row, Col } from "reactstrap";
import { postCompanyData } from "./../../Redux/Action/CompanyAction";
import { Back, InputFirst, InputS } from "./CompanyRegStyle.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ComapnyReg = ({history}) => {
  const notifyuser = () => toast.success("Success");
  const state = useSelector((state) => state.state);
  const dispatch = useDispatch();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (companydata) => dispatch(postCompanyData(companydata));

const signin=()=>{
    history.push('/login')
}

  return (
    <>
      <Container>
        <Back>
          <form onSubmit={handleSubmit(onSubmit)} className="form-data">
            <h5 className="top-head1">
              <div className="hover-effect">
                <ul className="options">
                  <li className="list-one"><b>Sign Up</b></li>
                  <li className="list1"  onClick={signin}><b>Sign In</b></li>
                </ul>
              </div>
            </h5>
            <Row>
              <Col md="5">
                <Row className="first">
                  <Col md="12">
                    <label for="Company name">company Name</label>

                    <InputFirst
                      placeholder="KeyMouseit"
                      type="text"
                      autoComplete="off"
                      {...register("companyName", {
                        required: true,
                        max: 3,
                      })}
                    />
                    <p className="para">
                      {errors.companyName && "Company Name is required*"}
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col md="12">
                    <label for="Web Address">Web Address</label>

                    <InputS
                      placeholder="KeyMouseit"
                      type="text"
                      autoComplete="off"
                      {...register("webAddress", {
                        required: true,
                        max: 3,
                      })}
                    />
                    <p className="para">
                      {errors.webAddress && "Web Address is required*"}
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col md="6">
                    <label for="contact">Conatct</label>

                    <InputS
                      type="text"
                      autoComplete="off"
                      {...register("contact", {
                        required: true,
                      })}
                    />
                    <p className="para">
                      {errors.contact && "Contact is required*"}
                    </p>
                  </Col>

                  <Col md="6">
                    <label for="email">Email</label>

                    <InputS
                      placeholder="KeyMouseit"
                      type="text"
                      autoComplete="off"
                      {...register("email", {
                        required: true,
                      })}
                    />
                    <div className="para">
                      <p>{errors.email && "Email is required"}</p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col md="6">
                    <label for="Address">Address</label>

                    <InputS
                      type="text"
                      autoComplete="off"
                      {...register("address", {
                        required: true,
                      })}
                    />
                    <p className="para">
                      {errors.address && "Please provide a valid Address*"}
                    </p>
                  </Col>

                  <Col md="6">
                    <label for="City">City</label>

                    <InputS
                      type="text"
                      autoComplete="off"
                      {...register("city", {
                        required: true,
                      })}
                    />
                    <p className="para">
                      {errors.city && "Provide a valid City"}
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col md="6">
                    <label for="State">State</label>

                    <InputS
                      type="text"
                      autoComplete="off"
                      {...register("state", {
                        required: true,
                      })}
                    />
                    <p className="para">
                      {errors.city && "Please provide a state*"}
                    </p>
                  </Col>

                  <Col md="6">
                    <label for="status">Country</label>
                    <select {...register("country")} className="select">
                      <option value="India">India</option>
                      <option value="Australia">Austrlia</option>
                      <option value="USA">USA</option>
                    </select>
                  </Col>
                </Row>

                <Row>
                  <Col md="6">
                    <label for="Password">Password</label>

                    <InputS
                      type="password"
                      autoComplete="off"
                      {...register("password", {
                        required: true,
                      })}
                    />
                    <p className="para">
                      {errors.password && "Password is required"}
                    </p>
                  </Col>

                  <Col md="6">
                    <label for="ConfirmPassword">Confirm password</label>

                    <InputS
                      type="password"
                      autoComplete="off"
                      {...register("confirmPassword", {
                        required: true,
                      })}
                    />
                    <p className="para">
                      {errors.password && "Password is required"}
                    </p>
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
                      })}
                    />
                    <label for="checkbox" className="checkbox-para">
                      I've Read agree with Terms of service and our privacy
                      policy
                    </label>
                    <p className="para">
                      {errors.checkbox && "You must agree before submitting."}
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <button className="btn-sub">
                      <div className="outer-icon">
                        <img
                          className="arrow-image"
                          src={
                            require("./../../Images/next_arrow@3x.png")
                              .default
                          }
                          alt="Header Img"
                          srcset=""
                        ></img>
                      </div>
                    </button>
                  </Col>
                </Row>
              </Col>

              <Col md="7">
                <img
                  src={
                    require("./../../Images/login_character.png")
                      .default
                  }
                  alt="Header Img"
                  srcset=""
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

export default ComapnyReg;