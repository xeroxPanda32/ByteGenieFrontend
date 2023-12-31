import { useState } from 'react';
import axios from 'axios'
import uploadIcon from '../assets/uploadIcon.png'
import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function DocUpload() {
    const navigate = useNavigate()
    const backenedUrl = process.env.REACT_APP_BACKEND_URL
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);

    function fileChangeHandler(event) {
        const file = event.target.files && event.target.files[0];
        setSelectedFile(file);
    }

    function dashboardHandler(){
        navigate('/dashboard')
    }

    async function fileUploadHandler() {
        if (!selectedFile) {
            return;
        }
        const formData = new FormData();
        formData.append('file', selectedFile);

        setLoading(true)
        const response = await axios.post(backenedUrl+'/getdoc/uploadfile', formData)

        if (response.status === 200) {
            navigate(`/viewResponse?id=${response.data._id}`)
        }
        setLoading(false)
    }

    return (
        <> 
        <Navbar/>
            <div className='bg-slate-100 h-screen w-screen p-10 pt-20 sm:p-20 flex sm:flex-row flex-col'>
                <div className=' w-full sm:w-1/2 sm:text-[80px] text-[50px] h-max text-blue-600 font-bold'>
                    <p>Get Summary</p>
                    <p>From Text</p>
                    <button className='text-3xl border bg-gradient-to-r from-blue-600 to-pink-300 w-4/5 mx-auto my-5 text-white p-2 rounded-lg shadow-lg ' onClick={dashboardHandler}>Dashboard</button>
                </div>
                <div className=' w-full sm:w-2/5 border-blue-500 border-8 shadow-2xl opacity-80 rounded-xl h-max  ml-auto pt-10 bg-slate-200 relative flex flex-col'>
                    {loading
                        ? <div className='w-max mx-auto my-auto h-max'><ReactLoading color='blue' type="spin" height={200} width={200} /></div>
                        : <><label className='ml-[10%] mb-5 w-max' htmlFor="enteredFile">Please upload a file(.txt only)</label>
                            <div className='bg-blue-200 w-[80%]  cursor-pointer p-10 rounded-3xl relative mx-auto' onClick={fileChangeHandler}>
                                <img className='w-full h-full ' src={uploadIcon} alt='upload-icon' />
                                <input accept='.txt' className='w-full h-full z-8 cursor-pointer bg-white absolute top-0 left-0 opacity-0' type="file" onChange={fileChangeHandler} />
                            </div>
                            <div className='w-max my-auto h-max ml-[10%]'>{selectedFile && `${selectedFile.name} - ${selectedFile.type}`}</div>
                            <button className='border bg-gradient-to-r from-blue-600 to-pink-300 w-4/5 mx-auto my-5 text-white p-2 rounded-lg shadow-lg ' onClick={fileUploadHandler}>Upload</button></>
                    }
                </div>
           </div>
        </>
    );
}



