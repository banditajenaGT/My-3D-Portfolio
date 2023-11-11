import React, { useEffect, useState } from 'react'
import "../css/login.css"
import { Button, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../action/User';
import { toast } from 'react-toastify';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { error, message, loading } = useSelector((state) => state.login)
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(loginUser(email, password))
    }

    useEffect(() => {
        if (message) {
            toast.success(message,{
                toastId:"toastsuccess2"
              });
            dispatch({type:"clearMessage"})
        }
        if (error) {
            toast.error(error,{
                toastId:"toasterror2"
              });
            dispatch({type:"clearErrors"})
        }
    }, [dispatch, error, message])

    return (
        <div className='login'>
            <div className="loginContainer">
                <form className='loginForm' onSubmit={submitHandler}>
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
                    <div>
                        <input
                            type="email"
                            name='email'
                            placeholder='Admin Email'
                            autoComplete='email'
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            required
                        />
                        <input
                            type="password"
                            placeholder='Admin Password'
                            autoComplete='current-password'
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            required
                        />
                        <Button type='submit' variant='contained' disabled={loading}>Login</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
