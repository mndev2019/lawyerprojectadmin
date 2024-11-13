//import React, { useState } from 'react'
import { useEffect, useState } from 'react';
import FormLabel from '../Layout/FormLabel'
import { Form, useLocation } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../Api/Base_url';
import SectionTilte from '../Layout/SectionTilte';

const SetsApart = () => {
    const [file, setfile] = useState("");
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [editid, seteditid] = useState("");
    const { state } = useLocation()

    const handlefile = (e) => {
        let selectedfile = e.target.files[0];
        setfile(selectedfile)
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("image", file);
        formdata.append("title", title);
        formdata.append("description", description);
        if (editid) {
            await axios.put(`${BASE_URL}apart/${editid}`, formdata).then(resp => console.log(resp))
                .catch(err => console.log(err))
        } else {
            await axios.post(`${BASE_URL}apart`, formdata).then(resp => console.log(resp))
                .catch(err => console.log(err))
        }
    }
    const handleEdit = () => {

        setfile(state.image); // Assuming `setTitle` is your state setter for `title`
        settitle(state.title); // Assuming `setPara` is your state setter for `para`
        setdescription(state.description);
        seteditid(state._id)
    }
    useEffect(() => {
        if (state) {
            handleEdit()
        }
    }, [state])

    return (
        <>
            <section className='py-5'>
                <div className="container">
                <SectionTilte title="SETS US APART CONTENT"/>
                    <Form onSubmit={handlesubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-1">
                                <FormLabel label="sets us apart Icon" />
                                <input
                                    type="file"
                                    name="setsusaparticon"
                                    id="setsusaparticon"
                                    onChange={handlefile}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                  
                                />
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="sets us apart Title" />
                                <input
                                    placeholder='Enter title'
                                    type="text"
                                    name="setsusaparttitle"
                                    id="setsusaparttitle"
                                    value={title}
                                    onChange={(e) => settitle(e.target.value)}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                   
                                />
                            </div>
                            <div className="col-span-2">
                                <FormLabel label="sets us apart description" />
                                <textarea
                                    placeholder='Enter description'
                                    type="text"
                                    name="setsusapartdescription"
                                    id="setsusapartdescription"
                                    value={description}
                                    onChange={(e) => setdescription(e.target.value)}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    rows="4"
                                   
                                />
                            </div>
                            <div className="col-span-1">
                                <button
                                    type="submit"
                                    className="bg-primary text-xs uppercase font-y tracking-wider text-white px-5 rounded py-3 shadow-sm shadow-light"

                                >
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
            </section>
        </>
    )
}

export default SetsApart