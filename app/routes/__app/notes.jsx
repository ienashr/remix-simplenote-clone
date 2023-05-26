import { Dropdown, Modal, Button } from "flowbite-react";
import { Link, Outlet, useLoaderData, Form } from "@remix-run/react";
import NotesList from "../../components/notes/NotesList";
import { FaPlus, FaBars, FaBook, FaSlidersH, FaRegTimesCircle} from "react-icons/fa";
import { getNotes } from "../../data/notes.server";
import { requireUserSession } from "../../data/auth.server";
import { useState } from "react";


export default function Notes() {
  const [showModal, setShowModal] = useState(false);
  const notes = useLoaderData()
  const userId = useLoaderData()
  
  const hasNotes = notes && notes.length > 0
  
  return (
      <main className="flex">
        <div className="w-fit h-screen">

  <Dropdown label={<FaBars/>} arrowIcon={false}>
  <Dropdown.Header>
    <span className="block text-sm mr-48">
    </span>
  </Dropdown.Header>
  <Dropdown.Item>
     <FaBook/>
        <Link to='/notes' className="pl-2">
         All Notes
        </Link>
  </Dropdown.Item>
  <Dropdown.Item >
      <FaSlidersH/>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="pl-2"
        >
        Setting
      </button>
  </Dropdown.Item>
  <Dropdown.Divider />
  
  <Dropdown.Item>
   
  </Dropdown.Item>
</Dropdown>       
      
</div>
<Outlet/>

<div className="mx-4">
            <section className='flex flex-row'>
                <Link to="add"
                className="flex space-x-3 justify-center justify-between h-12 my-2">
                    <FaPlus/>
                    <p className="pb-">Add Note</p>
                </Link>
            </section>
            {hasNotes && <NotesList notes={notes}/>}


           {!hasNotes && <section id='no-notes'>
            <h1>No notes found</h1>
            <p>Start<Link to='add'>adding some</Link> today</p>
            </section>}

 </div>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                  Setting
                  </h3>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <FaRegTimesCircle/>
                  </button>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  Account
                  </p>

                  {userId && (
        <Form method="post" action="/logout">
          <button
           className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          >Logout</button>
        </Form>
      )}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              
              
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}


      </main>
    );
  }
  


  export async function loader({request}){
    const userId = await requireUserSession(request)
    const notes = await getNotes(userId)
    return notes;
   
  }
  