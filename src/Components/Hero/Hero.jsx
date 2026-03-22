import React from 'react'
import './Hero.css';
import profile_img from '../../assets/profile_img.jpeg';
import resume from "../../assets/Se_Soubhagya_Resume.pdf";
const Hero = () => {
    return (
        <div id='home' className="hero">
            <img src={profile_img} alt="" />
            <h1><span>Hi, I’m Soubhagya S, </span> a .NET Developer from India.
                I love creating reliable web apps and </h1>
            <p>solving real-world problems with code.</p>
            <div className="hero-action">
                <div className="hero-connect"><a className='anchor-link' href='#contact'>connect  with me</a></div>
                <div className="hero-resume"><a href={resume} download >
                    My Resume
                </a></div>
            </div>
        </div>
    )
}


export default Hero;