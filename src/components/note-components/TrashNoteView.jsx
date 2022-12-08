import React from "react";
import { useStyle } from "../Styling";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import RestoreFromTrashOutlinedIcon from "@mui/icons-material/RestoreFromTrashOutlined";

import { trashNote, deleteNote } from "../../services/DataServices";
import { ApiSensor } from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";

export default function Note5(props) {
  const dispatch = useDispatch();
  const classes = useStyle();
  const MiniDrawerPane = useSelector((state) => state.MiniDrawerPane);
  const leftCustom = !MiniDrawerPane ? "16vw" : "8vw";

  const updateTrash = (id) => {
    trashNote(id)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    dispatch(ApiSensor());
  };

  const deleteForever = (id) => {
    deleteNote(id)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    dispatch(ApiSensor());
  };

  return (
    <div className={classes.Note3Container} style={{ left: leftCustom }}>
      <Paper
        className={classes.Note3Paper}
        sx={{ bgcolor: props.noteDetails.color }}
        component="div"
      >
        <div className={classes.Note3Title}>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            fullWidth
            value={props.noteDetails.title}
          />
        </div>
        <div
          className={classes.Note3Description}
        >
          <InputBase
            sx={{ ml: 1, flex: 1, p: "2px 4px" }}
            fullWidth
            multiline
            rows={5}
            value={props.noteDetails.description}
            inputProps={{ style: { overflowY: "hidden" } }}
          />
        </div>
        <div className={classes.Note3Icons}>
          <IconButton onClick={() => updateTrash(props.noteDetails.noteID)} size='small'>
            <RestoreFromTrashOutlinedIcon fontSize="small"/>
          </IconButton>
          <IconButton onClick={() => deleteForever(props.noteDetails.noteID)} size='small'>
            <DeleteForeverOutlinedIcon fontSize="small"/>
          </IconButton>
        </div>
      </Paper>
    </div>
  );
}
