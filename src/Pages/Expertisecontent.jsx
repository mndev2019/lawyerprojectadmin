import React, { useState } from 'react'
import FormLabel from '../Layout/FormLabel'

const Expertisecontent = () => {
    const [expertiseRows, setExpertiseRows] = useState([{ expertisetitle: '', expertisepara: '', expertisedescription: '' }]);
    const [benefitRows, setBenefitRows] = useState([{ benefiticon: '', benefittitle: '', benefitdescription: '' }]);

    const handleExpertiseInputChange = (index, event) => {
        const { name, value } = event.target;
        const updatedRows = [...expertiseRows];
        updatedRows[index][name] = value;
        setExpertiseRows(updatedRows);
    };

    const handleBenefitInputChange = (index, event) => {
        const { name, value } = event.target;
        const updatedRows = [...benefitRows];
        updatedRows[index][name] = value;
        setBenefitRows(updatedRows);
    };

    const addExpertiseRow = () => {
        setExpertiseRows([...expertiseRows, { expertisetitle: '', expertisepara: '', expertisedescription: '' }]);
    };

    const addBenefitRow = () => {
        setBenefitRows([...benefitRows, { benefiticon: '', benefittitle: '', benefitdescription: '' }]);
    };
    const removeExpertiseRow = (index) => {
        const updatedRows = expertiseRows.filter((_, i) => i !== index);
        setExpertiseRows(updatedRows);
    };

    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <form>
                        <div className="grid grid-cols-4 gap-4">

                            {expertiseRows.map((row, index) => (

                                <>
                                    <div className="col-span-1 mb-4">
                                        <FormLabel label="Expertise Title" />
                                        <input
                                            placeholder='Enter title'
                                            type="text"
                                            name="expertisetitle"
                                            id={`expertisetitle-${index}`}
                                            value={row.expertisetitle}
                                            onChange={(e) => handleExpertiseInputChange(index, e)}
                                            className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                            required
                                        />
                                    </div>
                                    <div className="col-span-1 mb-4">
                                        <FormLabel label="Expertise short para" />
                                        <textarea
                                            placeholder='Enter para'
                                            name="expertisepara"
                                            id={`expertisepara-${index}`}
                                            value={row.expertisepara}
                                            onChange={(e) => handleExpertiseInputChange(index, e)}
                                            className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                            rows="4"
                                            required
                                        />
                                    </div>
                                    <div className="col-span-1 mb-4">
                                        <FormLabel label="Expertise description" />
                                        <textarea
                                            placeholder='Enter description'
                                            name="expertisedescription"
                                            id={`expertisedescription-${index}`}
                                            value={row.expertisedescription}
                                            onChange={(e) => handleExpertiseInputChange(index, e)}
                                            className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                            rows="4"
                                            required
                                        />
                                    </div>
                                    <div className="col-span-1 pt-[3rem]">
                                        <div className="flex gap-2">
                                            <button
                                                type="button"
                                                onClick={addExpertiseRow}
                                                className="bg-primary text-xs uppercase font-y tracking-wider text-white px-5 rounded py-3 shadow-sm shadow-light"
                                            >
                                                ADD ROW
                                            </button>
                                            {index > 0 && ( // Show remove button only if the current row is not the first row
                                                <button
                                                    type="button"
                                                    onClick={() => removeExpertiseRow(index)}
                                                    className="bg-red-500 text-xs uppercase font-y tracking-wider text-white px-5 rounded py-3 shadow-sm shadow-light"
                                                >
                                                    REMOVE ROW
                                                </button>
                                            )}

                                        </div>
                                    </div>
                                </>

                            ))}




                            <div className="col-span-4">
                                <div className="w-full bg-primary text-white text-sm font-semibold px-3 py-1 ">
                                    <p>Benefits</p>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="Benefit Icon" />
                                <input
                                    type="file"
                                    name="benefiticon"
                                    id="benefiticon"
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    required
                                />
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="Benefit Title" />
                                <input
                                    placeholder='Enter title'
                                    type="text"
                                    name="benefittitle"
                                    id="benefittitle"
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    required
                                />
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="benefit description" />
                                <textarea
                                    placeholder='Enter description'
                                    type="text"
                                    name="benefitdescription"
                                    id="benefitdescription"
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    rows="4"
                                    required
                                />
                            </div>
                            <div className="col-span-1 pt-[3rem]">
                                <button
                                    type="submit"
                                    className="bg-primary text-xs uppercase font-y tracking-wider text-white px-5 rounded py-3 shadow-sm shadow-light"

                                >
                                    ADD ROW
                                </button>
                            </div>
                            <div className="col-span-4">
                                <div className="w-full bg-primary text-white text-sm font-semibold px-3 py-1 ">
                                    <p>Types</p>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <FormLabel label=" Title" />
                                <input
                                    placeholder='Enter title'
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    required
                                />
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="description" />
                                <textarea
                                    placeholder='Enter description'
                                    type="text"
                                    name="description"
                                    id="description"
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    rows="4"
                                    required
                                />
                            </div>
                            <div className="col-span-1 pt-[3rem]">
                                <button
                                    type="submit"
                                    className="bg-primary text-xs uppercase font-y tracking-wider text-white px-5 rounded py-3 shadow-sm shadow-light"

                                >
                                    ADD ROW
                                </button>
                            </div>
                            <div className="col-span-4">
                                <div className="w-full bg-primary text-white text-sm font-semibold px-3 py-1 ">
                                    <p>Services</p>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="service Icon" />
                                <input
                                    type="file"
                                    name="serviceicon"
                                    id="serviceicon"
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    required
                                />
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="service Title" />
                                <input
                                    placeholder='Enter title'
                                    type="text"
                                    name="servicetitle"
                                    id="servicetitle"
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    required
                                />
                            </div>
                            <div className="col-span-1">
                                <FormLabel label="service description" />
                                <textarea
                                    placeholder='Enter description'
                                    type="text"
                                    name="servicedescription"
                                    id="servicedescription"
                                    className="rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2"
                                    rows="4"
                                    required
                                />
                            </div>
                            <div className="col-span-1 pt-[3rem]">
                                <button
                                    type="submit"
                                    className="bg-primary text-xs uppercase font-y tracking-wider text-white px-5 rounded py-3 shadow-sm shadow-light"

                                >
                                    ADD ROW
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Expertisecontent