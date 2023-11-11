import React, { useEffect } from 'react'
import "../css/home.css"
import * as THREE from "three"
import moonImg from '../img/moon.jpg'
import venusImg from '../img/venus.jpg'
import spaceImg from '../img/space.jpg'
import { Typography } from '@mui/material'
import Timeline from './Timeline'
import { SiReact, SiJavascript, SiMongodb, SiNodedotjs, SiExpress, SiCss3, SiHtml5, SiThreedotjs, SiBootstrap } from "react-icons/si"
import YoutubeCard from './YoutubeCard'
import { Link } from "react-router-dom";
import { MouseOutlined } from '@mui/icons-material'

const Home = ({timeline,youtube,skills}) => {

    useEffect(() => {
        const textureLoader = new THREE.TextureLoader()

        const moonTexture = textureLoader.load(moonImg)
        const venusTexture = textureLoader.load(venusImg)
        const spaceTexture=textureLoader.load(spaceImg)

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000)

        const canvas = document.querySelector(".homeCanvas")
        const renderer = new THREE.WebGLRenderer({ canvas })

        const moonGeometry = new THREE.SphereGeometry(1, 64, 64)
        const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture })
        const moon = new THREE.Mesh(moonGeometry, moonMaterial)

        const venusGeometry = new THREE.SphereGeometry(3, 64, 64)
        const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture })
        const venus = new THREE.Mesh(venusGeometry, venusMaterial)

        const pointLight = new THREE.PointLight(0xffffff, 300)
        const pointLight2 = new THREE.PointLight(0xffffff, 2)

        pointLight.position.set(8, 5, 5)
        pointLight2.position.set(-8, -5, -5)

        camera.position.set(0, 0, 5)
        moon.position.set(-1, 0, 0)
        venus.position.set(4, 1, 3)

        scene.add(moon)
        scene.add(venus)
        scene.add(pointLight)
        scene.add(pointLight2)
        scene.background=spaceTexture

        const constantSpeed = 0.04
        const constantSpeed2 = 0.01
        window.addEventListener("mousemove", (e) => {
            if (e.clientX <= window.innerWidth / 2) {
                moon.rotation.x -= constantSpeed
                moon.rotation.y -= constantSpeed
                venus.rotation.x -= constantSpeed2
                venus.rotation.y -= constantSpeed2
            }
            if (e.clientX > window.innerWidth / 2) {
                moon.rotation.x += constantSpeed
                moon.rotation.y += constantSpeed
                venus.rotation.x += constantSpeed2
                venus.rotation.y += constantSpeed2
            }
            if (e.clientY <= window.innerHeight / 2) {
                moon.rotation.x += constantSpeed
                moon.rotation.y -= constantSpeed
                venus.rotation.x += constantSpeed2
                venus.rotation.y -= constantSpeed2
            }
            if (e.clientY > window.innerHeight / 2) {
                moon.rotation.x -= constantSpeed
                moon.rotation.y += constantSpeed
                venus.rotation.x -= constantSpeed2
                venus.rotation.y += constantSpeed2
            }
        })

        const animation = () => {
            requestAnimationFrame(animation)
            moon.rotation.y += 0.01
            venus.rotation.y += 0.001

            renderer.setSize(window.innerWidth, window.innerHeight)
            renderer.render(scene, camera)
        }
        animation()

        return window.addEventListener("scroll",()=>{
            camera.rotation.z=window.scrollY*0.003
            camera.rotation.x=window.scrollY*0.001

            const homeSkillBox=document.getElementById("homeSkillsBox")
            if(window.scrollY>1000){
                homeSkillBox.style.animationName="homeSkillBoxAniOn"
            }
            else{
                homeSkillBox.style.animationName="homeSkillBoxAniOff"
            }
        })
        // eslint-disable-next-line
    }, [])

    return (
        <div className='home'>
            <canvas className='homeCanvas'></canvas>
            <div className="homeCanvasContainer">
                <div>
                    <Typography variant='h1'>
                        <p>B</p>
                        <p>A</p>
                        <p>N</p>
                        <p>D</p>
                        <p>I</p>
                        <p>T</p>
                        <p>A</p>
                    </Typography>
                    <div className="homeCanvasBox">
                        <Typography variant='h2'>DEVELOPER</Typography>
                        <Typography variant='h2'>DESIGNER</Typography>
                    </div>
                    <Link to="/project">VIEW MORE</Link>
                </div>
                <div className='homeScrollBtn'>
                    <MouseOutlined/>
                </div>
            </div>
            <div className="homeContainer">
                <Typography variant='h3'>TIMELINE</Typography>
                <Timeline timeline={timeline}/>
            </div>
            <div className="homeSkill">
                <Typography variant='h3'>SKILLS</Typography>
                <div className="homeCubeSkills">
                    {
                        <>
                            <div className="homeCubeSkillFaces homeCubeSkillFace1">
                                <img src={skills.image1.url} alt="Face1" />
                            </div>
                            <div className="homeCubeSkillFaces homeCubeSkillFace2">
                                <img src={skills.image2.url} alt="Face2" />
                            </div>
                            <div className="homeCubeSkillFaces homeCubeSkillFace3">
                                <img src={skills.image3.url} alt="Face3" />
                            </div>
                            <div className="homeCubeSkillFaces homeCubeSkillFace4">
                                <img src={skills.image4.url} alt="Face4" />
                            </div>
                            <div className="homeCubeSkillFaces homeCubeSkillFace5">
                                <img src={skills.image5.url} alt="Face5" />
                            </div>
                            <div className="homeCubeSkillFaces homeCubeSkillFace6">
                                <img src={skills.image6.url} alt="Face6" />
                            </div></>
                    }
                </div>
                <div className="cubeShadow"></div>
                <div className="homeSkillBox" id='homeSkillsBox'>
                    <SiHtml5 />
                    <SiCss3 />
                    <SiJavascript />
                    <SiReact />
                    <SiThreedotjs />
                    <SiBootstrap />
                    <SiNodedotjs />
                    <SiExpress />
                    <SiMongodb />
                </div>
            </div>
            <div className="homeYoutube">
                <Typography variant='h3'>Youtube Videos</Typography>
                <div className="homeYoutubeWrapper">
                    {youtube.map((item) => (
                        <YoutubeCard
                            key={item._id}
                            id={item._id}    
                            image={item.image.url}
                            title={item.title}
                            url={item.url}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
