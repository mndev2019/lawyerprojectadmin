//import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { RiDoubleQuotesL } from "react-icons/ri"
import { FaBloggerB } from "react-icons/fa";
import { PiSlidersHorizontalBold } from "react-icons/pi"
import { AiOutlineApartment } from "react-icons/ai"
import { MdInsights, MdLogout, MdOutlineWifiProtectedSetup } from "react-icons/md";
import { TbLogs } from "react-icons/tb";
import { LiaBuromobelexperte } from "react-icons/lia";
import { IoMdContact } from "react-icons/io";
import { IoList } from "react-icons/io5";

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear local storage
        localStorage.clear();

        // Optionally, you can clear session storage too
        // sessionStorage.clear();

        // Redirect to login or homepage
        navigate('/login'); // Adjust this path based on your app
    };

    return (
        <>
            <div className="w-full rounded-e-3xl h-[100%] overflow-x-hidden overflow-y-auto relative bg-white border border-primary ">
                <ul className="*:py-1 px-3 *:text-sm *:font-light *:text-primary">
                    <li>
                        <Link to={'/banner-content'} className='w-full py-1 ps-3 text-start block rounded-lg'>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/banner-content' ? 'bg-primary' : 'bg-[#8080804d] '}`}>
                                    <PiSlidersHorizontalBold className={`text-xl  ${location.pathname === '/banner-content' ? 'text-white' : 'text-black '}`} />

                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/banner-content' ? 'text-primary' : 'text-black'}`}>
                                    Banner Content
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/quotes-content'} className='w-full py-1 ps-3 text-start block rounded-lg '>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/quotes-content' ? 'bg-primary' : 'bg-[#8080804d] '}`}>
                                    <RiDoubleQuotesL className={`text-xl  ${location.pathname === '/quotes-content' ? 'text-white' : 'text-black '}`} />

                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/quotes-content' ? 'text-primary' : 'text-black'}`}>
                                    Quotes Content
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/expertise'} className='w-full py-1 ps-3 text-start block rounded-lg '>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/expertise' ? 'bg-primary' : 'bg-[#8080804d] '}`}>
                                    <LiaBuromobelexperte className={`text-xl  ${location.pathname === '/expertise' ? 'text-white' : 'text-black '}`} />
                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/expertise' ? 'text-primary' : 'text-black'}`}>
                                    Expertise
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/expertise-content'} className='w-full py-1 ps-3 text-start block rounded-lg '>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/expertise-content' ? 'bg-primary' : 'bg-[#8080804d] '}`}>
                                    <LiaBuromobelexperte className={`text-xl  ${location.pathname === '/expertise-content' ? 'text-white' : 'text-black '}`} />
                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/expertise-content' ? 'text-primary' : 'text-black'}`}>
                                    Expertise Content
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/expertise-contentlist'} className='w-full py-1 ps-3 text-start block rounded-lg '>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/expertise-contentlist' ? 'bg-primary' : 'bg-[#8080804d] '}`}>
                                    <IoList className={`text-xl  ${location.pathname === '/expertise-contentlist' ? 'text-white' : 'text-black '}`} />
                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/expertise-contentlist' ? 'text-primary' : 'text-black'}`}>
                                    Expertise Content List
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/sets-apart'} className='w-full py-1 ps-3 text-start block rounded-lg '>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/sets-apart' ? 'bg-primary' : 'bg-[#8080804d] '}`}>
                                    <AiOutlineApartment className={`text-xl  ${location.pathname === '/sets-apart' ? 'text-white' : 'text-black '}`} />
                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/sets-apart' ? 'text-primary' : 'text-black'}`}>
                                    Sets Us Apart
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/setsapartlist'} className='w-full py-1 ps-3 text-start block rounded-lg '>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/setsapartlist' ? 'bg-primary' : 'bg-[#8080804d] '}`}>
                                    <IoList className={`text-xl  ${location.pathname === '/setsapartlist' ? 'text-white' : 'text-black '}`} />
                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/setsapartlist' ? 'text-primary' : 'text-black'}`}>
                                    Sets Us Apart List
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/testimonial-content'} className='w-full py-1 ps-3 text-start block rounded-lg '>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/testimonial-content' ? 'bg-primary' : 'bg-[#8080804d] '}`}>
                                    <TbLogs className={`text-xl  ${location.pathname === '/testimonial-content' ? 'text-white' : 'text-black '}`} />
                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/testimonial-content' ? 'text-primary' : 'text-black'}`}>
                                    Testimonial Content
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/insighthub-content'} className='w-full py-1 ps-3 text-start block rounded-lg '>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/insighthub-content' ? 'bg-primary' : 'bg-[#8080804d] '}`}>
                                    <MdInsights className={`text-xl  ${location.pathname === '/insighthub-content' ? 'text-white' : 'text-black '}`} />
                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/insighthub-content' ? 'text-primary' : 'text-black'}`}>
                                    Insight Hub Content
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/insighthub-list'} className='w-full py-1 ps-3 text-start block rounded-lg '>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/insighthub-list' ? 'bg-primary' : 'bg-[#8080804d] '}`}>
                                    <MdInsights className={`text-xl  ${location.pathname === '/insighthub-list' ? 'text-white' : 'text-black '}`} />
                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/insighthub-list' ? 'text-primary' : 'text-black'}`}>
                                    Insight Hub List
                                </div>
                            </div>
                        </Link>
                    </li>
                    {/* <li>
                        <Link to={'/legal-updates'} className='w-full py-1 ps-3 text-start block rounded-lg '>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/legal-updates' ? 'bg-primary' : 'bg-[#8080804d] '}`}>
                                    <MdInsights className={`text-xl  ${location.pathname === '/legal-updates' ? 'text-white' : 'text-black '}`} />
                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/legal-updates' ? 'text-primary' : 'text-black'}`}>
                                    Legal Updates
                                </div>
                            </div>
                        </Link>
                    </li> */}
                    <li>
                        <Link to={'/knowledge-vault'} className='w-full py-1 ps-3 text-start block rounded-lg '>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/knowledge-vault' ? 'bg-primary' : 'bg-[#8080804d] '}`}>
                                    <FaBloggerB className={`text-xl  ${location.pathname === '/knowledge-vault' ? 'text-white' : 'text-black '}`} />
                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/knowledge-vault' ? 'text-primary' : 'text-black'}`}>
                                    Knowledge Vault
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/knowledge-vaultlist'} className='w-full py-1 ps-3 text-start block rounded-lg '>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/knowledge-vaultlist' ? 'bg-primary' : 'bg-[#8080804d] '}`}>
                                    <IoList className={`text-xl  ${location.pathname === '/knowledge-vaultlist' ? 'text-white' : 'text-black '}`} />
                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/knowledge-vaultlist' ? 'text-primary' : 'text-black'}`}>
                                    Knowledge Vault List
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/pro-bono'} className='w-full py-1 ps-3 text-start block rounded-lg '>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/pro-bono' ? 'bg-primary' : 'bg-[#8080804d] '}`}>
                                    <MdOutlineWifiProtectedSetup className={`text-xl  ${location.pathname === '/pro-bono' ? 'text-white' : 'text-black '}`} />
                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/pro-bono' ? 'text-primary' : 'text-black'}`}>
                                    Pro Bono
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/carrer'} className='w-full py-1 ps-3 text-start block rounded-lg '>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/carrer' ? 'bg-primary' : 'bg-[#8080804d] '}`}>
                                    <IoMdContact className={`text-xl  ${location.pathname === '/carrer' ? 'text-white' : 'text-black '}`} />
                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/carrer' ? 'text-primary' : 'text-black'}`}>
                                    Career
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/contact'} className='w-full py-1 ps-3 text-start block rounded-lg '>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/contact' ? 'bg-primary' : 'bg-[#8080804d] '}`}>
                                    <IoMdContact className={`text-xl  ${location.pathname === '/contact' ? 'text-white' : 'text-black '}`} />
                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/contact' ? 'text-primary' : 'text-black'}`}>
                                    Contact
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/login'} className='w-full py-1 ps-3 text-start block rounded-lg ' onClick={handleLogout}>
                            <div className="w-full flex gap-3 items-center hover:bg-[#8080802d] rounded-md">
                                <div className={`h-[40px] w-[40px] flex justify-center items-center rounded-md ${location.pathname === '/logout' ? 'bg-primary' : 'bg-[#8080804d] '}`}>
                                    <MdLogout className={`text-xl  ${location.pathname === '/logout' ? 'text-white' : 'text-black '}`} />
                                </div>
                                <div className={`font-bold text-[15px] ${location.pathname === '/logout' ? 'text-primary' : 'text-black'}`}>
                                    Logout
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