import React from 'react'
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import mail_icon from '../../assets/mail_icon.svg';



const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        formData.append("access_key", "c69061e5-0c79-4653-834b-c51d3627db01");

        formData.append("subject", "New Contact Message");

        // 🔥 THIS IS THE FIX
        formData.append("from_email", formData.get("email"));

        // ✅ Auto reply message
        formData.append(
            "autoresponse",
            "Hi 👋,\n\nThank you for contacting me. I have received your message and will get back to you shortly.\n\nRegards,\nSoubhagya S"
        );

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert("Message sent successfully ✅");
            event.target.reset();
        } else {
            alert("Something went wrong ❌");
        }

    };


    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Lets talk</h1>
                    <p>Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /><p>se.soubhagya97@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /><p>(+91)  9853003697</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />  <p>Bhadrak, Odisha,756120</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="Your Name">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' />
                    <label htmlFor="Your Email">Your Email</label>
                    <input type="email" placeholder='Enter Your Email' name='email' />
                    <label htmlFor="Write your message here">Write your message here</label>
                    <textarea htmlFor="Write your message here" placeholder='Enter your message' name='message' rows='2'></textarea>
                    <button className="contact-submit" type="submit">Submit Now </button>
                </form>
            </div>
        </div>
    )
}

export default Contact