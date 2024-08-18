"use client"
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {
  
const [users, setusers] = useState([])
const getUser = async () => {
  const {data} = await axios("https://jsonplaceholder.typicode.com/users")
  setusers(data)
}
  return (
    <>
    <button onClick={getUser} className='bg-green-500 px-5 py-4 rounded m-10'>Get Data</button>
    <div className='p-8 bg-slate-100 mt-5'>
        <ul>
          {users.map((e)=>{
            return <li>{e.username}</li>
          })}
        </ul>
    </div>
    </>
  )
}

export default page