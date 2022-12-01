import axios from "axios";

const headerConfig = {
    headers : {
        Authorization : `Bearer ${localStorage.getItem('token')}`
    }
}

export const getNotes = () => {
    let response = axios.get('http://localhost:19192/api/Note/View',headerConfig)
    return response;
}

export const addNote = (noteModel) => {
    let response = axios.post('http://localhost:19192/api/Note/Add',noteModel,headerConfig)
    return response;
}

export const archiveNote = (noteId) => {
    let response = axios.put(`http://localhost:19192/api/Note/Archive?noteId=${noteId}`,noteId,headerConfig)
    return response;
}

export const trashNote = (noteId) => {
    let response = axios.put(`http://localhost:19192/api/Note/Trash?noteId=${noteId}`,noteId,headerConfig)
    return response;
}

export const changeColor = (noteObj) => {
    let response = axios.put(`http://localhost:19192/api/Note/Color?noteId=${noteObj.noteId}&colour=${noteObj.colour}`,noteObj,headerConfig)
    return response;
}