import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link to="/dashboard">
          <Button  style={{color:"white",backgroundColor:"blue"}}>Dashboard</Button>
          </Link>
          <Link to="/Register" style={{    marginRight: "55%"}}>
          <Button  style={{color:"white",backgroundColor:"blue"}}>Register User</Button>
          </Link>
          <Link to="/login">
            <Button style={{ color: "red", backgroundColor: "yellow" }}>
              Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
