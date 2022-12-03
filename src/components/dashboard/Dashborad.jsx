import React, { useEffect, useState } from "react";
import { getNotes } from "../../services/DataServices";
import AppBar from "../note-components/AppBar";
import Note1 from "../note-components/Note1";
import Note2 from "../note-components/Note2";
import Note3 from "../note-components/Note3";
import ArchiveNoteView from "../note-components/ArchiveNoteView";
import TrashNoteView from "../note-components/TrashNoteView";
import MiniDrawer from "../mini-drawer/MiniDrawer";

export default function Dashborad() {
  const [toggle, setToggle] = useState(false);
  const [noteList, setNoteList] = useState([]);
  const [drawerSwitch, setDrawerSwitch] = useState(false);
  const [pane, setPane] = useState("Notes");

  const updateToggle = () => setToggle(!toggle);
  const updateDrawer = () => setDrawerSwitch(!drawerSwitch);
  const drawerPane = (selectedPane) => {
    setPane(selectedPane);
  };

  useEffect(() => {
    getNotes()
      .then((response) => {
        console.log(response);
        //setNoteList(response.data.data);
        console.log(noteList);
      })
      .catch((error) => console.log(error));
  }, [pane]);

  return (
    <div>
      <AppBar updateDrawer={updateDrawer} heading={pane} />
      <MiniDrawer drawerPosition={drawerSwitch} paneSelection={drawerPane} />

      {pane === "Notes" && (
        <div>
          {toggle ? (
            <Note2 toggle={updateToggle} />
          ) : (
            <Note1 toggle={updateToggle} />
          )}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              height: "auto",
              width: "75vw",
            }}
          >
            {noteList
              .filter((noteObj) => !noteObj.archive && !noteObj.trash)
              .map((noteObj) => (
                <Note3 key={noteObj.noteID} noteDetails={noteObj} />
              ))}
          </div>
        </div>
      )}
      {pane === "Archive" && (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h3>Archieved Notes</h3>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              height: "auto",
              width: "75vw",
            }}
          >
            {noteList
              .filter((noteObj) => noteObj.archive && !noteObj.trash)
              .map((noteObj) => (
                <ArchiveNoteView key={noteObj.noteID} noteDetails={noteObj} />
              ))}
          </div>
        </div>
      )}
      {pane === "Bin" && (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h3>Trashed Notes</h3>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              height: "auto",
              width: "75vw",
            }}
          >
            {noteList
              .filter((noteObj) => noteObj.trash)
              .map((noteObj) => (
                <TrashNoteView key={noteObj.noteID} noteDetails={noteObj} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
