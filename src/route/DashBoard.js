import React from "react";
import FileList from "../components/FileList";
import Navbar from "../components/Navbar";

export default function DashBoard(){
    return(
        <div className="pt-20">
            <Navbar />
            <FileList/>
        </div>
    )
}