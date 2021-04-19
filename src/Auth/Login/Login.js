import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { Back, InputFirst, InputS } from "./LoginStyle";
import { postLoginData } from "./../../Redux/Action/LoginAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = ({ history }) => {
  const notifyUser = () => toast.success("Success");
  const state = useSelector((state) => state.state);
  const dispatch = useDispatch();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (logindata) => dispatch(postLoginData(logindata, history));
  const validateUser = () => {
    if (localStorage.getItem("user_token")) {
      history.push("/form");
    } else {
      alert("please check Your email/password");
    }
  };
  const signup = () => {
    history.push("/");
  };
  return (
    <>
      <Container>
        <Back>
          <form onSubmit={handleSubmit(onSubmit)} className="form-data">
            <h5 className="top-head">
              <div className="hover-effect">
                <ul className="options">
                  <li className="list1d" onClick={signup}>
                    Sign Up
                  </li>
                  <li className="listd">Sign In</li>
                </ul>
              </div>
            </h5>
            <Row>
              <Col md="5">
                <Row className="first">
                  <Col md="12">
                    <label for="Email">Email</label>
                    <InputFirst
                      placeholder="Enter your email"
                      className="first"
                      type="text"
                      {...register("email", {
                        required: true,
                      })}
                    />
                    <p className="para">
                      {errors.email && "Email is required*"}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <label for="password">Password</label>
                    <InputS
                      placeholder="password"
                      type="password"
                      {...register("password", {
                        required: true,
                        min: 8,
                      })}
                    />
                    <p className="para">
                      {errors.password && "Password is required*"}
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
export default Login;
