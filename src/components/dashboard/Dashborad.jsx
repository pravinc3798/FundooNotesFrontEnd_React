import React, { useEffect, useState } from "react";
import { getNotes } from "../../services/DataServices";
import AppBar from "../note-components/AppBar";
import Note1 from "../note-components/Note1";
import Note2 from "../note-components/Note2";
import Note3 from "../note-components/Note3";
import MiniDrawer from "../mini-drawer/MiniDrawer";

export default function Dashborad() {
  const [toggle, setToggle] = useState(false);
  const [noteList, setNoteList] = useState([]);
  const [drawerSwitch, setDrawerSwitch] = useState(false);

  const updateToggle = () => setToggle(!toggle);
  const updateDrawer = () => setDrawerSwitch(!drawerSwitch);

  useEffect(() => {
    getNotes()
      .then((response) => {
        console.log(response);
        setNoteList(response.data.data);
        console.log(noteList);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <AppBar updateDrawer={updateDrawer}/>
      <MiniDrawer drawerPosition={drawerSwitch}/>
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
        {noteList.map((noteObj) => (
          <Note3 key={noteObj.noteID} noteDetails={noteObj} />
        ))}
      </div>
    </div>
  );
}
