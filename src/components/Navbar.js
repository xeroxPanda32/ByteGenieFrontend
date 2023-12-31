import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(<div className="h-12 fixed bg-blue-500 top-0 z-10 w-screen flex justify-between p-2 px-10 text-white ">
        <Link to={'/'} >Home</Link>
        <Link to={'/dashboard'} >DashBoard</Link>
    </div>)
}