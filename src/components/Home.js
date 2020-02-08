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
                        <div className="hex two"></div>
                        <div className="hex three"></div>
                        <div className="hex four"></div>
                    </div>
                    <div className="second-row">
                        <div className="hex five"></div>
                        <div className="hex six"></div>
                        <div className="hex seven"></div>
                        <div className="hex eight"></div>
                    </div>
                    <div className="third-row">
                        <div className="hex nine"></div>
                        <div className="hex ten"></div>
                        <div className="hex eleven"></div>
                        <div className="hex twelve"></div>
                    </div>
                    <div className="fourth-row">
                        <div className="hex thirteen"></div>
                        <div className="hex fourteen"></div>
                        <div className="hex fifteen"></div>
                        <div className="hex sixteen"></div>
                    </div>
                    <div className="fifth-row">
                        <div className="hex seventeen"></div>
                        <div className="hex eighteen"></div>
                        <div className="hex nineteen"></div>
                        <div className="hex twenty"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;