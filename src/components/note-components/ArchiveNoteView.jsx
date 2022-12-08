import React, { useState } from "react";
import { useStyle } from "../Styling";

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
import NoteEditModal from "./NoteEditModal";
import { ApiSensor } from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";

export default function ArchiveNoteView(props) {
  const dispatch = useDispatch();
  const classes = useStyle();
  const MiniDrawerPane = useSelector((state) => state.MiniDrawerPane);
  const leftCustom = !MiniDrawerPane ? "16vw" : "8vw";

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
    let someObj = { noteId: props.noteDetails.noteID, colour: selectedColor };
    changeColor(someObj)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className={classes.Note3Container} style={{ left: leftCustom }}>
      {openClose && (
        <NoteEditModal
          openModal={openClose}
          closeModal={() => setOpenClose(false)}
          pnoteDetails={props.noteDetails}
        />
      )}
      <Paper
        className={classes.Note3Paper}
        sx={{ bgcolor: props.noteDetails.color, borderRadius: "10px" }}
        component="div"
      >
        <div className={classes.Note3Title}>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            fullWidth
            value={props.noteDetails.title}
            onClick={() => setOpenClose(true)}
          />
          <IconButton size="small">
            <PushPinOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
        <div className={classes.Note3Description}>
          <InputBase
            sx={{ ml: 1, flex: 1, p: "2px 4px" }}
            fullWidth
            multiline
            rows={5}
            value={props.noteDetails.description}
            inputProps={{ style: { overflowY: "hidden" } }}
            onClick={() => setOpenClose(true)}
          />
        </div>
        <div className={classes.Note3Icons}>
          <IconButton size="small">
            <PersonAddAltOutlinedIcon fontSize="small" />
          </IconButton>
          <ColorPopper noteColor={updateColor} />
          <IconButton size="small">
            <PhotoOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={() => updateArchive(props.noteDetails.noteID)}>
            <UnarchiveOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={() => updateTrash(props.noteDetails.noteID)}>
            <DeleteOutlineOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <MoreVertOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
      </Paper>
    </div>
  );
}
