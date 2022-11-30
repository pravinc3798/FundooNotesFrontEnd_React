import React, { useState } from 'react'
import AppBar from '../note-components/AppBar'
import Note1 from '../note-components/Note1'
import Note2 from '../note-components/Note2'
import Note3 from '../note-components/Note3'

export default function Dashborad() {

  const [toggle, setToggle] = useState(false)

  const updateToggle = () => setToggle(!toggle)

  return (
    <div>
        <AppBar/>
        {
            toggle ? <Note2 toggle={updateToggle}/> : <Note1 toggle={updateToggle}/>
        }
        <div style={{display:'flex', flexWrap:'wrap', height:'auto', width:'75vw'}}>
            <Note3/>
        </div>
    </div>
  )
}
