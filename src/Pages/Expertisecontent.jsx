//import React, { useState } from 'react'
import { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FormLabel from '../Layout/FormLabel'
import { Form, useLocation } from 'react-router-dom';
import SectionTilte from '../Layout/SectionTilte';
import axios from 'axios';
import { BASE_URL } from '../Api/Base_url';

const Expertisecontent = () => {
    const { state } = useLocation()

    const [expertisedata, setexpertisedata] = useState([]);
    const [expertiselist, setexpertiselist] = useState([]);
    // const [expertise_id, setexpertise_id] = useState('');
    const [editid, seteditid] = useState("");
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [uppercontent, setuppercontent] = useState("");
    const [content, setcontent] = useState("");
    const [image, setimage] = useState('');
    // const [benifiticon, setbenifiticon] = useState("");
    // const [benifittitle, setbenifittitle] = useState("");
    // const [benifitdescription, setbenifitdescription] = useState("");
    // const [serviceicon, setserviceicon] = useState("");
    // const [servicetitle, setservicetitle] = useState("");
    // const [servicedescription, setservicedescription] = useState("");

    // const handlebenifiticon = (e) => {
    //     let selctbenifitimage = e.target.files[0];
    //     setbenifiticon(selctbenifitimage)
    // }
    // const handleserviceimage = (e) => {
    //     let selctserviceimage = e.target.files[0];
    //     setserviceicon(selctserviceimage)
    // }
    const handleuppercontent = (event, editor) => {
        const data = editor.getData();
        setuppercontent(data);
    };
    const handlecontent = (event, editor) => {
        const data = editor.getData();
        setcontent(data);
    };

    const handleexpertisedata = async () => {
        await axios.get(`${BASE_URL}expertise`).then(resp => {
            console.log(resp.data.data)
            setexpertisedata(resp.data.data)
        })
    }
    useEffect(() => {
        handleexpertisedata();
    }, [])

    const handlesubmit = async (e) => {

        e.preventDefault();
        let formdata = new FormData();
        formdata.append("expertise_id", expertiselist);
        formdata.append("title", title);
        formdata.append("image", image);
        formdata.append("description", description);
        formdata.append("details", uppercontent);
        formdata.append("content", content);

        // formdata.append("image", benifiticon);
        // formdata.append("benefit_title", benifittitle);
        // formdata.append("benefit_description", benifitdescription);
        // formdata.append("image", serviceicon);
        // formdata.append("service_title", servicetitle);
        // formdata.append("service_description", servicedescription);
        if (editid) {
           formdata.append("id",editid);
            await axios.put(`${BASE_URL}expertise_content`, formdata).then(resp => console.log(resp))
                .catch(err => console.log(err))
        } else {
            await axios.post(`${BASE_URL}expertise_content`, formdata).then(resp => console.log(resp))
                .catch(err => console.log(err))
        }

    }
    const handleEdit = () => {

        setimage(state.image); // Assuming `setTitle` is your state setter for `title`
        settitle(state.title); // Assuming `setPara` is your state setter for `para`
        setdescription(state.description);
        setuppercontent(state.details);
        setcontent(state.content);
        seteditid(state._id);

    }

    useEffect(() => {
        if (state) {
            handleEdit()
        }
    }, [state])
    const handleimage = (e) => {
        let selectfile = e.target.files[0]
        setimage(selectfile)
    }



    return (
        <>
            <section className='py-5'>
                <div className="container">
                <SectionTilte title="EXPERTISE CONTENT"/>
                    <Form onSubmit={handlesubmit}>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-1 mb-4">
                                <FormLabel label="Expertise list" />
                                <select
                                    name="expertisetitle"
                                    value={expertiselist}
                                    onChange={(e) => setexpertiselist(e.target.value)}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                >
                                    <option value="">Select Expertise Title</option>
                                    {expertisedata.map((item) => (
                                        <option key={item._id} value={item.title}>
                                            {item.title}
                                        </option>
                                    ))}

                                </select>
                            </div>
                            <div className="col-span-1 mb-4">
                                <FormLabel label="Expertise Title" />
                                <input
                                    placeholder='Enter title'
                                    type="text"
                                    name="expertisetitle"
                                    value={title}
                                    onChange={(e) => settitle(e.target.value)}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"

                                />
                            </div>

                            <div className="col-span-1 mb-4">
                                <FormLabel label="Image" />
                                <input
                                    placeholder='Enter title'
                                    type="file"
                                    name="expertisetitle"

                                    onChange={(e) => handleimage(e)}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"

                                />
                            </div>

                            <div className="col-span-3 mb-4">
                                <FormLabel label="Expertise description" />
                                <textarea
                                    placeholder='Enter description'
                                    name="expertisedescription"
                                    value={description}
                                    onChange={(e) => setdescription(e.target.value)}
                                    rows="4"
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                />
                            </div>
                            <div className="col-span-3">
                                <FormLabel label="Upper Content" />
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={uppercontent}
                                    onChange={handleuppercontent}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                />
                            </div>
                            <div className="col-span-3">
                                <FormLabel label="Content" />
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={content}
                                    onChange={handlecontent}

                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                />
                            </div>


                            {/* <div className="col-span-1">
                                <FormLabel label="Benefit Icon" />
                                <input
                                    type="file"
                                    name="benefiticon"
                                    id="benefiticon"
                                    onChange={handlebenifiticon}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"

                                />
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="Benefit Title" />
                                <input
                                    placeholder='Enter title'
                                    type="text"
                                    name="benefittitle"
                                    id="benefittitle"
                                    value={benifittitle}
                                    onChange={(e) => setbenifittitle(e.target.value)}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                   
                                />
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="benefit description" />
                                <input
                                    placeholder='Enter description'
                                    type="text"
                                    name="benefitdescription"
                                    id="benefitdescription"
                                    value={benifitdescription}
                                    onChange={(e) => setbenifitdescription(e.target.value)}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    rows="4"

                                />
                            </div>

                            <div className="col-span-4">
                                <div className="w-full bg-primary text-white text-sm font-semibold px-3 py-1 ">
                                    <p>Services</p>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="service Icon" />
                                <input
                                    type="file"
                                    name="serviceicon"
                                    id="serviceicon"
                                    onChange={handleserviceimage}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"

                                />
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="service Title" />
                                <input
                                    placeholder='Enter title'
                                    type="text"
                                    name="servicetitle"
                                    id="servicetitle"
                                    value={servicetitle}
                                    onChange={(e) => setservicetitle(e.target.value)}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"

                                />
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="service description" />
                                <input
                                    placeholder='Enter description'
                                    type="text"
                                    name="servicedescription"
                                    id="servicedescription"
                                    value={servicedescription}
                                    onChange={(e) => setservicedescription(e.target.value)}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    rows="4"

                                />
                            </div> */}
                            {/* <div className="col-span-1 pt-[3rem]">
                                <button
                                    type="submit"
                                    className="bg-primary text-xs uppercase font-y tracking-wider text-white px-5 rounded py-3 shadow-sm shadow-light"

                                >
                                    ADD ROW
                                </button>
                            </div> */}

                            <div className="col-span-3 pt-3">
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

export default Expertisecontent