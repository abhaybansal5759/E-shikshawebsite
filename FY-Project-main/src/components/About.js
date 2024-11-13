import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="About-section">
            <div className="About-container">
                <div className="About-text">
                    <h1 className="title">Get to Know About Us</h1>
                    <p>
                    Welcome to eShiksha, your ultimate destination for free resources and valuable scholarship information. Our platform is dedicated to making the student journey smoother by providing curated resources from across the internet, saving you time and effort. Whether you're seeking study materials, tools, or scholarship opportunities, we've got you covered.</p>
                    <p>
                    Say goodbye to endless searching! We handpick and organize resources so you can spend less time hunting and more time learning. Our user-friendly interface ensures effortless navigation, making finding what you need a breeze. 
                    </p></div>
                <div className="About-image">
                    <img src="https://source.unsplash.com/400x300/?about-us"
                        alt="About Us" />
                </div>
            </div>
        </div>
    );
};

export default About;
