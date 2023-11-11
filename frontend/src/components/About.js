import React from 'react'
import "../css/about.css"
import { Typography } from '@mui/material'

const About = ({about}) => {

    return (
        <div className='about'>
            <div className="aboutContainer1">
                <Typography>{about.quote}</Typography>
            </div>
            <div className="aboutContainer2">
                <div>
                    <img src={about.avatar.url} alt="profile" className='aboutAvatar' />
                    <Typography
                        variant='h4'
                        style={{ margin: "1vmax" }}
                    >{about.name}</Typography>
                    <Typography>{about.title}</Typography>
                    <Typography style={{margin:"2vmax"}}>{about.subtitle}</Typography>
                </div>
                <div className='aboutDescription'>
                    <Typography>{about.description}</Typography>
                </div>
            </div>
        </div>
    )
}

export default About
