import React from "react";
import { useNavigate } from "react-router-dom";

export default function MlResponseCard({pro}){
    const navigate = useNavigate()

    function clickHandlerFunction(){
        navigate(`/viewResponse?id=${pro._id}`)
    }

    return(
        <div className="flex flex-col border hover:bg-blue-50 w-4/5 gap-2 mx-auto p-4 shadow-lg rounded-lg my-4 ">
          <p className="text-blue-800">Prompt: {pro.prompt.slice(0, 25)}</p>
          <p className="text-pink-600">Output: {pro.ml_response.modelResponse.slice(0, 50)}</p>
          <hr/>
          <button className="border bg-gradient-to-r from-blue-600 to-pink-300 w-max ml-auto  text-white p-1 px-4  shadow-lg" onClick={clickHandlerFunction}>View Details</button>
        </div>
    )
}