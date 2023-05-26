import { redirect } from "@remix-run/node"
import { useNavigate } from "@remix-run/react"

import NoteForm from "~/components/notes/NoteForm"
import Modal from "~/components/util/Modal"
import { addNote } from "../../../data/notes.server"
import { validateNoteInput } from "../../../data/validation.server"
import { requireUserSession } from "../../../data/auth.server"

export default function AddNotesPage(){
    const navigate = useNavigate()
    
    function closeHandler(){
        navigate('/notes')
    }
    
    return(
        <Modal onClose={closeHandler}>
        <NoteForm/>
        </Modal>
    )
}

export async function action({request}){
    const userId = await requireUserSession(request)
    const formData = await request.formData()
    const noteData = Object.fromEntries(formData) 
    try{
        validateNoteInput(noteData)
    } catch(error) {
        return error;
    }

    await addNote(noteData, userId)
    return redirect('/notes')
}

//klo action tuh nerima data dari form, sedangkan loader tuh nerima data dari object gitu.