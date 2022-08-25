import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Loginlogo from "/home/ashwini/Reactjs/demoapp/src/Assets/Images/Group_415.png";
import Typography from "@mui/material/Typography";
import Textfield from "../../components/UI/Textfield";
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "react-router-dom";
import Darkbutton from "../../components/UI/Darkbutton";
import "../../styles/style.css";
import { Formik } from "formik";
import * as Yup from "yup";

// src/components/UI/Darkbutton
import Checkbox from "@mui/material/Checkbox";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const validationSchema = Yup.object({
  email: Yup.string().email("Email is invalid").required("Required"),
  password: Yup.string().required("Required"),
});

export default function Login() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <form onSubmit={handleSubmit}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid
                item
                md={8}
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
                item
                md={4}
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
                  sx={{ width: "100%", background: "#fff", marginTop: "20px" }}
                >
                  <Stack spacing={2}>
                    <Textfield
                      lblname={"Email"}
                      name="email"
                      placeholder="Enter your email"
                      className="regtextfield"
                      onChange={handleChange}
                      value={values.email}
                    />
                    <Typography style={{ color: "red" }}>
                      {errors.email}
                    </Typography>
                    <Textfield
                      lblname={"Password"}
                      name="password"
                      placeholder="Enter your password"
                      className="regtextfield"
                      onChange={handleChange}
                      value={values.password}
                    />
                    <Typography style={{ color: "red" }}>
                      {errors.password}
                    </Typography>
                  </Stack>
                </Box>
                <Grid container spacing={2} columns={16}>
                  <Grid item xs={8}>
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
                  <Grid item xs={8} style={{ marginTop: "14px" }}>
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
        </form>
      )}
    </Formik>
  );
}
