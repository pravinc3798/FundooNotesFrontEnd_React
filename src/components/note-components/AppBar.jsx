import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import RefreshIcon from "@mui/icons-material/Refresh";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useDispatch, useSelector } from "react-redux";
import { MiniDrawerOpenClose } from "../../redux/Actions";

export default function NewAppBar(props) {
  const MiniDrawerPane = useSelector((state) => state.MiniDrawerPane);
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: "white", boxShadow:'none', border:'1px solid lightgray'}}>
        <Toolbar>
          <IconButton
            sx={{ mr: 2 }}
            onClick={() => dispatch(MiniDrawerOpenClose())}
          >
            <MenuIcon />
          </IconButton>
          <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" />
          <Typography
            variant="h6"
            noWrap
            component="div"
            color={"black"}
            sx={{ display: { xs: "none", sm: "block" }, marginLeft: "1vw" }}
          >
            {MiniDrawerPane}
          </Typography>

          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              width: "50vw",
              marginLeft: "5vw",
              backgroundColor: "#f1f3f4",
              borderRadius: "8px",
            }}
          >
            <IconButton size="small" type="button" sx={{ p: "10px" }}>
              <SearchIcon fontSize="small" />
            </IconButton>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
            <IconButton size="small" type="button" sx={{ p: "10px" }}>
              <ClearIcon fontSize="small" />
            </IconButton>
          </Paper>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box style={{ display: "flex", gap: "5vw" }}>
              <Box
                className="threeIcons"
                style={{ display: "flex", gap: "1vw" }}
              >
                <IconButton size="medium">
                  <RefreshIcon fontSize="medium" />
                </IconButton>
                <IconButton size="medium">
                  <ViewStreamIcon fontSize="medium" />
                </IconButton>
                <IconButton size="medium">
                  <SettingsOutlinedIcon fontSize="medium" />
                </IconButton>
              </Box>
              <Box className="twoIcons" style={{ display: "flex", gap: "1vw" }}>
                <IconButton size="medium">
                  <AppsRoundedIcon fontSize="medium" />
                </IconButton>
                <IconButton size="medium">
                  <AccountCircleIcon fontSize="medium" />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" color="black">
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
