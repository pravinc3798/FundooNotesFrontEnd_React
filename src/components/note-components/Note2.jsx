import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApiSensor, NewNoteToggle } from "../../redux/Actions";
import { useStyle } from "../Styling";

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
import { margin } from "@mui/system";

export default function Note2(props) {
  const classes = useStyle();
  const MiniDrawerOpen = useSelector((state) => state.MiniDrawerOpen);
  let marginCuston = MiniDrawerOpen ? "20vw" : "25vw";
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
          dispatch(ApiSensor());
        })
        .catch((error) => console.log(error));
    }
    dispatch(NewNoteToggle());
  };

  const noteColor = (selectedColor) => {
    setNoteObj({
      ...noteObj,
      color: selectedColor,
    });
  };

  return (
    <div
      className={classes.Note2Container}
      style={{ marginLeft: marginCuston }}
    >
      <Paper
        className={classes.Note2Paper}
        component="div"
        sx={{
          background: noteObj.color,
        }}
      >
        <div className={classes.Note2Title}>
          <InputBase
            sx={{ ml: 1, flex: 1, mr:1, p:1 }}
            placeholder="Title"
            fullWidth
            onChange={(e) => userInput("title", e.target.value)}
          />
          <IconButton>
            <PushPinOutlinedIcon />
          </IconButton>
        </div>
        <div className={classes.Note2Descripiton}>
          <InputBase
            sx={{ ml: 1, flex: 1, mr:1, p:1 }}
            placeholder="Take a note..."
            fullWidth
            multiline
            onChange={(e) => userInput("description", e.target.value)}
          />
        </div>
        <div className={classes.Note2IconButtons}>
          <div className={classes.Note2Icons}>
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
            <IconButton onClick={() => userInput("archive", !noteObj.archive)}>
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
          <div className={classes.Note2Button}>
            <Button
              variant="text"
              sx={{ color: "grey", textTransform: "none", fontWeight: "bold" }}
              onClick={() => saveNote()}
            >
              Close
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}
