import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import logo from "../img/logo.png"
import {FaUserAlt} from "react-icons/fa"

const Header = () => {
  return (
    <ReactNavbar
        logoWidth="250px"
        logo={logo}
        navColor1="white"
        navColor2="#2c2b31"
        burgerColor="#9580fb"
        burgerColorHover="black"
        nav2justifyContent="space-around"
        nav3justifyContent="space-around"
        link1Text="Home"
        link2Text="About"
        link3Text="Project"
        link4Text="Contact"
        link1Url="/"
        link2Url="/about"
        link3Url="/project"
        link4Url="/contact"
        link1Color="#9580fb"
        link1ColorHover="white"
        link1Size="1.5rem"
        link1Padding="3.5vmax"
        profileIcon={true}
        ProfileIconElement={FaUserAlt}
        profileIconColor="#9580fb"
        profileIconColorHover="white"
    />
  )
}

export default Header
