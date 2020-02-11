import React from 'react';

import '../stylesheets/Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="left-container">
                    <h1 className="title">Hello World</h1>
                    <div className="bee-image"></div>
                </div>
                <div className="right-container">
                    <div className="first-row">
                        <div className="hex one"></div>
                        <div className="hex two link link-one"><p>Skills</p></div>
                        <div className="hex three"></div>
                        <div className="hex four"></div>
                    </div>
                    <div className="second-row">
                        <div className="hex five link link-two"><p>About Me</p></div>
                        <div className="hex six"></div>
                        <div className="hex seven"></div>
                        <div className="hex eight"></div>
                    </div>
                    <div className="third-row">
                        <div className="hex nine"></div>
                        <div className="hex ten"></div>
                        <div className="hex eleven link link-three"><p>Projects</p></div>
                        <div className="hex twelve"></div>
                    </div>
                    <div className="fourth-row">
                        <div className="hex thirteen"></div>
                        <div className="hex fourteen link link-four"><p>Blog</p></div>
                        <div className="hex fifteen"></div>
                        <div className="hex sixteen"></div>
                    </div>
                    <div className="fifth-row">
                        <div className="hex seventeen"></div>
                        <div className="hex eighteen"></div>
                        <div className="hex nineteen"></div>
                        <div className="hex twenty link link-five"><p>Contact</p></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;