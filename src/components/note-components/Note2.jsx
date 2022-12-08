import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NewNoteToggle } from "../../redux/Actions";
import "./NoteStyles.css";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";

import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import { addNote } from "../../services/DataServices";
import ColorPopper from "../icon-components/ColorPopper";

export default function Note2(props) {

  const MiniDrawerOpen = useSelector((state) => state.MiniDrawerOpen);
  const dispatch = useDispatch();

  const [noteObj, setNoteObj] = useState({
    title: "",
    description: "",
    color: "",
    archive: false,
  });

  const userInput = (field, value) => {
    setNoteObj({
      ...noteObj,
      [field]: value,
    });
  };

  const saveNote = () => {
    if (noteObj.title !== "" || noteObj.description !== "") {
      addNote(noteObj)
        .then((response) => {
          console.log(response);
          //props.iniatedMove();
        })
        .catch((error) => console.log(error));
    }
  };

  const noteColor = (selectedColor) => {
    setNoteObj({
      ...noteObj,
      color: selectedColor,
    });
  };

  return (
    <div className="Note2Container">
      <Paper
        component="div"
        sx={{
          p: "2px 4px",
          width: "40rem",
          borderRadius: "10px",
          color: "rgba(0,0,0,0.702)",
          borderColor: "#202124",
          boxShadow: "0 0 5px #202124",
          background: noteObj.color,
        }}
      >
        <div className="Note2Title">
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Title"
            fullWidth
            onChange={(e) => userInput("title", e.target.value)}
          />
          <IconButton>
            <PushPinOutlinedIcon />
          </IconButton>
        </div>
        <div className="Note2Descripiton">
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Take a note..."
            fullWidth
            multiline
            onChange={(e) => userInput("description", e.target.value)}
          />
        </div>
        <div className="Note2IconButtons">
          <div className="Note2Icons">
            <IconButton>
              <NotificationAddOutlinedIcon />
            </IconButton>
            <IconButton>
              <PersonAddAltOutlinedIcon />
            </IconButton>

            {/* <IconButton>
              <PaletteOutlinedIcon />
            </IconButton> */}

            <ColorPopper noteColor={noteColor} />

            <IconButton>
              <PhotoOutlinedIcon />
            </IconButton>
            <IconButton onClick={() => userInput('archive',!noteObj.archive)}>
              <ArchiveOutlinedIcon />
            </IconButton>
            <IconButton>
              <MoreVertOutlinedIcon />
            </IconButton>
            <IconButton disabled>
              <UndoOutlinedIcon />
            </IconButton>
            <IconButton disabled>
              <RedoOutlinedIcon />
            </IconButton>
          </div>
          <div className="Note2Button">
            <Button
              variant="text"
              sx={{ color: "grey", textTransform: "none", fontWeight: "bold" }}
              onClick={() => {dispatch(NewNoteToggle())
                saveNote()
              }}
            >
              Close
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}
