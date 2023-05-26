import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";

import Error from "./components/util/Error"

import styles from "./tailwind.css";


export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

function Document({title, children}){
  return(
    <html lang="en">
    <head>
      <title>{title}</title>
      <Meta />
      <Links />
    </head>
    <body>
      {children}
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </body>
  </html>
  )
}

export default function App() {
  return (
    <Document>
      <Outlet/>
    </Document>
  );
}

export function CatchBoundary(){
const caughtResponse = useCatch()

return <Document title={caughtResponse.statusText}>
<main>
<Error title={caughtResponse.statusText}>
  <p>{caughtResponse.data?.message || 'Something went wront. Please try again later'}</p>
<p>Back to <Link to="/">home</Link></p>
</Error>
</main>
</Document>
}

export function ErrorBoundary({error}){
  return <Document title='An error occurred'>
  <main>
  <Error title='An error occurred'>
    <p>{error.data?.message || 'Something went wront. Please try again later'}</p>
  <p>Back to <Link to="/">home</Link></p>
  </Error>
  </main>
  </Document>
}

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}