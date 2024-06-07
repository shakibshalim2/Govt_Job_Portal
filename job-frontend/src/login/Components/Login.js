import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import classes from "./Register.module.css";
import Config from "../../config/Config.json";
import JobCards from "./jobView";


const Login = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [backendErrors, setBackendErrors] = useState({
    show: false,
    message: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = Config.TITLE.LOGIN;
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      setBackendErrors({ show: false, message: "" });
      axios
        .post("http://localhost:8080/auth/login", inputs)
        .then((res) => {
          const token = res.data.token;
          dispatch({
            type: "SETAUTHTOKEN",
            data: token,
          });
        })
        .catch((err) => {
          const statusCode = err.message.split(" ").pop();
          if (statusCode === "401" || "422") {
            setBackendErrors({
              show: true,
              message: "Incorrect Email or Password",
            });
          } else {
            setBackendErrors({
              show: true,
              message: "Some error...on our side...",
            });
          }
        });
    }
  };

  const validate = () => {
    let isValid = true;
    let error = {};

    if (!inputs["email"]) {
      isValid = false;
      error["email"] = "Please enter your email Address.";
    }

    if (typeof inputs["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(inputs["email"])) {
        isValid = false;
        error["email"] = "Please enter valid email address.";
      }
    }

    if (!inputs["password"]) {
      isValid = false;
      error["password"] = "Please enter your password.";
    }

    if (typeof inputs["password"] !== "undefined") {
      if (inputs["password"].length < 6) {
        isValid = false;
        error["password"] = "Please add at least 6 character.";
      }
    }

    setErrors(error);

    return isValid;
  };

  return (
    <React.Fragment>
      <Header />
      <Container className="mt-5 ">

        <Row className="mb-5">
        <Col lg={5}
            md={6}
            sm={12}>
               <img src="/images/image.png"  alt="" style={{ width: '100%', height: 'auto' }} />
          </Col>
          <Col
            lg={5}
            md={6}
            sm={12}
            className={`${classes.formContainer} p-5 m-auto shadow-sm rounded-lg`}>
        <h1 className="p-3 text-center rounded" style={{ color: "#2c49ed" }}>Login</h1>
            {backendErrors.show && (
              <div className="login-error">{backendErrors.message}</div>
              
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  Email <span style={{ color: "red" }}> *</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={inputs.email}
                  onChange={handleChange}
                />

                <p style={{ color: "red" }}> {errors.email} </p>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  Password <span style={{ color: "red" }}> *</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={inputs.password}
                  onChange={handleChange}
                />
                <p style={{ color: "red" }}> {errors.password} </p>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  className="mt-4 mb-2"
                >
                  Log-In
                </Button>
              </div>
              <Col lg={5} md={6} sm={12}>
                <Link style={{ textDecoration: "none" }} to="/Reset">
                  {" "}
                  Forgot Password?{" "}
                </Link>
              </Col>
              <div>
                <Row>
                  <Col lg={5} md={6} sm={12}>
                    <Form.Label className="mt-5">
                      Don't have an account?{" "}
                    </Form.Label>
                  </Col>
                  <Col
                    lg={5}
                    md={6}
                    sm={12}
                    className=" mt-5  d-flex justify-content-center"
                  >
                    <Link to="/Register">
                      <Button
                        variant="success"
                        size="lg"
                      >
                        {" "}
                        Sign-up{" "}
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <JobCards />
    </React.Fragment>
  );
};

export default Login;
