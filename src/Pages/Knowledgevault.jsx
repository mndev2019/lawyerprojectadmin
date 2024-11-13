//import React from 'react'
import FormLabel from '../Layout/FormLabel'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useEffect, useState } from 'react';
import { Form } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../Api/Base_url';
import { EditOutlined } from '@ant-design/icons';
import { FaTrash } from 'react-icons/fa';
import SectionTilte from '../Layout/SectionTilte';

const Knowledgevault = () => {
    const [data, setdata] = useState([]);
    const [title, settitle] = useState("");
    const [file, setfile] = useState("");
    const [shortdescription, setshortdescription] = useState("");
    const [description, setdescription] = useState("");
    const [type, settype] = useState("");
    const [editid, seteditid] = useState("");
    
    // const [editimage , seteditimage]= useState("");
    const handlefile = (e) => {
        let selectedfile = e.target.files[0];
        setfile(selectedfile);

    }
    const handledescription = (event, editor) => {
        const data = editor.getData();
        setdescription(data);
    };


    const handlesubmit = async (e) => {
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("type", type);
        formdata.append("title", title);
        formdata.append("short_description", shortdescription);
        formdata.append("description", description);
        formdata.append("image", file);
        // Only append the image if a new file has been selected

        if (editid) {
            formdata.append("id", editid);

            await axios.put(`${BASE_URL}blogs`, formdata).then(resp => console.log(resp))
                .catch(err => console.log(err))
            handleget();
            seteditid('')
        } else {
            await axios.post(`${BASE_URL}blogs`, formdata).then(resp => console.log(resp))
                .catch(err => console.log(err))

        }
        // Refetch data to ensure it is up to date
        handleget();
        // Clear the input fields after submission
        settitle('');
        setshortdescription('');
        setfile('');
        setdescription('');
        settype('');


    }
    const handleedit = (id) => {
        seteditid(id)
        const found = data.find(itm => itm._id == id);
        if (found) {
            settitle(found.title)
            setfile(found.image)
            settype(found.type)
            setdescription(found.description || "");
            setshortdescription(found.short_description)
        } else {
            console.error('Item not found');
        }
    }

    const handleget = async () => {
        await axios.get(`${BASE_URL}blogs`).then(resp => {
            console.log(resp.data.data)
            setdata(resp.data.data)
        })
    }
    useEffect(() => {
        handleget();
    }, [])

    const handledelete = async (id) => {
        if (confirm('Are You Deleted ?')) {
            console.log(id)
            axios.delete(`${BASE_URL}blogs/${id}`).then(resp => {
                console.log("deleted successfully", resp.data)
                handleget();

            })
        }
    }


    return (
        <>
            <section className='py-5'>
                <div className="container">
                <SectionTilte title="KNOWLEDGE VAULT PAGE"/>
                    {/* <img src={`${BASE_URL}${editimage}`} alt='image' className='h-[50px] w-[50px] rounded-[50%] object-cover '/> */}
                    <Form onSubmit={handlesubmit}>
                        <div className="grid grid-cols-3 gap-4">
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
                            <div className="col-span-3">
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
                            </div>
                            <div className="col-span-3">
                                <FormLabel label="Knowledge Vault Description" />
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={description || ""}
                                    onChange={handledescription}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"

                                />
                            </div>
                            <div className="col-span-1 ">
                                <button
                                    type="submit"
                                    className="bg-primary text-xs uppercase font-y tracking-wider text-white px-5 rounded py-3 shadow-sm shadow-light"

                                >
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </Form>
                    <div className="grid grid-cols-1 pt-3">
                        <div className="col-span-1">
                            <div className="w-full">
                                <table className='w-full'>
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
                                                Type
                                            </th>
                                            <th>
                                                Short Description
                                            </th>
                                            <th >

                                                Description
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
                                                            {item.title}
                                                        </td>
                                                        <td>
                                                            <img src={`${BASE_URL}${item.image}`} className='h-[50px] w-[50px] rounded-[50%] object-cover' />

                                                        </td>
                                                        <td>
                                                            {item.type}
                                                        </td>
                                                        <td>
                                                            <div
                                                                style={{
                                                                    display: "-webkit-box",
                                                                    WebkitLineClamp: 5, // Show only 5 lines
                                                                    WebkitBoxOrient: "vertical",
                                                                    overflow: "hidden",
                                                                    textOverflow: "ellipsis",
                                                                    margin: 0,
                                                                }}
                                                            >
                                                                {item.short_description}
                                                            </div>
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
                                                                dangerouslySetInnerHTML={{ __html: item.description }}
                                                            />
                                                        </td>
                                                        <td>
                                                            <div className="flex gap-3">
                                                                <button onClick={() => handleedit(item._id)} className="h-[40px] w-[40px] rounded-[5px] bg-primary flex items-center justify-center">
                                                                    <EditOutlined className='text-white text-[20px] font-[900]' />
                                                                </button>
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

export default Knowledgevault