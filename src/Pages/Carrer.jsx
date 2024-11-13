import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../Api/Base_url';
import { FaTrash } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';
import SectionTilte from '../Layout/SectionTilte';

const Carrer = () => {
    const [data, setdata] = useState([]);
    const handleget = async () => {
        try {
            const response = await axios.get(`${BASE_URL}contacts`);
            const filteredData = response.data.data.filter(item => item.type === "carrer");
            setdata(filteredData);
        } catch (error) {
            console.error("Error fetching contacts:", error);
        }
    }
    useEffect(() => {
        handleget();
    }, [])

    const handledelete = async (id) => {
        if (confirm('Are You Deleted ?')) {
            console.log(id)
            axios.delete(`${BASE_URL}contacts/${id}`).then(resp => {
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
                        <SectionTilte title="CAREER PAGE"/>
                        <div className="col-span-1">
                            <div className="w-full">
                                <table className='w-full'>
                                    <thead>
                                        <tr className="*:text-start *:text-sm *:p-2 *:border *:border-blue-gray-200 bg-black text-white">
                                            <th>
                                                Sr no
                                            </th>
                                            <th>
                                                Name
                                            </th>
                                            <th>
                                                Type
                                            </th>
                                            <th>
                                                Email
                                            </th>
                                            <th>
                                                Mobile no
                                            </th>
                                            <th>
                                                Qualification
                                            </th>
                                            <th>
                                                Experience
                                            </th>
                                            <th>
                                                CV
                                            </th>
                                            <th>
                                                Research Paper
                                            </th>
                                            <th>
                                                Action
                                            </th>
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
                                                            {item.name}
                                                        </td>
                                                        <td>
                                                            {item.type}

                                                        </td>
                                                        <td>
                                                            {item.email}
                                                        </td>
                                                        <td>
                                                            {item.mobile}
                                                        </td>
                                                        <td>
                                                            {item.qualification}
                                                        </td>
                                                        <td>
                                                            {item.experience}
                                                        </td>
                                                        <td>
                                                            <button
                                                                onClick={() => window.open(`${BASE_URL}${item.image}`, "_blank")}
                                                                className="h-[40px] w-[40px] rounded-[5px] bg-primary flex items-center justify-center"
                                                            >
                                                                <IoDocumentText className="text-white text-[20px] font-[900]" />
                                                            </button>
                                                        </td>
                                                        <td>
                                                        <button
                                                                onClick={() => window.open(`${BASE_URL}${item.icon}`, "_blank")}
                                                                className="h-[40px] w-[40px] rounded-[5px] bg-primary flex items-center justify-center"
                                                            >
                                                                <IoDocumentText className="text-white text-[20px] font-[900]" />
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <div className="flex gap-3">

                                                                <button onClick={() => handledelete(item._id)} className="h-[40px] w-[40px] rounded-[5px] bg-primary flex items-center justify-center">
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

export default Carrer