import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Loginlogo from "/home/ashwini/Reactjs/demoapp/src/Assets/Images/Group_415.png";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "react-router-dom";
import Darkbutton from "../../components/UI/Darkbutton";
import "../../styles/style.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthenticateData } from "../../Redux/action/action";
import * as Yup from "yup";

// src/components/UI/Darkbutton
import Checkbox from "@mui/material/Checkbox";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const { loginuser } = useSelector((state) => state);
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email is invalid").required("Required"),
    password: Yup.string()
      .min(6, "Password minimum length should be 6")
      .required("Required"),
  });

  const onSubmit = (values, props) => {
    dispatch(AuthenticateData(values));
  };
  useEffect(() => {
    if (loginuser) {
      console.log(loginuser);

      navigate("/newhome");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginuser]);
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container>
                <Grid
                  md={8}
                  item={true}
                  style={{
                    background: "#2F80ED",
                    color: "red",
                    width: "500",
                    height: "916px",
                  }}
                >
                  <img
                    src={Loginlogo}
                    alt="logo"
                    style={{
                      textAlign: "center",
                      display: "block",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "auto",
                      paddingTop: "214px",
                      width: "70%",
                    }}
                  />
                </Grid>
                <Grid
                  md={4}
                  item={true}
                  style={{
                    background: "#FFFFFF",
                    color: "",
                    width: "500",
                    height: "916px",
                    paddingInline: "150px",
                  }}
                >
                  <h1 style={{ marginTop: "80px", color: "#1D1C1D" }}>
                    Welcome Back!
                  </h1>
                  <Typography
                    variant="h6"
                    className="title"
                    style={{
                      color: "#8F9BB3",
                      fontSize: "20px",
                      fontWeight: "400",
                      marginTop: "-10px",
                    }}
                  >
                    Login to yout account
                  </Typography>
                  <Box
                    sx={{
                      width: "100%",
                      background: "#fff",
                      marginTop: "20px",
                    }}
                  >
                    <Stack spacing={2}>
                      <label className="loginlbl">Email</label>
                      <Field
                        as={TextField}
                        lblname={"Email"}
                        name="email"
                        variant="outlined"
                        placeholder="Enter your email"
                        className="logintextfield"
                        sx={{
                          "& fieldset": { border: "none" },
                        }}
                        // helperText={<ErrorMessage name="email" />}
                      />
                      <Typography style={{ color: "red" }}>
                        <ErrorMessage name="email" />
                      </Typography>
                      <label className="loginlbl">Password</label>
                      <Field
                        as={TextField}
                        lblname={"Password"}
                        name="password"
                        variant="outlined"
                        sx={{
                          "& fieldset": { border: "none" },
                        }}
                        placeholder="Enter your password"
                        className="logintextfield"
                      />
                      <Typography style={{ color: "red" }}>
                        <ErrorMessage name="password" />
                      </Typography>
                    </Stack>
                  </Box>
                  <Grid container spacing={2} columns={16}>
                    <Grid xs={8} item={true}>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label={
                            <Typography
                              color="#FF7F00"
                              style={{ fontSize: "13px" }}
                            >
                              Remember Me
                            </Typography>
                          }
                        />
                      </FormGroup>
                    </Grid>
                    <Grid xs={8} style={{ marginTop: "14px" }} item={true}>
                      <Link
                        underline="none"
                        to="/forgot"
                        style={{
                          color: "#FF7F00",
                          fontSize: "13px",
                          display: "flex",
                          justifyContent: "end",
                          alignItems: "end",
                          textDecoration: "none",
                        }}
                      >
                        Forgot Password?
                      </Link>
                    </Grid>
                  </Grid>
                  <Darkbutton
                    name="Login"
                    bgColor="#FF7F00"
                    className="register-btn"
                    type="submit"
                  />
                  <Typography variant="p" className="footertitle" sx={{ p: 4 }}>
                    @2020 All Rights Reserved. Engage Pulse Cookie Preferences,
                    Privacy and Tearms
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Login;
