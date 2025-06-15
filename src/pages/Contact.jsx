import React from 'react'
import NumberName from '../components/NumberName'

function Contact() {
  return (
    <>
    <div className='w-full h-[38rem] bg-gradient-to-r from-[#AA00FF] to-[#7200F5] flex justify-center items-center'>
      <div className='bg-white rounded-xl h-128 shadow-lg w-[42rem] text-black'>
        <h1>User Contacts</h1>
        <NumberName/>
      </div>
    </div>
    </>
  )
}

export default Contact