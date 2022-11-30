import React from 'react'
import AppBar from '../note-components/AppBar'
import Note1 from '../note-components/Note1'
import Note2 from '../note-components/Note2'
import Note3 from '../note-components/Note3'

export default function Dashborad() {
  return (
    <div>
        <AppBar/>
        {
            false ? <Note1/> : <Note2/>
        }
        <div style={{display:'flex', flexWrap:'wrap', height:'auto', width:'75vw'}}>
            <Note3/>
        </div>
    </div>
  )
}
