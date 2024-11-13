//import React from 'react'
import { useEffect, useState } from 'react'
import FormLabel from '../Layout/FormLabel'
import { Form } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../Api/Base_url';
import { FaTrash } from 'react-icons/fa';
import { EditOutlined } from '@ant-design/icons';
import SectionTilte from '../Layout/SectionTilte';
// import SectionTilte from '../Layout/SectionTilte'

const Bannercontent = () => {
    const [data, setdata] = useState([]);
    const [editid, seteditid] = useState("");
    const [title, settitle] = useState("");
    const [file, setfile] = useState("");
    const [para, setpara] = useState("");
    
    const handleimage = (e) => {
        let selectedfile = e.target.files[0]
        setfile(selectedfile)
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        let formdata = new FormData()
        formdata.append("title", title);
        formdata.append("image", file);
        formdata.append("para", para);
        if (editid) {
            formdata.append("id", editid)
            await axios.put(`${BASE_URL}banner`, formdata).then(resp => console.log(resp))
                .catch(err => console.log(err))
            handleget();
            seteditid('')
        } else {
            await axios.post(`${BASE_URL}banner`, formdata).then(resp => console.log(resp))
                .catch(err => console.log(err))

        }
        // Refetch data to ensure it is up to date
        handleget();
        // Clear the input fields after submission
        settitle('');
        setpara('');
        setfile('');

    }

    const handleget = async () => {
        axios.get(`${BASE_URL}banner`).then(resp => {
            console.log(resp.data.data)
            setdata(resp.data.data)

        })
    }

    const handleedit = (id) => {
        seteditid(id)
        const found = data.find(itm => itm._id == id);

        if (found) {
            // If found, set the relevant states
            console.log(found.title);
            settitle(found.title); // Assuming `setTitle` is your state setter for `title`
            setpara(found.para); // Assuming `setPara` is your state setter for `para`
            setfile(found.image); // Assuming `setFile` is your state setter for `file/image`
        } else {
            console.error('Item not found');
        }


    }
    const handledelete = async (id) => {
        if (confirm('Are You Deleted ?')) {
            console.log(id)
            axios.delete(`${BASE_URL}banner/${id}`).then(resp => {
                console.log("deleted successfully", resp.data)
                handleget();

            })
        }
    }

    useEffect(() => {
        handleget();
    }, []);
    return (
        <>
            <section className='py-5'>
                <div className="container">
                <SectionTilte title="BANNER CONTENT"/>
                    <Form onSubmit={handlesubmit}>
                        <div className="grid grid-cols-4 gap-4 ">
                            <div className="col-span-1">
                                <FormLabel label="Banner Title" />
                                <input
                                    placeholder='Enter title'
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    value={title}
                                    onChange={(e) => settitle(e.target.value)}
                               
                                />
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="Upload Banner" />
                                <input
                                    type="file"
                                    name="banner"
                                    id="banner"
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    onChange={(e) => handleimage(e)}
                                
                                />
                            </div>
                            <div className="col-span-4">
                                <FormLabel label="Banner Para" />
                                <textarea
                                    placeholder='Enter para'
                                    type="text"
                                    name="para"
                                    id="para"
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    value={para}
                                    onChange={(e) => setpara(e.target.value)}
                                    rows="4"
                                 
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
                    <div className="grid grid-cols-1 mt-3">
                        <div className="col-span-1">
                            <div className="w-full">
                                <table className='w-full'>
                                    <thead>
                                        <tr className="*:text-start *:text-sm *:p-2 *:border *:border-blue-gray-200 bg-black text-white">
                                            <th>Sr no </th>
                                            <th>Title</th>
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
                                                            {itm.para}
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

export default Bannercontent