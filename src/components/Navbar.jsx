import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Darkbutton from "./UI/Darkbutton";
import Logo from "../Assets/Images/Vector.png";
import { Link } from "react-router-dom";
// import { Logout } from "../Redux/action/";
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ background: "#242F3A" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 8 }}
          >
            <img src={Logo} alt="Openxcell" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>

          <Link className="nav-link" to="/" style={{ textDecoration: "none" }}>
            <Darkbutton name="Log in" BorderColor="2px solid #fff" mx={"8px"} />
          </Link>
          <Link
            className="nav-link"
            to="/register"
            style={{ textDecoration: "none" }}
          >
            <Darkbutton name="Register" bgColor="#FF7F00" />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
