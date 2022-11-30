import React from "react";
import "./NoteStyles.css";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";

export default function Note1(props) {
  const updateToggle = () => props.toggle();

  return (
    <div className="Note1Container">
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "40rem",
          borderRadius: "10px",
          color: "rgba(0,0,0,0.702)",
          borderColor: "#202124",
          boxShadow: "0 0 5px #202124",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Take a note..."
          onClick={updateToggle}
        />
        <IconButton>
          <CheckBoxOutlinedIcon />
        </IconButton>
        <IconButton>
          <BrushOutlinedIcon />
        </IconButton>
        <IconButton>
          <PhotoOutlinedIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
