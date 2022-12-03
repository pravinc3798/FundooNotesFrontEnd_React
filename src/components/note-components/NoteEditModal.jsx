import React from "react";
import "./NoteStyles.css";

import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";

import Tooltip from "@mui/material/Tooltip";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import {
  archiveNote,
  changeColor,
  editNote,
  trashNote,
} from "../../services/DataServices";
import ColorPopper from "../icon-components/ColorPopper";

export default function NoteEditModal(props) {

  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor:
      props.pnoteDetails.color === ""
        ? "rgb(255,255,255)"
        : props.pnoteDetails.color,
    borderRadius: "10px",
    boxShadow: 24,
    color: "rgba(0,0,0,0.702)",
    p: 2,
  };

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

  const updateNote = (id, noteObject) => {
    editNote(id, noteObject)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className="Note3Container">
      <Modal open={props.openModal}>
        <Box component="div" sx={styleModal}>
          <div className="Note3Title">
            <InputBase
              sx={{ ml: 1, flex: 1, fontSize: "18px", fontWeight: "bold" }}
              fullWidth
              defaultValue={props.pnoteDetails.title}
              onChange={(event) => {
                props.pnoteDetails.title = event.target.value;
              }}
            />
            <IconButton onClick={props.closeModal}>
              <CloseOutlinedIcon />
            </IconButton>
          </div>
          <div className="Note3Description">
            <InputBase
              sx={{ ml: 1, flex: 1, p: "2px 4px", marginBottom: "0rem" }}
              fullWidth
              multiline
              defaultValue={props.pnoteDetails.description}
              onChange={(event) => {
                props.pnoteDetails.description = event.target.value;
              }}
            />
          </div>
          <p style={{textAlign:'right', fontSize:'0.8rem', color:'black'}}>Edited {new Date(props.pnoteDetails.edited).toLocaleString()}</p>
          <div className="Note3Icons">
            <IconButton>
              <PersonAddAltOutlinedIcon />
            </IconButton>
            <ColorPopper noteColor={updateColor} />
            <IconButton>
              <PhotoOutlinedIcon />
            </IconButton>
            <IconButton
              onClick={() => updateArchive(props.pnoteDetails.noteID)}
            >
              <ArchiveOutlinedIcon />
            </IconButton>
            <IconButton onClick={() => updateTrash(props.pnoteDetails.noteID)}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
            <Tooltip title="save" arrow>
              <IconButton
                onClick={() => {
                  updateNote(props.pnoteDetails.noteID, props.pnoteDetails);
                  props.closeModal();
                }}
              >
                <TaskAltOutlinedIcon />
              </IconButton>
            </Tooltip>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
