import { Button, Typography } from '@mui/material'
import React from 'react'
import "../css/youtubeCard.css"
import { FaTrash } from "react-icons/fa";
import { deleteYoutube, getUser } from '../action/User';
import { useDispatch } from 'react-redux';

const YoutubeCard = ({
  url = "https://youtu.be/h1igcrpG-Ek?si=_tWR8lFKaF50OG-b",
  title = "My Video",
  image,
  isAdmin = false,
  id
}) => {
  const dispatch = useDispatch()

  const deleteHandler = async(id) => {
    await dispatch(deleteYoutube(id))
    dispatch(getUser())
}

  return (
    <div className='youtubeCard'>
      <a href={url} target='blank'>
        <img src={image} alt="Video" />
        <Typography>{title}</Typography>
      </a>
      {isAdmin ? <Button
        className='adminPanelDeleteButton'
        onClick={() => deleteHandler(id)}
      >
        <FaTrash />
      </Button> : null}
    </div>
  )
}

export default YoutubeCard
