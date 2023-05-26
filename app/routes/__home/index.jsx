import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="w-full flex flex-col items-center justify-center ">
      <div className="lg:w-1/3 sm:w-2/3 h-full space-y-8 my-12 items-center justify-center">
        <h1 className="text-5xl font-bold">The simplest way to keep notes</h1>
        <p className="pb-8">All your notes, synced on all your devices. Get Simplenote now for iOS, Android, Mac, Windows, Linux, or in your browser.</p>
        <Link to="/auth?mode=signup" className=""><button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Sign up now</button></Link>
        </div>

        <img src="https://simplenoteblog.files.wordpress.com/2020/07/img_simplenote_hero.png" alt=""/>

        <hr/>

        <div className="lg:w-5/6 sm:w-2/3 space-y-4 my-12">
        <h1 className="text-4xl font-bold">Comprehensive underneath, simple on the surface</h1>
        <h1 className="text-4xl font-bold">What people are saying</h1>
        <div className="flex sm:flex-col lg:flex-row gap-4">
            <div className="border-l-4 border-slate-500 pl-4 lg:w-1/3">
              <p>If you’re not using Simplenote, you’re missing out.</p>
              <p>TechCrunch</p>
            </div>
            <div className="border-l-4 border-slate-500 pl-4 lg:w-1/3">
              <p>If you’re looking for a cross-platform note-taking tool with just enough frills, it’s hard to look beyond Simplenote.</p>
              <p>MacWorld</p>
            </div>
            <div className="border-l-4 border-slate-500 pl-4 lg:w-1/3">
              <p>If you want a truly distraction-free environment then you can’t do better than Simplenote for your note-taking needs.</p>
              <p>Zapier</p>
            </div>
        </div>
        <hr/>

        <h1 className="text-4xl font-bold">Available on all your devices</h1>
        <p>Download Simplenote for any device and stay in sync – all the time, everywhere.</p>



     </div>
    


    </main>
  );
}
