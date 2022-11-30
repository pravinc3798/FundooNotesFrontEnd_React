import React from "react";
import "./AppBar.css";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

import RefreshIcon from "@mui/icons-material/Refresh";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function AppBar() {
  return (
    <div className="ABcontainer">
      <div className="ABlogo">
        <IconButton>
          <MenuOutlinedIcon />
        </IconButton>
        <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" />
        <p>Notes</p>
      </div>
      <div className="ABsearch">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "40rem",
            backgroundColor: "#f1f3f4",
            borderRadius: "8px",
          }}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="clear">
            <ClearIcon />
          </IconButton>
        </Paper>
      </div>
      <div className="threeIcons">
        <IconButton>
          <RefreshIcon />
        </IconButton>
        <IconButton>
          <ViewStreamIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
      </div>
      <div className="twoIcons">
        <IconButton>
          <AppsRoundedIcon />
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </div>
    </div>
  );
}
