import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar';

export default function FileDetail(){
    const backenedUrl = process.env.REACT_APP_BACKEND_URL
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id")
    const [data, setData] = useState()
    const [date, setDate] = useState('')
    useEffect(()=>{
        if(id){
            fetchData(id)
        }
            
    }, [id])

    async function fetchData(id){
        const res = await axios.get(backenedUrl+"/getdoc/responsedetails", { params: { id }})
        if(res && res.status === 200 && res.data){
            setData(res.data)
            const d = new Date(res.data.request_id.timestamp)
            setDate(d.toLocaleString())
        } else {
            alert("no record found")
        } 
    }
    return(
    <div className='pt-20'>
        <Navbar/>
            <div className='border p-10 w-4/5 h-max mx-auto shadow-xl'>
           <p>Date: {date}</p>
           <hr/>
              <p>Uploaded File: { data && data.request_id && data.request_id.doc_name}</p>
              <div className='my-10 border rounded-lg p-4 bg-blue-100'>
                <p>Extracted content from File</p>
                <hr className='my-2 h-1 bg-blue-300'/>
                <p className='font-bold'>{ data &&data.prompt}</p>
              </div>
              <div className='my-10 border rounded-lg p-4 bg-pink-100' >
                <p>Generated Content</p>
                <hr className='my-2 h-1 bg-pink-300'/>
                <p className='font-bold'>{data && data.ml_response && data.ml_response.modelResponse}</p>
              </div>
               </div>
    </div>
    )
}