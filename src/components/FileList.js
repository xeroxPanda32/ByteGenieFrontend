import React, { useEffect, useState } from 'react'
import MlResponseCard from './MlResponseCard'
import axios from 'axios'



export default function FileList(props) {
    const backenedUrl = process.env.REACT_APP_BACKEND_URL
    const [responses, setResponses] = useState([])
    useEffect(() => {
        async function fetchResponses() {
            const response = await axios.get(backenedUrl+'/getdoc/allResponses')
            if (response.status === 200) {
                setResponses(response.data)
            }
         }
        fetchResponses()
    }, [])
    return (
        <>{responses.map((response, index) => <MlResponseCard key={index} pro={response} />)}</>
    )

}