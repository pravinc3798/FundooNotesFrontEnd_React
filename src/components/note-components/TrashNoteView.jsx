import React from "react";
import "./NoteStyles.css";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import RestoreFromTrashOutlinedIcon from "@mui/icons-material/RestoreFromTrashOutlined";

import { trashNote, deleteNote } from "../../services/DataServices";

export default function Note5(props) {
  const updateTrash = (id) => {
    trashNote(id)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const deleteForever = (id) => {
    deleteNote(id)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className="Note3Container">
      <Paper
        component="div"
        sx={{
          p: "2px 4px",
          width: "18rem",
          borderRadius: "10px",
          color: "rgba(0,0,0,0.702)",
          backgroundColor: props.noteDetails.color,
        }}
      >
        <div className="Note3Title">
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            fullWidth
            value={props.noteDetails.title}
          />
        </div>
        <div
          className="Note3Description"
          style={{ height: "6rem", resize: "none", overflow: "hidden" }}
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
        <div className="Note3Icons">
          <IconButton onClick={() => updateTrash(props.noteDetails.noteID)}>
            <RestoreFromTrashOutlinedIcon />
          </IconButton>
          <IconButton onClick={() => deleteForever(props.noteDetails.noteID)}>
            <DeleteForeverOutlinedIcon />
          </IconButton>
        </div>
      </Paper>
    </div>
  );
}
