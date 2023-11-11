import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { addYoutube, getUser } from '../../action/User';
import { MdKeyboardBackspace } from "react-icons/md";
import { Button, Typography } from '@mui/material'
import { Link } from "react-router-dom";
import YoutubeCard from '../YoutubeCard';

const Youtube = () => {

    const dispatch = useDispatch()
    const { error, message, loading } = useSelector((state) => state.update)
    const { message: loginMessage, error: loginError } = useSelector((state) => state.login)
    const { user } = useSelector((state) => state.user)

    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")
    const [image, setImage] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault()
        await dispatch(addYoutube(title, url, image))
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
                        placeholder='Link'
                        value={url}
                        onChange={(e) => { setUrl(e.target.value) }}
                        className='adminPanelInputs'
                    />
                    <input
                        type="file"
                        className='adminPanelFileUpload'
                        accept='image/*'
                        placeholder='Choose Avatar'
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
                    {user && user.youtube && user.youtube.map((item) => (
                        <YoutubeCard
                            key={item._id}
                            url={item.url}
                            title={item.title}
                            image={item.image.url}
                            isAdmin={true}
                            id={item._id}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Youtube
