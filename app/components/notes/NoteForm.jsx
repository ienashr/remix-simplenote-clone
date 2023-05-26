import { Link, Form, useActionData, useNavigation, useMatches, useParams, useFetcher } from "@remix-run/react";

export default function NoteForm(){
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10
  const validationErrors = useActionData()
  //const noteData = useLoaderData()

  const params = useParams()

  const matches = useMatches();
  const notes = matches.find(
    (match) => match.id === 'routes/__app/notes').data;
  const noteData = notes.find(
    (note) => note.id === params.id)

    const navigation = useNavigation()


  if(params.id && !noteData){
    //throw new Response()
    return <p>Invalid note id</p>;
  }


  const defaultValues = noteData ?{
    title: noteData.title,
    content: noteData.content,
    date: noteData.date,
  } : {
    title: '',
    content: '',
    date: '',
  }

  const isSubmitting = navigation.state !== 'idle'

  
  

   return(
    <Form method={noteData? 'patch' : 'post'}
    className="w-full flex flex-col space-y-2 
    ">
    <p>
      <label htmlFor="title"></label>
      <input type="text"
       id="title" 
       name="title" 
       className="relative w-full h-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
       required maxLength={30} 
        placeholder="title"
       defaultValue={defaultValues.title}/>
    </p>

    <div className="form-row">
      <p>
        <label htmlFor="content"></label>
        <textarea
          type="text"
          id="content"
          name="content"
          placeholder="content"
          className="w-full h-96 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          maxLength={3000}
          required
          defaultValue={defaultValues.content}
        
        />
      </p>
      <p>
        <label htmlFor="date"></label>
        <input 
        type="date" 
        id="date" 
        name="date" 
        max={today} 
        className="w-full h-full px-4 py-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        required 
        defaultValue={defaultValues.date ? defaultValues.date.slice(0,10 ): ''}
        />
        
      </p>
    </div>
{validationErrors && <ul>
  {Object.values(validationErrors).map(error => <li key={error}>{error}</li>)}
  </ul>}

    <div className="flex space-x-64">
      <button disabled={isSubmitting}
      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-gray-50"
      >{isSubmitting ? 'Saving...' : 'Save Note'}</button>
      <Link to=".."
      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
      >Cancel</Link>
    </div>
   
  </Form>
   )
    
}