import React, { useEffect, useState } from 'react'
import FormLabel from '../Layout/FormLabel'
import { EditOutlined } from '@ant-design/icons'
import { FaTrash } from 'react-icons/fa'
import { Form } from 'react-router-dom'
import { BASE_URL } from '../Api/Base_url'
import axios from 'axios'

const Testimonial = () => {
    const [data, setdata] = useState([]);
    const [editid, seteditid] = useState("");
    const [name, setname] = useState("");
    const [file, setfile] = useState("");
    const [post, setpost] = useState("");
    const [description, setdescription] = useState("");
    const handlefile = (e) => {
        let selectedfile = e.target.files[0]
        setfile(selectedfile)
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        let formdata = new FormData()
        formdata.append("title", name);
        formdata.append("image", file);
        formdata.append("post", post);
        formdata.append("description", description);
        if (editid) {
           
            await axios.put(`${BASE_URL}testimonial/${editid}`, formdata).then(resp => console.log(resp))
                .catch(err => console.log(err))
            handleget();
            seteditid('')
        } else {
            await axios.post(`${BASE_URL}testimonial`, formdata).then(resp => console.log(resp))
                .catch(err => console.log(err))
        }

        
    }
    const handleget = async () => {
        await axios.get(`${BASE_URL}testimonial`).then(resp => {
            console.log(resp.data.data)
            setdata(resp.data.data)
        })
    }
    useEffect(() => {
        handleget();
    }, [])


    const handleedit = (id) => {
        seteditid(id)
        const found = data.find(itm => itm._id == id);
        if (found) {
            setname(found.title)
            setfile(found.image)
            setpost(found.post)
            setdescription(found.description)
        } else {
            console.error('Item not found');
        }
    }
    const handledelete = async (id) => {
        if (confirm('Are You Deleted ?')) {
            console.log(id)
            axios.delete(`${BASE_URL}testimonial/${id}`).then(resp => {
                console.log("deleted successfully", resp.data)
                handleget();

            })
        }
    }


    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <Form onSubmit={handlesubmit}>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-1">
                                <FormLabel label="name" />
                                <input
                                    placeholder='Enter name'
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setname(e.target.value)}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                 
                                />
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="testimonial image" />
                                <input
                                    type="file"
                                    name="testimonialimage"
                                    id="testimonialimage"
                                    onChange={handlefile}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                 
                                />
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="post" />
                                <input
                                    placeholder='Enter post'
                                    type="text"
                                    name="post"
                                    id="post"
                                    value={post}
                                    onChange={(e) => setpost(e.target.value)}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                   
                                />
                            </div>


                            <div className="col-span-3">
                                <FormLabel label="testimonial description" />
                                <textarea
                                    placeholder='Enter description'
                                    type="text"
                                    name="testimonialdescription"
                                    id="testimonialdescription"
                                    value={description}
                                    onChange={(e) => setdescription(e.target.value)}
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
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
                    <div className="grid grid-cols-1 pt-3">
                        <div className="col-span-1">
                            <div className="w-full">
                                <table className='w-full'>
                                    <thead>
                                        <tr className="*:text-start *:text-sm *:p-2 *:border *:border-blue-gray-200">
                                            <th>
                                                Sr no
                                            </th>
                                            <th>
                                                Name
                                            </th>
                                            <th>
                                                Image
                                            </th>
                                            <th>
                                                Post
                                            </th>
                                            <th>
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
                                                            {item.post}
                                                        </td>
                                                        <td>
                                                            {item.description}
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
            </section >
        </>
    )
}

export default Testimonial