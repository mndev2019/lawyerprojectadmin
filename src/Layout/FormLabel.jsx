/* eslint-disable react/prop-types */
//import React from 'react'

const FormLabel = (props) => {
  return (
   <>
      <label htmlFor='' className='text-xs  text-black block mb-2 font-normal uppercase tracking-wider'>{props.label}</label>
   </>
  )
}

export default FormLabel