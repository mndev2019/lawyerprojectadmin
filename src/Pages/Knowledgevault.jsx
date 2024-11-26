//import React from 'react'
import FormLabel from '../Layout/FormLabel'
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useEffect, useRef, useState } from 'react';
import { Form, useLocation } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../Api/Base_url';
import SectionTilte from '../Layout/SectionTilte';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill CSS

const Knowledgevault = () => {
    const { state } = useLocation()
    // const [data, setdata] = useState([]);
    const [title, settitle] = useState("");
    const [file, setfile] = useState("");
    const [shortdescription, setshortdescription] = useState("");
    const [description, setdescription] = useState("");
    const [type, settype] = useState("");
    // const [editid, seteditid] = useState("");
    const [publish_date, setpublish_date] = useState("")


    // const [editimage , seteditimage]= useState("");
    const handlefile = (e) => {
        let selectedfile = e.target.files[0];
        setfile(selectedfile);

    }
    // const handledescription = (event, editor) => {
    //     const data = editor.getData();
    //     setdescription(data);
    // };


    const handlesubmit = async (e) => {
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("type", type);
        formdata.append("title", title);
        formdata.append("short_description", shortdescription);
        formdata.append("description", description);
        formdata.append("image", file);
        formdata.append("publish_date", publish_date);
        // Only append the image if a new file has been selected

        if (state) {
            formdata.append("id", state._id);

            await axios.put(`${BASE_URL}blogs`, formdata).then(resp => console.log(resp))
                .catch(err => console.log(err))
            // handleget();
            // seteditid('')
        } else {
            await axios.post(`${BASE_URL}blogs`, formdata).then(resp => console.log(resp))
                .catch(err => console.log(err))

        }
        // Refetch data to ensure it is up to date
        // handleget();
        // Clear the input fields after submission
        settitle('');
        setshortdescription('');
        setfile('');
        setdescription('');
        settype('');
        setpublish_date("");


    }
    const handleEdit = () => {
        settitle(state.title)
        setfile(state.image)
        settype(state.type)
        setpublish_date(state.date)
        setdescription(state.description || "");
        setshortdescription(state.short_description)

    }

    useEffect(() => {
        if (state) {
            handleEdit()
        }
    }, [state])
    const quillRef = useRef(null); // Reference for React Quill
    const handledescription = (value) => {
        setdescription(value);
    };
    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <SectionTilte title="KNOWLEDGE VAULT PAGE" />
                    {/* <img src={`${BASE_URL}${editimage}`} alt='image' className='h-[50px] w-[50px] rounded-[50%] object-cover '/> */}
                    <Form onSubmit={handlesubmit}>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="col-span-1">
                                <FormLabel label="knowledge vault title" />
                                <input
                                    placeholder='Enter title'
                                    type="text"
                                    name="knowledgevaulttitle"
                                    id="knowledgevaulttitle"
                                    value={title}
                                    onChange={(e) => settitle(e.target.value)}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"

                                />
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="Upload Image" />
                                <input
                                    type="file"
                                    name="knowledgevaultimage"
                                    id="knowledgevaultimage"
                                    onChange={handlefile}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    accept="image/*"

                                />
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="Type" />
                                <input
                                    placeholder='Enter type'
                                    type="text"
                                    name="knowledgevaulttype"
                                    id="knowledgevaulttype"
                                    value={type}
                                    onChange={(e) => settype(e.target.value)}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"

                                />
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="Date" />
                                <input
                                    placeholder="Select date"
                                    type="date"
                                    name="knowledgevaultdate"
                                    id="knowledgevaultdate"
                                    value={publish_date}
                                    onChange={(e) => setpublish_date(e.target.value)}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                />
                            </div>
                            {/* <div className="col-span-3">
                                <FormLabel label="Knowledge Vault Short Para" />
                                <textarea
                                    placeholder='Enter short para'
                                    name="knowledgevaultshortpara"
                                    id="knowledgevaultshortpara"
                                    value={shortdescription}
                                    onChange={(e) => setshortdescription(e.target.value)}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    rows="4"

                                />
                            </div> */}
                            <div className="col-span-4">
                                <FormLabel label="Knowledge Vault Description" />
                                {/* <CKEditor
                                    editor={ClassicEditor}
                                    data={description || ""}
                                    onChange={handledescription}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"

                                /> */}
                                <ReactQuill
                                    ref={quillRef}
                                    value={description}
                                    onChange={handledescription}
                                    modules={{
                                        toolbar: [
                                            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                            ['bold', 'italic', 'underline'],
                                            [{ 'align': [] }],
                                            ['link', 'image'], // Add image option
                                        ],
                                        // imageUploader: {
                                        //     upload: handleImageUpload // Custom image upload handler
                                        // },
                                    }}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                />
                            </div>
                            <div className="col-span-1 ">
                                <button
                                    type="submit"
                                    className="bg-primary text-xs uppercase font-y tracking-wider text-white px-5 rounded py-3 shadow-sm shadow-light">
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

export default Knowledgevault