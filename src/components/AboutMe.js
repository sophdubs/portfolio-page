import React from 'react';
import '../stylesheets/AboutMe.css';

class AboutMe extends React.Component {
    render() {
        return (
            <div className="page container">
                <div className="left-container"></div>
                <div className="right-container">
                    <h1 className="about-me-title">About me</h1>
                    <p className="about-me-text"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea nihil nisi consequatur unde officiis libero, dolores sequi modi. Maiores temporibus repellat fuga atque rem ipsa molestiae distinctio est? Suscipit, consequatur?</p>
                </div>
                <div className="home-button">Home</div>
            </div>
        );
    };
}

export default AboutMe;