import {  Link, useFetcher } from "@remix-run/react";
import { FaTrashAlt } from "react-icons/fa";

export default function NoteListItem({ id, title, content }) {
  //const submit = useSubmit()
  const fetcher = useFetcher()
  
  function deleteNoteItemHandler() {
    const proceed = confirm('Are you sure? Do you want to delete this item?')
    //submit(null, {
     // method: 'delete',
     // action: `/notes/${id}`, })

     if(!proceed){
      return;
     }

    fetcher.submit(null,{
      method: 'delete',
      action: `/notes/${id}`,
    })
  }


  if(fetcher.state !== 'idle'){
    return <article className="">
      <p>Deleting...</p>
    </article>
  }

  return (
    <article className="mx-4 flex w-52">
      <div>
      <Link to={id}>
        <h2 className="">{title}</h2>
        </Link>
      </div>
      <menu className=" s">
        <button onClick={deleteNoteItemHandler} className="pr-0 mr-0 right-0"><FaTrashAlt/></button>
       {/* <Form method='delete' action={`/notes/${id}`}>
          <button>Delete</button>
        </Form>*/}
      </menu>
    </article>
  );
}

