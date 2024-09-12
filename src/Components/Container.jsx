import { useState, useEffect } from 'react';
import Main from './Main.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';



export default function Container(){
    const [data, setData] = useState(null)
    const [isloading, setIsloading] = useState(false)
    
    const [showModal,setShowmodal] = useState(false)

    const handleshowModal = () =>{ setShowmodal(!showModal)} 

    useEffect(() => {
        async function fetchData(){
            const NASA_API_KEY = import.meta.env.VITE_API_KEY
            const url = ' https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_API_KEY}`
            
            try{
                const res = await fetch(url)
                const apidata = await res.json()
                setData(apidata)
                console.log(apidata);
            }
            catch(err){
                console.log(err.message);
            }
        }

        fetchData()

    },[])
    return(
        <> 
                {data ? (<Main data={data}/>) : (
                    <div className='loadingstate'>
                        <i className="fa-solid fa-gear"></i>
                    </div>
                )}

               {showModal && ( <Sidebar showModal = {handleshowModal} data={data}/> )}
                { data && (<Footer showModal = {handleshowModal} data={data}/>)}
        </>
    )
}