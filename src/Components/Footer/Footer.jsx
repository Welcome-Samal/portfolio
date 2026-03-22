import React, { useState } from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';
import emailjs from '@emailjs/browser';

const Footer = () => {

    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();

        if (!email) {
            alert("Please enter your email");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Enter a valid email");
            return;
        }

        const templateParams = {
            user_email: email,
        };

        // ✅ 1. Send email to YOU
        emailjs.send(
            "service_ft2bic2",
            "template_yma8nvg",   // your main template
            templateParams,
            "ihWSLajXESLCwOdFT"
        )

        // ✅ 2. Send auto-reply to USER
        emailjs.send(
            "service_ft2bic2",
            "template_am0nw9q",   // 🔥 your auto reply template
            templateParams,
            "ihWSLajXESLCwOdFT"
        )

            .then(() => {
                alert("Subscribed successfully ✅");
                setEmail('');
            })
            .catch((error) => {
                console.log("ERROR:", error);
                alert("Failed ❌");
            });

    };

    return (
        <div className='footer'>

            <div className="footer-top">

                {/* LEFT */}
                <div className="footer-top-left">
                    <img src={footer_logo} alt="logo" />
                    <p>I am a .NET Developer building scalable web applications.</p>
                </div>

                {/* RIGHT (FORM) */}
                <form className="footer-top-right" onSubmit={handleSubscribe}>

                    <div className="footer-email-input">
                        <img src={user_icon} alt="user" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="footer-subscribe">
                        Subscribe
                    </button>

                </form>

            </div>

            <hr />

            <div className="footer-bottom">
                <p className="footer-bottom-left">
                    © 2026 Soubhagya S. All rights reserved
                </p>

                <div className="footer-bottom-right">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>

        </div>
    )
}

export default Footer;