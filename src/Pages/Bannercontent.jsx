import React from 'react'
import FormLabel from '../Layout/FormLabel'
import SectionTilte from '../Layout/SectionTilte'

const Bannercontent = () => {
    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <div className="grid grid-cols-4 gap-4 ">
                        <div className="col-span-1">
                            <FormLabel label="Banner Title" />
                            <input
                                placeholder='Enter title'
                                type="text"
                                name="title"
                                id="title"
                                className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                required
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
            </section>
        </>
    )
}

export default Bannercontent