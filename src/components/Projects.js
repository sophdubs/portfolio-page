import React from 'react';

import "../stylesheets/Projects.css";

class Projects extends React.Component {
    render() {
        return (
            <div id='projects' className="main-container">
                <div className="project-list-container">
                    <ul className="project-list">
                        <li className="one">
                            <div className="shape">
                                <div className="shape-content">
                                    <h1 className="project-name">My Fitness Tracker</h1>
                                    <p className="project-desc">A weekly fitness tracker app to help users acheive their workout goals. The webpage is responsive and utilizes local storage to store the users workout data. >>></p>
                                </div>
                            </div>
                        </li>
                        <li className="two">
                            <div className="shape">
                                <div className="shape-content">
                                    <h1 className="project-name">8-Puggle and Solver</h1>
                                    <p className="project-desc">A seemingly simple javascript based puzzle. However, the app has a hidden feature which allows players to use a solver, which implements the path search alorithm "A*", to win the game in record time. >>></p>
                                </div>
                            </div>
                        </li>
                        <li className="three">
                            <div className="shape">
                                <div className="shape-content">
                                    <h1 className="project-name">Ten Webpages in Ten Days</h1>
                                    <p className="project-desc">Over the course of ten days, I challenged myself to create ten responsive webpages. This helped me to brush up on my React, JS, CSS and HTML skills. >>></p>
                                </div>
                            </div>
                        </li>
                        <li className="four">
                            <div className="shape">
                                <div className="shape-content">
                                    <h1 className="project-name">Pina Cola-Duh</h1>
                                    <p className="project-desc">A cocktail and drink recipe lookup app. This project showcases my skills using React, Redux, and handling API calls >>></p>
                                </div>
                            </div>
                        </li>
                        <li className="five">
                            <div className="shape">
                                <div className="shape-content">
                                    <h1 className="project-name">Sorting Algorithm Visualizer</h1>
                                    <p className="project-desc">This app allows the user to visualize how different sorting algorithms work. It also gives the user useful information such as run time, memory usage and common uses. >>></p>
                                </div>
                            </div>
                        </li>
                        <li className="six">
                            <div className="shape">
                                <div className="shape-content">
                                    <h1 className="project-name">LESS-Tube</h1>
                                    <p className="project-desc">For this app, I taught myself to use the dynamic preprocessor style sheet language LESS and created a fully functioning Youtube replica. >>></p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
               
            </div>
        );
    }
}

export default Projects;