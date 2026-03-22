import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img.jpeg';

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>.NET Developer skilled in C#, ASP.NET Core, Web API, and SQL Server.building and maintaining APIs, handle database operations, and focus on clean code, debugging, and performance optimization while collaborating with cross-functional teams. Also Responsible for creating dynamic and responsive UI using React, JavaScript, HTML, and CSS.</p>

                    </div>
                    <div className="about-skills">

                        <div className="about-skill"><p>ASP.Net Core & C#</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>.NET Web API, REST API,ASP.Net MVC</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>EF, LINQ,  DI & JWT, SQL_Server</p><hr style={{ width: "80%" }} /></div>
                        <div className="about-skill"><p>JavaScript, React.js, Redux ToolKit</p><hr style={{ width: "60%" }} /></div>

                    </div>
                </div>
            </div>
            <div className="about-achivements">
                <div className="about-achivement">
                    <h1>10+</h1>
                    <p>3years of experience</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>50+</h1>
                    <p>project completed</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>10+</h1>
                    <p>happy clients</p>
                </div>
            </div>
        </div>
    );
}

export default About;