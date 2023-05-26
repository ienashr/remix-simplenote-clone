import { redirect } from "@remix-run/node"
import { useNavigate } from "@remix-run/react"

import NoteForm from "~/components/notes/NoteForm"
import Modal from "~/components/util/Modal"
import { deleteNote, updateNote } from "~/data/notes.server"
import { validateNoteInput } from "~/data/validation.server"

export default function UpdateNotesPage(){
    const navigate = useNavigate()
     
    function closeHandler(){
        navigate('/notes/notes-list')
    }
    
    
    return(
        <Modal onClose={closeHandler}>
        <NoteForm/>
        </Modal>
    )
}

//export async function loader({params}){
//    console.log('NOTE LOADER')
//    const noteId = params.id
//    const note = await getNote(noteId)
//    return note;
//} 

export async function action({params, request}){
    const noteId = params.id;

    if(request.method === 'PATCH'){
        const formData = await request.formData()
        const noteData = Object.fromEntries(formData)
        try{
        validateNoteInput(noteData)
        }catch(error){
         return error
        }
    
        await updateNote(noteId, noteData)
        return redirect('/notes/notes-list')

    } else if(request.method === 'DELETE'){
        await deleteNote(noteId)
        return {deletedId:  noteId}
    }

    
}