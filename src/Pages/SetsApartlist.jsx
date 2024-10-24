//import React from 'react'

import { EditOutlined } from "@ant-design/icons"
import axios from "axios";
import { useEffect, useState } from "react"
import { FaTrash } from "react-icons/fa"
import { BASE_URL } from "../Api/Base_url";
import { useNavigate } from "react-router-dom";

const SetsApartlist = () => {
    const navigate = useNavigate();
    const [data, setdata] = useState([]);
    const handleget = async () => {
        await axios.get(`${BASE_URL}apart`).then(resp => {
            console.log(resp.data.data)
            setdata(resp.data.data)
        })
    }
    const handledelete = async (id)=>{
        if(confirm("Are You Deleted")){
            console.log(id);
            await axios.delete(`${BASE_URL}apart/${id}`).then(resp=>{
                console.log("deleted successfully", resp.data)
                handleget();
            })

        }
        
    }

    useEffect(() => {
        handleget();
    }, [])
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full">
                                <table className="w-full">
                                    <thead>
                                        <tr className='*:text-start *:text-sm *:p-2 *:border *:border-blue-gray-200'>
                                            <th>Sr no</th>
                                            <th>Icon</th>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((item, index) => (
                                                <>
                                                    <tr className='*:text-start *:p-2  *:text-xs *:border *:border-blue-gray-200'>
                                                        <td>
                                                            {index + 1}
                                                        </td>
                                                        <td>
                                                            <img src={`${BASE_URL}${item.image}`} alt="image" className="h-[50px] w-[50px] rounded-[50%] object-cover" />
                                                        </td>
                                                        <td>
                                                            {item.title}
                                                        </td>
                                                        <td>
                                                            {item.description}
                                                        </td>
                                                        <td>
                                                            <div className="flex gap-3">
                                                                <button onClick={() => navigate('/sets-apart', { state: { ...item } })} className="h-[40px] w-[40px] rounded-[5px] bg-primary flex items-center justify-center">
                                                                    <EditOutlined className='text-white text-[20px] font-[900]' />
                                                                </button>
                                                                <button onClick={()=>handledelete(item._id)} className="h-[40px] w-[40px] rounded-[5px] bg-primary flex items-center justify-center">
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

export default SetsApartlist