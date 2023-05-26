import { Outlet } from "@remix-run/react";
import Header from "~/components/navbar";
import { getUserFromSession } from "../data/auth.server";

export default function HomeAppLayout(){
    return <>
    <Header className='z-50'/>
    <Outlet/>
    </>
}

export function loader({request}){
    return getUserFromSession(request)
}