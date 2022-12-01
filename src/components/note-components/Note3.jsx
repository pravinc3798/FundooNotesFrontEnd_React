import React from "react";
import "./NoteStyles.css";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

//import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import { archiveNote, changeColor, trashNote } from "../../services/DataServices";
import ColorPopper from "../icon-components/ColorPopper";

export default function Note3(props) {

  const updateArchive = (id) => {
    archiveNote(id).then(response => console.log(response)).catch(error => console.log(error));
  }

  const updateTrash = (id) => {
    trashNote(id).then(response => console.log(response)).catch(error => console.log(error));
  }

  const updateColor = (selectedColor) => {
    let noteObject = {noteId : props.noteDetails.noteID, colour : selectedColor}
    changeColor(noteObject).then(response => console.log(response)).catch(error => console.log(error));
  }

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
        <div className="Note3Description">
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            fullWidth
            multiline
            maxRows={14}
            value={props.noteDetails.description}
          />
        </div>
        <div className="Note3Icons">
          {/* <IconButton>
            <NotificationAddOutlinedIcon />
          </IconButton> */}
          <IconButton>
            <PersonAddAltOutlinedIcon />
          </IconButton>
          <IconButton>
            <ColorPopper noteColor={updateColor} />
          </IconButton>
          <IconButton>
            <PhotoOutlinedIcon />
          </IconButton>
          <IconButton onClick={() => updateArchive(props.noteDetails.noteID)}>
            <ArchiveOutlinedIcon />
          </IconButton>
          <IconButton onClick={() => updateTrash(props.noteDetails.noteID)}>
            <DeleteOutlineOutlinedIcon/>
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>
      </Paper>
    </div>
  );
}
