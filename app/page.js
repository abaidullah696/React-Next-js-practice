"use client"
import React, { useState } from 'react'

const page = () => {
    const [username, setUsername ] = useState("")
  return (
    <>
    <div className='p-6'>
    <h1 className='font-bold text-5xl mb-5'>Enter Your Name</h1>
      <form>
        <input type='text'
        className='border-solid border-2 border-cyan-700 px-5 py-3'
        value={username}
        onChange={(e)=>{
            setUsername(e.target.value)
        }}
        />
      </form>
      </div>
    </>
)
}

export default page