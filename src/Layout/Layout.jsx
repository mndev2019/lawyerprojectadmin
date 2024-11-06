import React from 'react'

import { Outlet , useNavigate } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

const Layout = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token") ?? null;   

   
    React.useEffect(() => {
        if(token){
            navigate('/banner-content')
        }else{
            navigate('/login');
        }
    }, [token, navigate]);

    return (
        <>
           <Header/> 
            <div className="flex">
                <div className={`py-3 overflow-x-hidden bg-transparent transition-all duration-300 w-[20%] h-screen`}>
                    <Sidebar />
                </div>
                <div className="w-[80%]">
                    <main className='p-5 pb-28'>
                        {<Outlet />}
                    </main>
                </div>
            </div>
         <Footer/>
        </>
    )
}

export default Layout