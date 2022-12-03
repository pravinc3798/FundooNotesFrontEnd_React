import React from "react";
import "./NoteStyles.css";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import {
  changeColor,
  archiveNote,
  trashNote,
} from "../../services/DataServices";
import ColorPopper from "../icon-components/ColorPopper";

export default function ArchiveNoteView(props) {
  const updateArchive = (id) => {
    archiveNote(id)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const updateTrash = (id) => {
    trashNote(id)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const updateColor = (selectedColor) => {
    let someObj = { noteId: props.noteDetails.noteID, colour: selectedColor };
    changeColor(someObj)
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
          <IconButton>
            <PushPinOutlinedIcon />
          </IconButton>
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
          <IconButton>
            <PersonAddAltOutlinedIcon />
          </IconButton>
          <ColorPopper noteColor={updateColor} />
          <IconButton>
            <PhotoOutlinedIcon />
          </IconButton>
          <IconButton onClick={() => updateArchive(props.noteDetails.noteID)}>
            <UnarchiveOutlinedIcon />
          </IconButton>
          <IconButton onClick={() => updateTrash(props.noteDetails.noteID)}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>
      </Paper>
    </div>
  );
}
