import NoteListItem from './NoteListItem';

function NotesList({ notes }) {
 

  return (
    <ol id="">
     
      {notes.map((note) => (
        <li key={note.id}>
          <NoteListItem
            id={note.id}
            title={note.title}
            content={note.content}
          />
        
        </li>
      ))}

     
    </ol>
  );
}

export default NotesList;
