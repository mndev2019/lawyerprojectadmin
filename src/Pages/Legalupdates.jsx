//import React from 'react'

import axios from "axios";
import { BASE_URL } from "../Api/Base_url";
import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import FormLabel from "../Layout/FormLabel";
import { EditOutlined } from "@ant-design/icons";
import { FaTrash } from "react-icons/fa";
import SectionTilte from '../Layout/SectionTilte';

const Legalupdates = () => {
    const [data, setdata] = useState([]);
    const [file, setfile] = useState("");
    const [icon, seticon] = useState("");
    const [title, settitle] = useState("");
    
    const [editid, seteditid] = useState("");

    const handlefile = (e) => {
        let selectedfile = e.target.files[0];
        setfile(selectedfile)
    }
    const handleicon = (e) => {
        let selectedicon = e.target.files[0];
        seticon(selectedicon)
    }

    // const handledescription = (event, editor) => {
    //     const data = editor.getData();
    //     setdescription(data);
    // };

    const handlesubmit = async (e) => {
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("image", file);
        formdata.append("icon", icon);
        formdata.append("title", title);
      
        // formdata.append("description", description);


        console.log("hello",editid)
        if (editid) {
            formdata.append("id",editid);
            await axios.put(`${BASE_URL}legal-update`,formdata).then(resp => console.log(resp))
                .catch(err => console.log(err))
            handleget()
            seteditid('')
        } else {
            await axios.post(`${BASE_URL}legal-update`, formdata).then(resp => console.log(resp))
                .catch(err => console.log(err))
        }
        // Refetch data to ensure it is up to date
        handleget();
        // Clear the input fields after submission
        settitle('');
        
        setfile('');

    }

    const handleedit = (id) => {
        seteditid(id)
        const found = data.find(itm => itm._id == id);

        if (found) {
            settitle(found.title);
           
            // setdescription(found.description); // 
            setfile(found.image); //
        } else {
            console.error('Item not found');
        }
    }


    const handleget = async () => {
        await axios.get(`${BASE_URL}legal-update`).then(resp => {
            console.log(resp.data.data);
            setdata(resp.data.data)

        })
    }

    const handledelete = async (id) => {
        if (confirm('Are You Deleted ?')) {
            console.log(id)
            axios.delete(`${BASE_URL}legal-update/${id}`).then(resp => {
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
                <SectionTilte title="LEGAL UPDATES PAGE"/>
                    <Form onSubmit={handlesubmit}>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-1">
                                <FormLabel label=" Title" />
                                <input
                                    placeholder='Enter title'
                                    type="text"
                                    name="title"
                                    id="title"
                                    value={title}
                                    onChange={(e) => settitle(e.target.value)}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"

                                />
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="Upload Image" />
                                <input
                                    type="file"
                                    name="file"
                                    id="file"
                                    onChange={handlefile}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"

                                />
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="Upload Icon" />
                                <input
                                    type="file"
                                    name="file"
                                    id="file"
                                    onChange={handleicon}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"

                                />
                            </div>
                            
                            <div className="col-span-1 pt-3 ">
                                <button
                                    type="submit"
                                    className="bg-primary text-xs uppercase font-y tracking-wider text-white px-5 rounded py-3 shadow-sm shadow-light"

                                >
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </Form>
                    <div className="grid grid-cols-1 pt-2">
                        <div className="col-span-1">
                            <div className="w-full">
                                <table className="w-full">
                                    <thead>
                                        <tr className="*:text-start *:text-sm *:p-2 *:border *:border-blue-gray-200 bg-black text-white">
                                            <th>
                                                Sr no
                                            </th>
                                            <th>
                                                Title
                                            </th>
                                            <th>
                                                Image
                                            </th>
                                            <th>
                                                Icon
                                            </th>
                                            
                                            <th>
                                                Action
                                            </th>
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
                                                            <img src={`${BASE_URL}${itm.image}`} alt="image" className="h-[50px] w-[50px] rounded-[50%] object-cover" />
                                                        </td>
                                                        <td>
                                                            <img src={`${BASE_URL}${itm.icon}`} alt="image" className="h-[50px] w-[50px] rounded-[50%] object-cover" />
                                                        </td>
                                                      
                                                        <td>
                                                            <div className="flex gap-3">
                                                                <button onClick={() => handleedit(itm._id)} className="h-[40px] w-[40px] rounded-[5px] bg-primary flex items-center justify-center">
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

export default Legalupdates