//import React from 'react'
import { EditOutlined } from '@ant-design/icons'
import FormLabel from '../Layout/FormLabel'
import { FaTrash } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { Form } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../Api/Base_url'

const Quotescontent = () => {
    const [data, setdata] = useState([]);
    const [editid, seteditid] = useState("");
    const [quote, setquote] = useState("");
    const [objective, setobjective] = useState("");
    const [purpose, setpurpose] = useState("");
    const handlesubmit = async (e) => {
        e.preventDefault();
        let requestdata = {
            quotes: quote,
            objective: objective,
            purpose: purpose,
        }
        if (editid) {
            requestdata.id = editid;
            await axios.put(`${BASE_URL}quote`,requestdata).then(resp => console.log(resp))
                .catch(err => console.log(err))
            handleget();
            seteditid('')
        } else {
            await axios.post(`${BASE_URL}quote`, requestdata).then(resp => console.log(resp))
                .catch(err => console.log(err))
        }

        // Refetch data to ensure it is up to date
        handleget();
        // Clear the input fields after submission
        setquote('');
        setobjective('');
        setpurpose('');

    }
    const handleget = async () => {
        await axios.get(`${BASE_URL}quote`).then(resp => {
            console.log(resp.data.data)
            setdata(resp.data.data)
        })
    }
    const handleedit = (id) => {
        seteditid(id)
        const found = data.find(itm => itm._id == id);
        if (found) {
            setquote(found.quotes)
            setobjective(found.objective)
            setpurpose(found.purpose)
        } else {
            console.error('Item not found');
        }
    }

    const handledelete = async (id)=>{
         if(confirm("Are you deleted")){
            console.log(id)
            axios.delete(`${BASE_URL}quote/${id}`).then(resp=>{
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
            <section className='py-5'>
                <div className="container">
                    <Form onSubmit={handlesubmit}>
                        <div className="grid grid-cols-4 gap-4 ">
                            <div className="col-span-1">
                                <FormLabel label="QUOTES" />
                                <input
                                    placeholder='Enter quotes'
                                    type="text"
                                    name="quotes"
                                    id="quotes"
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    value={quote}
                                    onChange={(e) => setquote(e.target.value)}
                               
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-3">
                            <div className="col-span-1">
                                <FormLabel label="objective" />
                                <textarea
                                    placeholder="Enter objective"
                                    name="objective"
                                    id="objective"
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    value={objective}
                                    onChange={(e) => setobjective(e.target.value)}
                                    rows="4"
                                    
                                />
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="purpose" />
                                <textarea
                                    placeholder='Enter purpose'
                                    type="text"
                                    name="purpose"
                                    id="purpose"
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    value={purpose}
                                    onChange={(e) => setpurpose(e.target.value)}
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
                                        <tr className='*:text-start *:text-sm *:p-2 *:border *:border-blue-gray-200'>
                                            <th>Sr no</th>
                                            <th>Quotes</th>
                                            <th>Objective</th>
                                            <th>Purpose</th>
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
                                                            {itm.quotes}
                                                        </td>
                                                        <td>
                                                            {itm.objective}
                                                        </td>
                                                        <td>
                                                            {itm.purpose}
                                                        </td>
                                                        <td>
                                                            <div className="flex gap-3">
                                                                <button onClick={() => handleedit(itm._id)} className="h-[40px] w-[40px] rounded-[5px] bg-primary flex items-center justify-center">
                                                                    <EditOutlined className='text-white text-[20px] font-[900]' />
                                                                </button>
                                                                <button onClick={()=> handledelete(itm._id)} className="h-[40px] w-[40px] rounded-[5px] bg-primary flex items-center justify-center">
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

export default Quotescontent