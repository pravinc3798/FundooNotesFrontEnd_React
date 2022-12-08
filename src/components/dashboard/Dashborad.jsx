import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getNotes } from "../../services/DataServices";
import NewAppBar from "../note-components/AppBar";
import Note1 from "../note-components/Note1";
import Note2 from "../note-components/Note2";
import Note3 from "../note-components/Note3";
import ArchiveNoteView from "../note-components/ArchiveNoteView";
import TrashNoteView from "../note-components/TrashNoteView";
import MiniDrawer from "../mini-drawer/MiniDrawer";
import { DashboardUseStyle } from "../Styling";

export default function Dashborad() {
  const classes = DashboardUseStyle();
  const NewNoteTogglePosition = useSelector(
    (state) => state.NewNoteTogglePosition
  );
  const MiniDrawerPane = useSelector((state) => state.MiniDrawerPane);
  const ApiCallSense = useSelector((state) => state.ApiCallSense);

  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    getNotes()
      .then((response) => {
        console.log(response);
        setNoteList(response.data.data);
        console.log(noteList);
      })
      .catch((error) => console.log(error));
  }, [MiniDrawerPane, ApiCallSense]);

  return (
    <div>
      <NewAppBar />
      <div className={classes.DBContainer}>
        <MiniDrawer />

        {MiniDrawerPane === "Notes" && (
          <div>
            {NewNoteTogglePosition ? <Note2 /> : <Note1 />}
            <div className={classes.DBNotes}>
              {noteList
                .filter((noteObj) => !noteObj.archive && !noteObj.trash)
                .map((noteObj) => (
                  <Note3 key={noteObj.noteID} noteDetails={noteObj} />
                ))}
            </div>
          </div>
        )}
        {MiniDrawerPane === "Archive" && (
          <div>
            <div className={classes.DBHeading}>
              <h3>Archieved Notes</h3>
            </div>
            <div className={classes.DBNotes}>
              {noteList
                .filter((noteObj) => noteObj.archive && !noteObj.trash)
                .map((noteObj) => (
                  <ArchiveNoteView key={noteObj.noteID} noteDetails={noteObj} />
                ))}
            </div>
          </div>
        )}
        {MiniDrawerPane === "Bin" && (
          <div>
            <div className={classes.DBHeading}>
              <h3>Trashed Notes</h3>
            </div>
            <div className={classes.DBNotes}>
              {noteList
                .filter((noteObj) => noteObj.trash)
                .map((noteObj) => (
                  <TrashNoteView key={noteObj.noteID} noteDetails={noteObj} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
