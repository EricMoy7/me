import React, {useState} from "react"
import {Link} from 'react-router-dom'
import Logo from '../Images/siglog_500x200_trans.png'
import Hover from '../Animations/Hover'
import LogoHover from '../Animations/LogoHover'

import "./Nav.css"

export default function NavItems() {

    return (
        <nav>
            <ul className='nav-links'>
                <Link to="/about" className='link'><Hover><li className='text'>ABOUT</li></Hover></Link>
                <Link to="/projects" className='link'><Hover><li className='text'>PROJECTS</li></Hover></Link>
                <Link to="/"><LogoHover><img src={Logo} height={100} width={200}/></LogoHover></Link>
                <Link to="/socials" className='link'><Hover><li className='text'>SOCIALS</li></Hover></Link>
                <Link to="/" className='link'><Hover><li className='text'>SOMETHING</li></Hover></Link>
            </ul>
        </nav>
    )
}

//#6717cd
//#2871fa