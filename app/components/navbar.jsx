import { Navbar } from "flowbite-react";
import { Form, useLoaderData } from "@remix-run/react";

export default function Header() {

const userId = useLoaderData()

    return (
      <main className="my-4 sm:mx-8 lg:mx-32 ">   
     <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand
    href="/"
  >
    <img
      src="icon_512x512.png"
      className="mr-3 h-6 sm:h-9"
      alt="Simplenote Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Simplenote
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse >
    <Navbar.Link
      href="/contact">
      Contact Us
    </Navbar.Link>
    <Navbar.Link
      href="/help">
      Help
    </Navbar.Link>
    <Navbar.Link href="/blog">
      Blog
    </Navbar.Link>

      {userId && (
        <Form method="post" action="/logout">
          <button>Logout</button>
        </Form>
      )}

    {!userId && (<Navbar.Link href="/auth?mode=login">
      Log In
    </Navbar.Link> &&  
    <Navbar.Link href="/auth?mode=signup">
     | Sign Up |
    </Navbar.Link>)}
   
  </Navbar.Collapse>
</Navbar>
        

      </main>
    );
  }
  