import React from 'react';

import "../stylesheets/Projects.css";

class Projects extends React.Component {
    render() {
        return (
            <div id='projects' className="main-container">
               <div className="top-projects">
                   <div className="title-projects">My Projects</div>
                   <div className="image-projects"></div>
               </div>
               
               <div className="bottom-projects"></div>
            </div>
        );
    }
}

export default Projects;