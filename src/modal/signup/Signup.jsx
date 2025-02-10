import React from 'react'
import "./signup.css"
import { useState } from 'react'
import axios from "axios"
import {toast,Toaster} from "sonner"
import { BACKEND_URL } from '../../../config'
const Signup =({setAuthType}) => {
  const [data,setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  function handleChange(type,e){
    setData({
      ...data,
      [type]: e.target.value
    })
  }

  async function handleSubmit(e){
    e.preventDefault()
    try {
      const res = await axios.post(`${BACKEND_URL}/user/signup`,data)
      toast.success("signup succesful")
    } catch (error) {
      console.log(error)
      toast.error("error whiel signing up")
    }
  }

  return (
    <form>
      <h1 className='heading'>Sign Up</h1>
      <div className='conatiner1'>
      <label htmlFor="Name" className='labels1'>
        <p className='title' style={{color: 'blue'}}>Name </p>
        <input type="name" id='name' className='inputs'  onChange={(e)=>{handleChange("name",e)}} />
      </label>
      <label className='labels' htmlFor="email" style={{color: 'blue'}}>
        <p className='title'>Email: </p>
        <input type="email" id='email' className='inputs' placeholder='' onChange={(e)=>{handleChange("email",e)}} />
      </label>
      <label htmlFor="password">
        <p className='labels1' style={{color:'blue'}}>Password</p>
        <input type="password"   id="password"   className='inputs' onChange={(e)=>{handleChange("password",e)}}/>
      </label>
       <br />
      <button onClick={(e)=>{handleSubmit(e)}} type='submit' className='btn'>Login</button>
      <p className='header'>Don't have a acount? <a onClick={()=>{setAuthType('sigin')}}>Signin</a></p> </div>
      <Toaster />
    </form>

  )
}

export default Signup
