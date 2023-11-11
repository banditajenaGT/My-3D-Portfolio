import React from 'react'
import "../css/footer.css"
import { Typography } from '@mui/material'
import {BsGithub,BsYoutube,BsInstagram,BsFacebook} from 'react-icons/bs'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='aboutMe'>
        <Typography variant='h5'>About Me</Typography>
        <Typography variant='h6'>
            Hey !! I'm Bandita Jena, a Full-Stack Developer 
        </Typography>
        <Link to="/contact" >
            <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div className='social'>
        <Typography variant='h6'>Social Media</Typography>
        <a href="https://github.com/banditajenaGT" target='blank' className='github'>
            <BsGithub/>
        </a>
        <a href="https://www.youtube.com/@bandita_jena" target='blank' className='youtube'>
            <BsYoutube/>
        </a>
        <a href="https://www.instagram.com/bandita_j_r/" target='blank' className='insta'>
            <BsInstagram/>
        </a>
        <a href="https://www.facebook.com/bandita.jena.9047" target='blank' className='facebook'> 
            <BsFacebook/>
        </a>
      </div>
    </div>
  )
}

export default Footer
