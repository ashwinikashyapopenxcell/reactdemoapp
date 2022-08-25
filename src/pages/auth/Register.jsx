import React from "react";
import { InputLabel } from "@mui/material";
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

export default function Register() {
  const [value, setValue] = React.useState(null);
  const [termsvalue, setTermsValue] = React.useState("female");
  const [passwordvalues, setPasswordValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setPasswordValues({ ...passwordvalues, [prop]: event.target.value });
  };

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
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    // username: Yup.string()
    //   .required("Username is required")
    //   .min(6, "Username must be at least 6 characters")
    //   .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phone_number: Yup.string().required("Phone is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    // acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container>
            <Grid
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
            <Grid md={8} style={{ padding: "80px" }}>
              <Typography variant="h4" className="heading-content">
                Create your account
              </Typography>
              <Typography variant="p" className="subheading-content">
                We need some details to setup your account
              </Typography>
              <Grid container spacing={2}>
                <Grid xs={4}>
                  <img src={Userimage} className="userimg" />
                </Grid>
                <Grid xs={8}>
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
                <Grid md={6} pt={2} sx={{ border: 0 }}>
                  <Textfield
                    lblname={"First Name*"}
                    placeholder="Enter your First Name"
                    className="regtextfield"
                    name="first_name"
                    onChange={formik.handleChange}
                    value={formik.values.first_name}
                    component="input"
                  />
                  <div className="text-danger">
                    {formik.errors.first_name ? formik.errors.first_name : null}
                  </div>
                </Grid>

                <Grid md={6} pt={2}>
                  <Textfield
                    lblname={"Last Name*"}
                    placeholder="Enter your Last Name"
                    className="regtextfield"
                    name="last_name"
                    onChange={formik.handleChange}
                    value={formik.values.last_name}
                    component="input"
                  />
                  <div className="text-danger">
                    {formik.errors.last_name ? formik.errors.last_name : null}
                  </div>
                </Grid>

                <Grid md={6} pt={2}>
                  <Textfield
                    lblname={"Email*"}
                    placeholder="Enter your email"
                    className="regtextfield"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    component="input"
                  />
                  <div className="text-danger">
                    {formik.errors.email ? formik.errors.email : null}
                  </div>
                </Grid>

                <Grid md={6} pt={2}>
                  <Textfield
                    lblname={"Phone Number*"}
                    placeholder="Enter your phone number"
                    className="regtextfield"
                    name="phone_number"
                    onChange={formik.handleChange}
                    value={formik.values.phone_number}
                    component="input"
                  />
                  <div className="text-danger">
                    {formik.errors.phone_number
                      ? formik.errors.phone_number
                      : null}
                  </div>
                </Grid>
                <Grid md={6} pt={2}>
                  <Textfield
                    name="password"
                    lblname={"Password*"}
                    value={formik.values.password}
                    placeholder="Enter your Password"
                    type={passwordvalues.showPassword ? "text" : "password"}
                    onChange={handleChange("password")}
                    className="regtextfield"
                    component="input"
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
                  <div className="text-danger">
                    {formik.errors.password ? formik.errors.password : null}
                  </div>
                </Grid>

                <Grid md={6} pt={2}>
                  <Textfield
                    lblname={"Confirm Password*"}
                    placeholder="Enter your Confirm Password"
                    className="regtextfield"
                    name="confirmPassword"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    component="input"
                  />
                  <div className="text-danger">
                    {formik.errors.confirmPassword
                      ? formik.errors.confirmPassword
                      : null}
                  </div>
                </Grid>
                <Grid md={6} pt={2}>
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
                <Grid md={6} pt={2}>
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
                <Grid md={6} pt={2}>
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
                <Grid md={6} pt={2}></Grid>
                <Grid md={6} pt={2}>
                  <Darkbutton
                    name="Register"
                    bgColor="#FF7F00"
                    className="register-btn"
                    type="submit"
                  />
                </Grid>
                <Grid md={6} pt={4}>
                  <Typography variant="p" className="regfooter">
                    @2020 All Rights Reserved. Engage Pulse Cookie Preferences,
                    Privacy and Tearms
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
