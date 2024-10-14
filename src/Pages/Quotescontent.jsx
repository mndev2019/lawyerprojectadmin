import React from 'react'
import FormLabel from '../Layout/FormLabel'

const Quotescontent = () => {
    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <div className="grid grid-cols-4 gap-4 ">
                        <div className="col-span-1">
                            <FormLabel label="QUOTES" />
                            <input
                                placeholder='Enter quotes'
                                type="text"
                                name="quotes"
                                id="quotes"
                                className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                required
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
                                rows="4"
                                required
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

export default Quotescontent