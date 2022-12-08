import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { ApiSensor } from "../../redux/Actions";

export default function ColorPopper(props) {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const colors = [
    "rgb(46, 204, 113)",
    "rgb(175, 122, 197)",
    "rgb(241, 148, 138)",
    "rgb(163, 228, 215)",
    "rgb(245, 183, 177)",
    "rgb(245, 176, 65)",
    "rgb(170, 183, 184)",
    'rgb(255, 153, 204)',
    'rgb(255, 255, 153)',
    'rgb(204, 255, 204)',
    'rgb(204, 255, 255)',
    'rgb(255, 204, 229)',
  ];

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const selectColor = (optedColor) => {
    props.noteColor(optedColor);
    dispatch(ApiSensor())
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <IconButton onClick={handleClick}>
        <PaletteOutlinedIcon />
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl} style={{zIndex:1400}}>
        <Box
          sx={{
            p: 1,
            bgcolor: "background.paper",
            display: "flex",
            gap: "0.5rem",
            borderRadius: "10px",
            borderColor: "#202124",
            boxShadow: "0 0 1px #202124",
            marginLeft: "20rem;",
          }}
        >
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                height: 25,
                width: 25,
                borderRadius: 50,
                backgroundColor: color,
              }}
              onClick={() => selectColor(color)}
            ></div>
          ))}
        </Box>
      </Popper>
    </div>
  );
}
