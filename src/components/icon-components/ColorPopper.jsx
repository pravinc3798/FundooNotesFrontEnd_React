import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import IconButton from "@mui/material/IconButton";

export default function ColorPopper(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const colors = [
    "#2ECC71",
    "#AF7AC5",
    "#F1948A",
    "#A3E4D7",
    "#F5B7B1",
    "#F5B041",
    "#DC7633",
    "#F1C40F",
    "#AAB7B8",
    "#F1948A",
    "#2ECC71",
    "#F5B041",
  ];

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const selectColor = (optedColor) => {
    props.noteColor(optedColor);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <IconButton onClick={handleClick}>
        <PaletteOutlinedIcon />
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl}>
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
