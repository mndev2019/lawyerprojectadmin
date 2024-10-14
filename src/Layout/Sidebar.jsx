//import React from 'react'
import { HomeFilled, WindowsFilled } from "@ant-design/icons"
import propertytype from '../assets/building.png'
import { Link, useLocation } from "react-router-dom"


import { RiDoubleQuotesL } from "react-icons/ri"

import { FaBloggerB } from "react-icons/fa";
import { PiSlidersHorizontalBold } from "react-icons/pi"
import { AiOutlineApartment } from "react-icons/ai"
import { MdInsights, MdOutlineWifiProtectedSetup } from "react-icons/md"
import { TbLogs } from "react-icons/tb";
import { LiaBuromobelexperte } from "react-icons/lia";

const Sidebar = () => {
    const location = useLocation();
    return (
        <>
 <div className="w-full rounded-e-3xl h-[100%] overflow-x-hidden overflow-y-auto relative bg-white border border-primary ">
 <ul className="*:py-1 px-3 *:text-sm *:font-light *:text-primary">

                    <li>
                        <Link to={'/'} className='w-full py-2 ps-3 text-start block rounded-lg'>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/' ? 'bg-primary' : 'bg-[#8080804d] hover:bg-white'}`}>
                                    <WindowsFilled className={`text-xl hover:text-primary ${location.pathname === '/' ? 'text-white' : 'text-black '}`} />
                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/' ? 'text-primary' : 'text-black'}`}>
                                    Dashboard
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/banner-content'} className='w-full  py-2 ps-3 text-start block rounded-lg'>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/banner-content' ? 'bg-primary' : 'bg-[#8080804d] hover:bg-white'}`}>
                                    <PiSlidersHorizontalBold className={`text-xl hover:text-primary ${location.pathname === '/banner-content' ? 'text-white' : 'text-black '}`} />

                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/banner-content' ? 'text-primary' : 'text-black'}`}>
                                    Banner Content
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/quotes-content'} className='w-full  py-2 ps-3 text-start block rounded-lg '>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/quotes-content' ? 'bg-primary' : 'bg-[#8080804d] hover:bg-white'}`}>
                                    <RiDoubleQuotesL className={`text-xl hover:text-primary ${location.pathname === '/quotes-content' ? 'text-white' : 'text-black '}`}/>

                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/quotes-content' ? 'text-primary' : 'text-black'}`}>
                                    Quotes Content
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/expertise-content'} className='w-full  py-2 ps-3 text-start block rounded-lg '>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/expertise-content' ? 'bg-primary' : 'bg-[#8080804d] hover:bg-white'}`}>
                                    <LiaBuromobelexperte className={`text-xl hover:text-primary ${location.pathname === '/expertise-content' ? 'text-white' : 'text-black '}`}/>
                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/expertise-content' ? 'text-primary' : 'text-black'}`}>
                                    Expertise Content
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/sets-apart'} className='w-full  py-2 ps-3 text-start block rounded-lg '>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/sets-apart' ? 'bg-primary' : 'bg-[#8080804d] hover:bg-white'}`}>
                                    <AiOutlineApartment className={`text-xl hover:text-primary ${location.pathname === '/sets-apart' ? 'text-white' : 'text-black '}`} />
                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/sets-apart' ? 'text-primary' : 'text-black'}`}>
                                    Sets Us Apart
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/testimonial-content'} className='w-full  py-2 ps-3 text-start block rounded-lg '>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/testimonial-content' ? 'bg-primary' : 'bg-[#8080804d] hover:bg-white'}`}>
                                    <TbLogs className={`text-xl hover:text-primary ${location.pathname === '/testimonial-content' ? 'text-white' : 'text-black '}`} />
                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/testimonial-content' ? 'text-primary' : 'text-black'}`}>
                                    Testimonial Content
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/insighthub-content'} className='w-full  py-2 ps-3 text-start block rounded-lg '>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/insighthub-content' ? 'bg-primary' : 'bg-[#8080804d] hover:bg-white'}`}>
                                    <MdInsights className={`text-xl hover:text-primary ${location.pathname === '/insighthub-content' ? 'text-white' : 'text-black '}`} />
                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/insighthub-content' ? 'text-primary' : 'text-black'}`}>
                                    Insight Hub Content
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/knowledge-vault'} className='w-full  py-2 ps-3 text-start block rounded-lg '>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/knowledge-vault' ? 'bg-primary' : 'bg-[#8080804d] hover:bg-white'}`}>
                                    <FaBloggerB className={`text-xl hover:text-primary ${location.pathname === '/knowledge-vault' ? 'text-white' : 'text-black '}`} />
                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/knowledge-vault' ? 'text-primary' : 'text-black'}`}>
                                    Knowledge Vault
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/pro-bono'} className='w-full  py-2 ps-3 text-start block rounded-lg '>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/pro-bono' ? 'bg-primary' : 'bg-[#8080804d] hover:bg-white'}`}>
                                    <MdOutlineWifiProtectedSetup className={`text-xl hover:text-primary ${location.pathname === '/pro-bono' ? 'text-white' : 'text-black '}`} />
                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/pro-bono' ? 'text-primary' : 'text-black'}`}>
                                    Pro Bono
                                </div>
                            </div>
                        </Link>
                    </li>


                </ul>
            </div>
        </>
    )
}

export default Sidebar