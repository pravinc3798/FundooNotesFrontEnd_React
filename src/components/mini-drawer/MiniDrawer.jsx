import * as React from "react";

import { styled, useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { MiniDrawerPaneSelection } from "../../redux/Actions";

import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  border: 0,
  marginTop: 65,
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  border: 0,
  marginTop: 65,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer(props) {
  const MiniDrawerOpen = useSelector((state) => state.MiniDrawerOpen);
  const dispatch = useDispatch();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={MiniDrawerOpen}>
        <List>
          {[
            { name: "Notes", icon: <LightbulbOutlinedIcon /> },
            { name: "Reminders", icon: <NotificationsNoneOutlinedIcon /> },
            { name: "Edit labels", icon: <EditOutlinedIcon /> },
            { name: "Archive", icon: <ArchiveOutlinedIcon /> },
            { name: "Bin", icon: <DeleteOutlineOutlinedIcon /> },
          ].map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ display: "block", marginLeft: "1.65rem" }}
              onClick={() => dispatch(MiniDrawerPaneSelection(item.name))}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
