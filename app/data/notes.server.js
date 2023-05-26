import { prisma } from "./database.server"; 

export async function addNote(noteData, userId){
    try{
        return await prisma.note.create({
          data: {
            title: noteData.title,
            content: noteData.content,
            date: new Date(noteData.date),
            User: {connect:{id: userId}} 
        }})
    } catch(error){
  throw new Error('Failed to add note.')
    }
}

export async function getNotes(userId){
if(!userId){
  throw new Error('Failed to get notes.')
}
  try{
    const notes = await prisma.note.findMany({
      where: {userId}, 
      orderBy:{date: 'desc'}})
    return notes;
  } catch(error){
  throw new Error('Failed to get notes.')
  }
}

export async function getNote(id){
 try{
  const note = await prisma.note.findFirst({where: {id}})
  return note
 }catch(error){
  throw new Error('Failed to get note.')
  
 
  }
}

export async function updateNote(id, noteData){
 try{
  await prisma.note.update({
    where: {id},
    data: {
      title: noteData.title,
      content: noteData.content,
      date: new Date(noteData.date)
    }
  })
 } catch(error){
  throw new Error('Failed to update note.')
  } 
}

export async function deleteNote(id){
  try{
    await prisma.note.delete({
      where: {id}
    })
  } catch(error){
        throw new Error('Failed to delete note.')
  }
}