import React from "react";
import Reglogo from "../../Assets/Images/forgotimg.png";
import "../../styles/style.css";
import Darkbutton from "../../components/UI/Darkbutton";
import Textfield from "../../components/UI/Textfield";
import { Box,Grid,Typography,Link } from "@mui/material";




export default function Reset() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            md={4}
            style={{
              background: "#2F80ED",
              color: "white",
              width: "500",
              height: "932px",
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
              }}
            />
          </Grid>
          <Grid md={8} style={{ padding: "80px" }}>
          <Typography variant="h4" className="heading-content">
          Reset Password
            </Typography>
            <Typography variant="p" className="forgotsubheading-content">
            Please enter your new password. 
            </Typography>
            <Grid container spacing={2}>
              <Grid md={8} className="forgotfield">
              <Grid>
              <Textfield
                  lblname={"New Password"}
                  placeholder="Enter New Password"
                  className="regtextfield"
                />
              </Grid>
              <Grid mt={2}>
                 <Textfield
                  lblname={"Confirm Password"}
                  placeholder="Enter Confirm Password"
                  className="regtextfield"
                />
                 </Grid>
                 <Darkbutton
                  name="Send"
                  bgColor="#FF7F00"
                  className="reset-btn"
                  mb={4}
                />            

                <Typography variant="p" className='forgotfootertitle' sx={{ p: 4}} >@2020 All Rights Reserved. Engage Pulse Cookie Preferences, Privacy and Tearms</Typography>

              </Grid>
            </Grid>
           
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
