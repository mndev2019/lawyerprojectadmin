import React from 'react'
import FormLabel from '../Layout/FormLabel'

const SetsApart = () => {
    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <FormLabel label="sets us apart Icon" />
                            <input
                                type="file"
                                name="setsusaparticon"
                                id="setsusaparticon"
                                className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <FormLabel label="sets us apart Title" />
                            <input
                                placeholder='Enter title'
                                type="text"
                                name="setsusaparttitle"
                                id="setsusaparttitle"
                                className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <FormLabel label="sets us apart description" />
                            <textarea
                                placeholder='Enter description'
                                type="text"
                                name="setsusapartdescription"
                                id="setsusapartdescription"
                                className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                rows="4"
                                required
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
                </div>
            </section>
        </>
    )
}

export default SetsApart