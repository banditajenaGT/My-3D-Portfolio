import React, { useEffect } from 'react'
import "../css/project.css"
import { Button, Typography } from '@mui/material'
import { AiOutlineProject } from "react-icons/ai";
import { FaRegSmileWink, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { deleteProjects, getUser } from '../action/User';

export const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false,
    id
}) => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.user)

    const deleteHandler = async (id) => {
        await dispatch(deleteProjects(id))
        dispatch(getUser())
    }

    useEffect(() => {
        const projectCard = document.querySelectorAll(".projectCard")
        for (let i = 0; i < user.projects.length; i++) {
            projectCard[i].style.animationDelay = `${i / 3}s`
        }
    }, [user.projects.length])

    return (
        <>
            <a href={url} className='projectCard' target='blank'>
                <div>
                    <img src={projectImage} alt="Project" />
                    <Typography variant='h5'>{projectTitle}</Typography>
                </div>
                <div>
                    <Typography variant='h4'>About Project</Typography>
                    <Typography>{description}</Typography>
                    <Typography variant='h6'>Tech Stack: {technologies}</Typography>
                </div>
            </a>
            {isAdmin ? <Button
                className='adminPanelDeleteButton'
                onClick={() => deleteHandler(id)}
            >
                <FaTrash />
            </Button> : null}
        </>
    )
}

const Project = ({ projects }) => {

    return (
        <div className='projects'>
            <Typography variant='h3' style={{ transform: " translate(-50%, -100vh)" }}>
                Projects <AiOutlineProject />
            </Typography>
            <div className="projectsWrapper">
                {projects.map((project) => (
                    <ProjectCard
                        key={project._id}
                        id={project._id}
                        url={project.url}
                        projectImage={project.image.url}
                        projectTitle={project.title}
                        description={project.description}
                        technologies={project.techStack}
                    />
                ))}
            </div>
            <Typography variant='h3' style={{ font: "100 1.2rem 'Ubuntu Mono'", transform: "translate(-50%, 100vh)" }}>
                All The Projects Shown Above Are Made By Me <FaRegSmileWink />
            </Typography>
        </div>
    )
}

export default Project
