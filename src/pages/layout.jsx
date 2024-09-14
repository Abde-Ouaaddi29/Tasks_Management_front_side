import { Outlet } from "react-router-dom";
import Nav from "../componants/Nav";

export default function Layout(){


    return <>
    <Nav/>
    <Outlet/>
    </>
}