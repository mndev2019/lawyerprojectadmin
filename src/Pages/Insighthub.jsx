import { EditOutlined } from "@ant-design/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { BASE_URL } from "../Api/Base_url";
import { Form } from "react-router-dom";
import FormLabel from "../Layout/FormLabel";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import SectionTilte from '../Layout/SectionTilte';

const Insighthub = () => {
    const [data, setdata] = useState([]);  // Initialize data as an array
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [editid, seteditid] = useState("");

    const handledescription = (event, editor) => {
        const data = editor.getData();
        setdescription(data);
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        let requestdata = {
            title: title,
            description: description,
        };
        try {
            if (editid) {
                // Edit the insight
                await axios.put(`${BASE_URL}insights/${editid}`, requestdata);
                console.log("Insight updated successfully");
            } else {
                // Create new insight
                await axios.post(`${BASE_URL}insights`, requestdata);
                console.log("Insight created successfully");
            }
            handleget();
            // Clear form
            settitle('');
            setdescription('');
            seteditid('');
        } catch (err) {
            console.log("Error submitting insight:", err);
        }
    };

    const handleget = async () => {
        try {
            const resp = await axios.get(`${BASE_URL}insights`);
            console.log(resp.data.data);
            setdata(resp.data.data);  // Set the data as an array of insights
        } catch (err) {
            console.error("Error fetching insights:", err);
        }
    };

    const handleedit = (id) => {
        seteditid(id);
        const found = data.find((itm) => itm._id === id);
        if (found) {
            settitle(found.title);
            setdescription(found.description);
        } else {
            console.error('Item not found');
        }
    };

    const handledelete = async (id) => {
        if (confirm('Are you sure you want to delete this insight?')) {
            try {
                await axios.delete(`${BASE_URL}insights/${id}`);
                console.log("Deleted successfully");
                handleget();
            } catch (err) {
                console.log("Error deleting insight:", err);
            }
        }
    };

    useEffect(() => {
        handleget();
    }, []);

    return (
        <>
            <section className='py-5'>
                <div className="container">
                <SectionTilte title="INSIGHT HUB PAGE"/>
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
                            <div className="col-span-4">
                                <FormLabel label="Insight hub description" />
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={description}
                                    onChange={handledescription}
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
                    <div className="grid grid-cols-1 pt-3">
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
                    </div>
                </div>
            </section>
        </>
    );
};

export default Insighthub;