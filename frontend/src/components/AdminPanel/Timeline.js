import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { addTimeline, deleteTimeline, getUser } from '../../action/User';
import { MdKeyboardBackspace } from "react-icons/md";
import { Button, Typography } from '@mui/material'
import { Link } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';

const AdminTimeline = () => {

  const dispatch = useDispatch()
  const { error, message, loading } = useSelector((state) => state.update)
  const { message: loginMessage, error: loginError } = useSelector((state) => state.login)
  const { user } = useSelector((state) => state.user)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")

  const submitHandler = async (e) => {
    e.preventDefault()
    await dispatch(addTimeline(title, description, date))
    dispatch(getUser())
  }

  const deleteHandler = async (id) => {
    await dispatch(deleteTimeline(id))
    dispatch(getUser())
  }

  useEffect(() => {
    if (message) {
        toast.success(message, {
            toastId: "toastsuccess3"
        });
        dispatch({ type: "clearMessage" })
    }
    if (loginMessage) {
        toast.success(loginMessage, {
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
    if (loginError) {
        toast.error(loginError, {
            toastId: "toasterror3"
        });
        dispatch({ type: "clearErrors" })
    }
    // eslint-disable-next-line
}, [dispatch, error, message, loginError, loginMessage])
  return (
    <div className='adminPanel'>
      <div className="admitPanelContainer">
        <Typography variant='h4'>
          <p>A</p>
          <p>D</p>
          <p>M</p>
          <p>I</p>
          <p style={{ marginRight: "1vmax" }}>N</p>

          <p>P</p>
          <p>A</p>
          <p>N</p>
          <p>E</p>
          <p>L</p>
        </Typography>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder='Title'
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
            className='adminPanelInputs'
          />
          <input
            type="text"
            placeholder='Description'
            value={description}
            onChange={(e) => { setDescription(e.target.value) }}
            className='adminPanelInputs'
          />
          <input
            type="date"
            placeholder='Date'
            value={date}
            onChange={(e) => { setDate(e.target.value) }}
            className='adminPanelInputs'
          />
          <Button type='submit' variant='contained' disabled={loading}>Add</Button>
          <div className='adminPanelLinks'>
            <Link to="/account" style={{flexDirection:"row"}}>
              BACK <MdKeyboardBackspace style={{margin:"0 4px"}}/>
            </Link>
          </div>
        </form>
        <div className="adminPanelYoutube" >
          {user && user.timeline && user.timeline.map((item) => (
            <div key={item._id} className='youtubeCard'>
              <Typography variant='h6'>{item.title}</Typography>
              <Typography variant='body1' style={{ letterSpacing: "2px" }}>
                {item.description}
              </Typography>
              <Typography variant='body1' style={{ fontWeight: "600" }}>
                {item.date.toString().split("T")[0]}
              </Typography>
              <Button
                className='adminPanelDeleteButton'
                style={{ margin: "auto", display: "block", color: "black" }}
                onClick={() => deleteHandler(item._id)}>
                <FaTrash />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminTimeline
