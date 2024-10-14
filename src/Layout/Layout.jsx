//import React from 'react'

import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

const Layout = () => {
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