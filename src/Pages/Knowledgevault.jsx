import React from 'react'
import FormLabel from '../Layout/FormLabel'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Knowledgevault = () => {
    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <FormLabel label="knowledge vault title" />
                            <input
                                placeholder='Enter title'
                                type="text"
                                name="knowledgevaulttitle"
                                id="knowledgevaulttitle"
                                className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <FormLabel label="Upload Image" />
                            <input
                                type="file"
                                name="knowledgevaultimage"
                                id="knowledgevaultimage"
                                className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                accept="image/*"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <FormLabel label="Knowledge Vault Date" />
                            <input
                                type="date"
                                name="knowledgevaultdate"
                                id="knowledgevaultdate"
                                className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <FormLabel label="Knowledge Vault Short Para" />
                            <textarea
                                placeholder='Enter short para'
                                name="knowledgevaultshortpara"
                                id="knowledgevaultshortpara"
                                className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                rows="4"
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <FormLabel label="Knowledge Vault Description" />
                            <CKEditor
                                editor={ClassicEditor}
                                data=""
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    console.log({ data });
                                    // You can set the form state here with the updated data
                                }}
                                
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
                </div>
            </section>
        </>
    )
}

export default Knowledgevault