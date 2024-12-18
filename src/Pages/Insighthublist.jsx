//import React from 'react'

import { EditOutlined } from "@ant-design/icons"
import { FaTrash } from "react-icons/fa"
import { BASE_URL } from "../Api/Base_url"
import SectionTilte from "../Layout/SectionTilte"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const Insighthublist = () => {
    const navigate = useNavigate();
    const [data, setdata] = useState([]);
    const handleget = async () => {
        await axios.get(`${BASE_URL}legal-update`).then(resp => {
            console.log(resp.data.data)
            setdata(resp.data.data)
        })
    }
    useEffect(() => {
        handleget();
    }, [])
    const handledelete = async (id) => {
        if (confirm("Are you deleted")) {
            console.log(id)
            axios.delete(`${BASE_URL}legal-update/${id}`).then(resp => {
                console.log("deleted successfully", resp.data)
                handleget();

            })
        }
    }
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <SectionTilte title="Insight Hub LIST" />
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full">
                                <table className="w-full">
                                    <thead>
                                        <tr className="*:text-start *:text-sm *:p-2 *:border *:border-blue-gray-200 bg-black text-white">

                                            <th> Sr no</th>
                                            <th>
                                                Title
                                            </th>
                                            <th>Image</th>
                                            <th>Description</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((itm, index) => (
                                                <>
                                                    <tr className='*:text-start *:p-2  *:text-xs *:border *:border-blue-gray-200'>
                                                        <td>
                                                            {index + 1}
                                                        </td>
                                                        <td>
                                                            {itm.title}
                                                        </td>
                                                        <td>
                                                            <img src={`${BASE_URL}${itm.image}`} className='h-[50px] w-[50px] rounded-[50%] object-cover' />

                                                        </td>


                                                        <td>
                                                            <div
                                                                style={{
                                                                    display: "-webkit-box",
                                                                    WebkitLineClamp: 8, // Show only 3 lines
                                                                    WebkitBoxOrient: "vertical",
                                                                    overflow: "hidden",
                                                                    textOverflow: "ellipsis",
                                                                    margin: 0,
                                                                }}
                                                                dangerouslySetInnerHTML={{ __html: itm.description }}
                                                            />
                                                        </td>
                                                        <td>
                                                            <div className="flex gap-3">
                                                                <button onClick={() => navigate('/insighthub-content', { state: { ...itm } })} className="h-[40px] w-[40px] rounded-[5px] bg-primary flex items-center justify-center">
                                                                    <EditOutlined className='text-white text-[20px] font-[900]' />
                                                                </button>
                                                                <button onClick={() => handledelete(itm._id)} className="h-[40px] w-[40px] rounded-[5px] bg-primary flex items-center justify-center">
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

export default Insighthublist