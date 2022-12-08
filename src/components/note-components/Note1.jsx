import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NewNoteToggle } from "../../redux/Actions";
import { useStyle } from "../Styling";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";

export default function Note1(props) {
  const MiniDrawerOpen = useSelector((state) => state.MiniDrawerOpen);
  const dispatch = useDispatch();
  const classes = useStyle()
  let marginCuston = MiniDrawerOpen ? "20vw" : "25vw";

  return (
    <div className={classes.Note1Container} style={{marginLeft:marginCuston}}>
      <Paper className={classes.Note1Paper}
        component="form"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Take a note..."
          onClick={() => dispatch(NewNoteToggle())}
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
