import { redirect } from "@remix-run/node"

export function loader({params}){
 if(params['*'] === ''){
    return redirect('/')
 }

    throw new Response('Not found', {status: 404})
}