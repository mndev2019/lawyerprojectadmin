//import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react"
import { BASE_URL } from "../Api/Base_url";
import { EditOutlined } from "@ant-design/icons";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Expertisecontentlist = () => {
    const navigate = useNavigate();
    const [data, setdata] = useState([]);
    const handleget = async () => {
        await axios.get(`${BASE_URL}expertise_content`).then(resp => {
            console.log(resp.data.data)
            setdata(resp.data.data)
        })
    }
    useEffect(() => {
        handleget();
    }, [])
    const handledelete = async (id)=>{
        if(confirm("Are you deleted")){
           console.log(id)
           axios.delete(`${BASE_URL}expertise_content/${id}`).then(resp=>{
               console.log("deleted successfully", resp.data)
               handleget();

           })
        }
   }
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full">
                                <table className="w-full">
                                    <thead>
                                        <tr className="*:text-start *:text-sm *:p-2 *:border *:border-blue-gray-200">

                                            <th>Title</th>
                                            <th>Image</th>
                                            <th>Description</th>
                                            {/* <th>
                                                Benifit Icon
                                            </th>
                                            <th> Benifit Title</th>
                                            <th>Service Icon</th>
                                            <th>Service Title</th> */}
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((itm) => (
                                                <>
                                                    <tr className='*:text-start *:p-2  *:text-xs *:border *:border-blue-gray-200'>
                                                        <td>{itm.title}</td>
                                                        <td>  <img src={`${BASE_URL}${itm.image}`} className='h-[50px] w-[50px] rounded-[50%] object-cover' /></td>
                                                        <td>{itm.description}</td>
                                                        <td>
                                                            <div className="flex gap-3">
                                                                <button onClick={() => navigate('/expertise-content', { state: { ...itm } })}className="h-[40px] w-[40px] rounded-[5px] bg-primary flex items-center justify-center">
                                                                    <EditOutlined className='text-white text-[20px] font-[900]' />
                                                                </button>
                                                                <button onClick={()=> handledelete(itm._id)} className="h-[40px] w-[40px] rounded-[5px] bg-primary flex items-center justify-center">
                                                                    <FaTrash className='text-white text-[20px] font-[900]' />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </>
                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Expertisecontentlist