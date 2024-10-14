import React from 'react'
import FormLabel from '../Layout/FormLabel'

const Testimonial = () => {
    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-1">
                            <FormLabel label="name" />
                            <input
                                placeholder='Enter name'
                                type="text"
                                name="name"
                                id="name"
                                className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <FormLabel label="testimonial image" />
                            <input
                                type="file"
                                name="testimonialimage"
                                id="testimonialimage"
                                className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <FormLabel label="post" />
                            <input
                                placeholder='Enter post'
                                type="text"
                                name="post"
                                id="post"
                                className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                required
                            />
                        </div>


                        <div className="col-span-4">
                            <FormLabel label="testimonial description" />
                            <textarea
                                placeholder='Enter description'
                                type="text"
                                name="testimonialdescription"
                                id="testimonialdescription"
                                className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                rows="4"
                                required
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
            </section >
        </>
    )
}

export default Testimonial