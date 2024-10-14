import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FormLabel from '../Layout/FormLabel';

const Probono = () => {
    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <FormLabel label="Pro bono Description" />
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
                        <div className="col-span-1 pt-3 ">
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

export default Probono