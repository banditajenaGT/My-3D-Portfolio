import React, { useEffect, useState } from 'react'
import "../css/contact.css"
import { Typography, Button } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux'
import { contact, getUser } from '../action/User'
import { toast } from 'react-toastify';

const Contact = () => {
  const dispatch = useDispatch()
  const { error, message:updateMessage, loading } = useSelector((state) => state.update)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const contactFormHandler=async(e)=>{
    e.preventDefault()
    await dispatch(contact(name,email,message))
    dispatch(getUser())
  }

  
  useEffect(() => {
    if (updateMessage) {
        toast.success(updateMessage, {
            toastId: "toastsuccess3"
        });
        dispatch({ type: "clearMessage" })
    }
    if (error) {
        toast.error(error, {
            toastId: "toasterror3"
        });
        dispatch({ type: "clearErrors" })
    }
   
    // eslint-disable-next-line
}, [dispatch, error, updateMessage])

  return (
    <div className='contact'>
      <div className="contactRightBar"></div>
      <div className="contactContainer">
        <form className='contactContainerForm' onSubmit={contactFormHandler}>
          <Typography variant="h4">Contact Us</Typography>
          <input
            type="text"
            name='name'
            placeholder='Name'
            autoComplete='name'
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            required
          />
          <input
            type="email"
            name='email'
            placeholder='Email'
            autoComplete='email'
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            required
          />
          <textarea
            placeholder='Message'
            cols="30"
            rows="10"
            value={message}
            onChange={(e)=>{setMessage(e.target.value)}}
            required
          ></textarea>
          <Button variant='contained' type='submit' disabled={loading}>Send</Button>
        </form>
      </div>
    </div>
  )
}

export default Contact
