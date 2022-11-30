import React from "react";
import './NoteStyles.css'

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Button from '@mui/material/Button';

import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';

import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

export default function Note2(props) {

  const updateToggle = () => props.toggle()

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
        }}
      >
        <div className="Note2Title">
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Title"
            fullWidth
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
            <IconButton>
              <PaletteOutlinedIcon />
            </IconButton>
            <IconButton>
              <PhotoOutlinedIcon />
            </IconButton>
            <IconButton>
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
              onClick={updateToggle}
            >
              Close
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}
