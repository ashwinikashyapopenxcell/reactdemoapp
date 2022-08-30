import React, { useState } from "react";
import { InputLabel, Alert } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Userimage from "../../Assets/Images/Userimage.png";
import Button from "@mui/material/Button";
import Textfield from "../../components/UI/Textfield";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Darkbutton from "../../components/UI/Darkbutton";
import "../../styles/style.css";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Reglogo from "../../Assets/Images/regimg.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { SaveRegisterData } from "../../Redux/action/action";
// import { useSelector } from "react-redux";

export default function Register() {
  const [value, setValue] = React.useState(null);
  const [messages, setMessages] = useState(false);
  const [termsvalue, setTermsValue] = React.useState("female");
  const [passwordvalues, setPasswordValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setPasswordValues({
      ...passwordvalues,
      showPassword: !passwordvalues.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function handleClick(event) {
    if (event.target.value === termsvalue) {
      setTermsValue("");
    } else {
      setTermsValue(event.target.value);
    }
  }

  const validationSchema = Yup.object().shape({
    first_name: Yup.string()
      .required("First name is required")
      .min(2, "atleast two character required"),
    last_name: Yup.string()
      .required("Last name is required")
      .min(2, "atleast two character required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phone_number: Yup.string()
      .required("This field is Required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      ),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
  });

  const onRegisterSubmit = () => {
    dispatch(
      SaveRegisterData({
        first_name: formik.values.first_name,
        last_name: formik.values.last_name,
        email: formik.values.email,
        phone_number: formik.values.phone_number,
        password: formik.values.password,
        confirmPassword: formik.values.confirmPassword,
      })
    );

    setMessages(true);
    setTimeout(function () {
      window.location.href = "http://localhost:3000";
    }, 5000);
  };
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: onRegisterSubmit,
  });
  const dispatch = useDispatch();

  // const registerUser = useSelector((state) => state.users);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container>
            <Grid
              item={true}
              md={4}
              style={{
                background: "#2F80ED",
                color: "white",
                width: "500",
                height: "916px",
              }}
            >
              <Typography
                variant="h3"
                style={{ padding: "80px" }}
                className="regmaincontent"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
              <img
                src={Reglogo}
                alt="logo"
                style={{
                  textAlign: "center",
                  display: "block",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "auto",
                  width: "70%",
                  paddingTop: "140px",
                }}
              />
            </Grid>

            <Grid md={8} style={{ padding: "80px" }} item={true}>
              {messages && (
                <Alert severity="success" style={{ marginTop: "-50px" }}>
                  Success — Your account is register sucessfully!
                </Alert>
              )}
              <Typography variant="h4" className="heading-content">
                Create your account
              </Typography>
              <Typography variant="p" className="subheading-content">
                We need some details to setup your account
              </Typography>
              <Grid container spacing={2} item={true}>
                <Grid xs={4} item={true}>
                  <img src={Userimage} className="userimg" alt="userimg" />
                </Grid>
                <Grid xs={8} item={true}>
                  <Button variant="outlined" className="uploadbtn">
                    Upload Image
                  </Button>
                </Grid>
              </Grid>

              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                style={{ paddingTop: "130px" }}
              >
                <Grid md={6} pt={2} sx={{ border: 0 }} item={true}>
                  <Textfield
                    lblname={"First Name*"}
                    placeholder="Enter your First Name"
                    className="regtextfield"
                    name="first_name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.first_name && formik.touched.first_name && (
                    <p className="text-danger">{formik.errors.first_name}</p>
                  )}
                </Grid>

                <Grid md={6} pt={2} item={true}>
                  <Textfield
                    lblname={"Last Name*"}
                    placeholder="Enter your Last Name"
                    className="regtextfield"
                    name="last_name"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.last_name && formik.touched.last_name && (
                    <p className="text-danger">{formik.errors.last_name}</p>
                  )}
                </Grid>

                <Grid md={6} pt={2} item={true}>
                  <Textfield
                    lblname={"Email*"}
                    placeholder="Enter your email"
                    className="regtextfield"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <p className="text-danger">{formik.errors.email}</p>
                  )}
                </Grid>

                <Grid md={6} pt={2} item={true}>
                  <Textfield
                    lblname={"Phone Number*"}
                    placeholder="Enter your phone number"
                    className="regtextfield"
                    name="phone_number"
                    value={formik.values.phone_number}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.phone_number &&
                    formik.touched.phone_number && (
                      <p className="text-danger">
                        {formik.errors.phone_number}
                      </p>
                    )}
                </Grid>
                <Grid md={6} pt={2} item={true}>
                  <Textfield
                    name="password"
                    lblname={"Password*"}
                    placeholder="Enter your Password"
                    type={passwordvalues.showPassword ? "text" : "password"}
                    // onChange={handleChange("password")}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    className="regtextfield"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {passwordvalues.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  {formik.errors.password && formik.touched.password && (
                    <p className="text-danger">{formik.errors.password}</p>
                  )}
                </Grid>

                <Grid md={6} pt={2} item={true}>
                  <Textfield
                    lblname={"Confirm Password*"}
                    placeholder="Enter your Confirm Password"
                    className="regtextfield"
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.confirmPassword &&
                    formik.touched.confirmPassword && (
                      <p className="text-danger">
                        {formik.errors.confirmPassword}
                      </p>
                    )}
                </Grid>
                <Grid md={6} pt={2} item={true}>
                  {/* <Textfield
                  lblname={"DOB"}
                  placeholder="Enter your Confirm Password"
                  className="regtextfield"
                /> */}
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <InputLabel
                      htmlFor="input-with-icon-adornment"
                      style={{ color: "#1D1C1D" }}
                    >
                      Date of Birth*
                    </InputLabel>

                    <DatePicker
                      lblname={"Confirm Password"}
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} className="regtextfield" />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid md={6} pt={2} item={true}>
                  <FormLabel
                    id="demo-row-radio-buttons-group-label"
                    style={{ color: "#1D1C1D" }}
                  >
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    lblname={"DOB"}
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                      name="gender"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                      name="gender"
                    />
                  </RadioGroup>
                </Grid>
                <Grid md={6} pt={2} item={true}>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={termsvalue}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio onClick={handleClick} />}
                      label="I agree to the tearms of services"
                    />
                  </RadioGroup>
                </Grid>
                <Grid md={6} pt={2} item={true}></Grid>
                <Grid md={6} pt={2} item={true}>
                  <Darkbutton
                    name="Register"
                    bgColor="#FF7F00"
                    className="register-btn"
                    type="submit"
                  />
                </Grid>
                <Grid md={6} pt={4} item={true}>
                  <Typography variant="p" className="regfooter">
                    @2020 All Rights Reserved. Engage Pulse Cookie Preferences,
                    Privacy and Tearms
                    {/* {registerUser.map((register_user) => (
                      <div key={register_user.fname}>
                        {" "}
                        {register_user.fname}{" "}
                      </div>
                    ))} */}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* main grid end */}
          </Grid>
        </form>
      </Box>
    </div>
  );
}
