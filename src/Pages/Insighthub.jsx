import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { BASE_URL } from "../Api/Base_url";
import { Form, useLocation } from 'react-router-dom';
import FormLabel from "../Layout/FormLabel";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import SectionTilte from '../Layout/SectionTilte';
import ReactQuill from "react-quill";

const Insighthub = () => {
    const { state } = useLocation()
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [editid, seteditid] = useState("");
    const [image, setimage] = useState("");
    const [icon, seticon] = useState("");

    // const handledescription = (event, editor) => {
    //     const data = editor.getData();
    //     setdescription(data);
    // };

    const handleimage = (e) => {
        let selectedfile = e.target.files[0]
        setimage(selectedfile)
    }
    // const handleicon = (e) => {
    //     let selectedfile = e.target.files[0]
    //     seticon(selectedfile)
    // }
    const handlesubmit = async (e) => {
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("title", title);
        formdata.append("image", image);
        formdata.append("icon", icon);
        formdata.append("description", description);

        try {
            if (editid) {
                // Edit the insight
                formdata.append("id", editid);
                await axios.put(`${BASE_URL}legal-update`, formdata);
                console.log("Insight updated successfully");
            } else {
                // Create new insight
                await axios.post(`${BASE_URL}legal-update`, formdata);
                console.log("Insight created successfully");
            }

            // Clear form
            settitle('');
            setdescription('');
            setimage("")
            seticon("");
            seteditid('');
        } catch (err) {
            console.log("Error submitting insight:", err);
        }
    };
    const handleEdit = () => {
        settitle(state.title);
        setimage(state.image);
        seticon(state.icon);
        setdescription(state.description || "");
        seteditid(state._id)
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
                    <SectionTilte title="INSIGHT HUB PAGE" />
                    <Form onSubmit={handlesubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-1">
                                <FormLabel label="Insight hub title" />
                                <input
                                    placeholder='Enter title'
                                    type="text"
                                    name="insighthubtitle"
                                    id="insighthubtitle"
                                    value={title}
                                    onChange={(e) => settitle(e.target.value)}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"

                                />
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="Upload Image" />
                                <input
                                    type="file"
                                    name="insighthubimage"
                                    id="insighthubimage"
                                    accept="image/*"
                                    onChange={handleimage}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                />
                            </div>
                            {/* <div className="col-span-1">
                                <FormLabel label="Upload Icon" />
                                <input
                                    type="file"
                                    name="insighthubicon"
                                    id="insighthubicon"
                                    accept="image/*"
                                    onChange={handleicon}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                />
                            </div> */}
                            <div className="col-span-4">
                                <FormLabel label="Insight hub description" />
                                {/* <CKEditor
                                    editor={ClassicEditor}
                                    data={description}
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
                    {/* <div className="grid grid-cols-1 pt-3">
                        <div className="col-span-1">
                            <div className="w-full">
                                <table className='w-full'>
                                    <thead>
                                        <tr className='*:text-start *:text-sm *:p-2 *:border *:border-blue-gray-200 bg-black text-white'>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((itm) => (
                                            <tr key={itm._id} className='*:text-start *:p-2  *:text-xs *:border *:border-blue-gray-200'>
                                                <td>{itm.title}</td>
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
                                                        dangerouslySetInnerHTML={{ __html: itm.description }} />
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
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    );
};

export default Insighthub;