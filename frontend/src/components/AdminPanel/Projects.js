import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { addProjects, getUser } from '../../action/User';
import { MdKeyboardBackspace } from "react-icons/md";
import { Button, Typography } from '@mui/material'
import { Link } from "react-router-dom";
import { ProjectCard } from '../Project';

const Projects = () => {

    const dispatch = useDispatch()
    const { error, message, loading } = useSelector((state) => state.update)
    const { message: loginMessage, error: loginError } = useSelector((state) => state.login)
    const { user } = useSelector((state) => state.user)

    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [techStack, setTechStack] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault()
        await dispatch(addProjects(title, description, techStack, url, image))
        dispatch(getUser())
    }

    const handleImage = (e) => {
        const file = e.target.files[0]
        const Reader = new FileReader()

        Reader.readAsDataURL(file)
        Reader.onload = () => {
            if (Reader.readyState === 2) {
                setImage(Reader.result)
            }
        }
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
                        type="text"
                        placeholder='Tech Stack'
                        value={techStack}
                        onChange={(e) => { setTechStack(e.target.value) }}
                        className='adminPanelInputs'
                    />
                    <input
                        type="text"
                        placeholder='Link'
                        value={url}
                        onChange={(e) => { setUrl(e.target.value) }}
                        className='adminPanelInputs'
                    />
                    <input
                        type="file"
                        className='adminPanelFileUpload'
                        accept='image/*'
                        placeholder='Choose Image'
                        onChange={handleImage}
                    />

                    <Button type='submit' variant='contained' disabled={loading}>Add</Button>

                    <div className='adminPanelLinks'>
                        <Link to="/account" style={{ flexDirection: "row" }}>
                            BACK <MdKeyboardBackspace style={{ margin: "0 4px" }} />
                        </Link>
                    </div>
                </form>
                <div className="adminPanelYoutube">
                    {user && user.projects && user.projects.map((item) => (
                        <ProjectCard
                            key={item._id}
                            url={item.url}
                            projectImage={item.image.url}
                            projectTitle={item.title}
                            description={item.description}
                            technologies={item.techStack}
                            isAdmin={true}
                            id={item._id}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
