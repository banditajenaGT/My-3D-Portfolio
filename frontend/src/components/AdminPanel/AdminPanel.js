import { Button, Typography } from '@mui/material'
import "../../css/adminPanel.css"
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { MdTimeline } from "react-icons/md"
import { FaYoutube } from "react-icons/fa"
import { AiOutlineProject } from "react-icons/ai"
import {useDispatch, useSelector} from 'react-redux'
import { logoutUser, updateUser } from '../../action/User'
import { toast } from 'react-toastify';

const AdminPanel = () => {
  const { error, message } = useSelector((state) => state.login)
  const { error:updateError, message:updateMessage,loading } = useSelector((state) => state.update)
  const dispatch=useDispatch()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [skills, setSkills] = useState({})
  const [about, setAbout] = useState({name:"",title:"",subtitle:"",description:"",quote:""})


  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateUser(name,email,password,skills,about))
  }

  const handleImages = (e, value) => {
    const file = e.target.files[0]
    const Reader = new FileReader()

    Reader.readAsDataURL(file)
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        if (value === 1) {
          setSkills({...skills, image1: Reader.result })
        }
        if (value === 2) {
          setSkills({...skills, image2: Reader.result })
        }
        if (value === 3) {
          setSkills({...skills, image3: Reader.result })
        }
        if (value === 4) {
          setSkills({...skills, image4: Reader.result })
        }
        if (value === 5) {
          setSkills({...skills, image5: Reader.result })
        }
        if (value === 6) {
          setSkills({...skills, image6: Reader.result })
        }
      }
    }
  }

  const handleAboutImage = (e) => {
    const file = e.target.files[0]
    const Reader = new FileReader()

    Reader.readAsDataURL(file)
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAbout({...about,  avatar: Reader.result })
      }
    }
  }

  const logoutHandler = () => {
    dispatch(logoutUser())
  }

  useEffect(() => {
    if (message) {
        toast.success(message,{
          toastId:"toastsuccess1"
        });
        dispatch({type:"clearMessage"})
    }
    if (updateMessage) {
        toast.success(updateMessage,{
          toastId:"toastsuccess2"
        });
        dispatch({type:"clearMessage"})
    }
    if (error) {
        toast.error(error,{
          toastId:"toasterror1"
        });
        dispatch({type:"clearErrors"})
    }
    if (updateError) {
        toast.error(updateError,{
          toastId:"toasterror2"
        });
        dispatch({type:"clearErrors"})
    }
    // eslint-disable-next-line
}, [dispatch, error, message,updateMessage,updateError])

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
            name='name'
            placeholder='Admin Name'
            autoComplete='name'
            value={name}
            onChange={(e) => { setName(e.target.value) }}
            className='adminPanelInputs'
          />
          <input
            type="email"
            name='email'
            placeholder='Admin Email'
            autoComplete='email'
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            className='adminPanelInputs'
          />
          <input
            type="password"
            placeholder='Admin Password'
            autoComplete='current-password'
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            className='adminPanelInputs' 
          />

          <div className="admitPanelSkill">
            <div>
              <Typography>Skill 1</Typography>
              <input
                type="file"
                className='adminPanelFileUpload'
                accept='image/*'
                onChange={(e) => { handleImages(e, 1) }}
              />
            </div>
            <div>
              <Typography>Skill 2</Typography>
              <input
                type="file"
                className='adminPanelFileUpload'
                accept='image/*'
                onChange={(e) => { handleImages(e, 2) }}
              />
            </div>
            <div>
              <Typography>Skill 3</Typography>
              <input
                type="file"
                className='adminPanelFileUpload'
                accept='image/*'
                onChange={(e) => { handleImages(e, 3) }}
              />
            </div>
            <div>
              <Typography>Skill 4</Typography>
              <input
                type="file"
                className='adminPanelFileUpload'
                accept='image/*'
                onChange={(e) => { handleImages(e, 4) }}
              />
            </div>
            <div>
              <Typography>Skill 5</Typography>
              <input
                type="file"
                className='adminPanelFileUpload'
                accept='image/*'
                onChange={(e) => { handleImages(e, 5) }}
              />
            </div>
            <div>
              <Typography>Skill 6</Typography>
              <input
                type="file"
                className='adminPanelFileUpload'
                accept='image/*'
                onChange={(e) => { handleImages(e, 6) }}
              />
            </div>
          </div>

          <div className="adminPanelAbout">
            <fieldset>
              <legend>About</legend>
              <input
                type="text"
                placeholder='Name'
                autoComplete='name'
                name='name'
                value={about.name}
                onChange={(e) => { setAbout({ ...about, name: e.target.value }) }}
                className='adminPanelInputs'
              />
              <input
                type="text"
                placeholder='Title'
                value={about.title}
                onChange={(e) => { setAbout({ ...about, title: e.target.value }) }}
                className='adminPanelInputs'
              />
              <input
                type="text"
                placeholder='Subtitle'
                value={about.subtitle}
                onChange={(e) => { setAbout({ ...about, subtitle: e.target.value }) }}
                className='adminPanelInputs'
              />
              <input
                type="text"
                placeholder='Description'
                value={about.description}
                onChange={(e) => { setAbout({ ...about, description: e.target.value }) }}
                className='adminPanelInputs'
              />
              <input
                type="text"
                placeholder='Quote'
                value={about.quote}
                onChange={(e) => { setAbout({ ...about, quote: e.target.value }) }}
                className='adminPanelInputs'
              />
              <input
                type="file"
                className='adminPanelFileUpload'
                accept='image/*'
                placeholder='Choose Avatar'
                onChange={handleAboutImage}
              />
            </fieldset>
          </div>
          <div className='adminPanelLinks'>
            <Link to="/admin/timeline">
              TIMELINE <MdTimeline />
            </Link>
            <Link to="/admin/youtube">
              YOUTUBE <FaYoutube />
            </Link>
            <Link to="/admin/projects">
              PROJECT <AiOutlineProject />
            </Link>
          </div>
          <Button type='submit' variant='contained' disabled={loading}>Update</Button>
        </form>
        <Button
          color='error'
          style={{ display: "flex",justifyContent:"center",width:"20%",minWidth:"100px", margin: "3vmax auto" }}
          onClick={logoutHandler}
          variant='contained'>
          Logout
        </Button>
      </div>
    </div>
  )
}

export default AdminPanel
