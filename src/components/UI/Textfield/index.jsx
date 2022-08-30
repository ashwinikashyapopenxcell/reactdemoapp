import { TextField, InputLabel } from "@mui/material";
import React from "react";

export default function index({ placeholder, lblname, ...rest }) {
  // const TEXTFIELDCSS = {
  //   // "& .MuiFilledInput-underline:before": {
  //   //   borderBottom: "none",
  //   // },
  //   // "& .MuiFilledInput-underline:after": {
  //   //   borderBottom: "none",
  //   // },
  //   // "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before": {
  //   //   borderBottom: "none",
  //   // },
  // };

  return (
    <>
      <InputLabel
        htmlFor="input-with-icon-adornment"
        style={{ color: "#1D1C1D" }}
      >
        {lblname}
      </InputLabel>
      <TextField
        sx={{
          "& .MuiOutlinedInput-root": {
            "& > fieldset": {
              border: "none",
            },
            "& .css-1umgy1k-MuiFormControl-root-MuiTextField-root": {
              border: "1px solid yellow",
              // borderColor: 'yellow', // - Set the Input border when parent has :hover
            },
          },
        }}
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
}
