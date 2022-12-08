import React, { useState } from "react";
import "./NoteStyles.css";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import {
  archiveNote,
  changeColor,
  trashNote,
} from "../../services/DataServices";
import ColorPopper from "../icon-components/ColorPopper";
import NoteEditModal from "../note-components/NoteEditModal";
import { useDispatch } from "react-redux";
import { ApiSensor } from "../../redux/Actions";

export default function Note3(props) {
  const dispatch = useDispatch();
  const [openClose, setOpenClose] = useState(false);

  const updateArchive = (id) => {
    archiveNote(id)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    dispatch(ApiSensor());
  };

  const updateTrash = (id) => {
    trashNote(id)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    dispatch(ApiSensor());
  };

  const updateColor = (selectedColor) => {
    let noteObject = {
      noteId: props.noteDetails.noteID,
      colour: selectedColor,
    };
    changeColor(noteObject)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className="Note3Container">
      {openClose && (
        <NoteEditModal
          openModal={openClose}
          closeModal={() => setOpenClose(false)}
          pnoteDetails={props.noteDetails}
        />
      )}
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
            onClick={() => setOpenClose(true)}
          />
          <IconButton>
            <PushPinOutlinedIcon />
          </IconButton>
        </div>
        <div
          className="Note3Description"
          style={{ height: "6rem", resize: "none", overflow: "hidden" }}
          onClick={() => setOpenClose(true)}
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
            <ArchiveOutlinedIcon />
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
