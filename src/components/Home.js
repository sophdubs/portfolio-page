import React from 'react';

import '../stylesheets/Home.css';

class Home extends React.Component {
    render() {
        return (
            // TRYING TO MANIPULATE POSITIONS OF HELLO WORLD, IM SOPHIE TO BE STACKED. 
            <div id="home" className="main-container">
                <div className="left-container left-home">
                    <div className="title-container-home">
                        <h1 className="title-home">Hello World&#x2c;</h1>
                    </div>
                    <div className="name-container-home">
                        <h1 className="name-home">I'm Sophie</h1>
                    </div>
  
                    <div className="bee-image-home"></div>
                   
                </div>
                <div className="right-container right-home">
                    <div className="first-row-home">
                        <div className="hex-home one-home"></div>
                        <div className="hex-home two-home link-home link-one-home"><p>Skills</p></div>
                        <div className="hex-home three-home"></div>
                        <div className="hex-home four-home"></div>
                    </div>
                    <div className="second-row-home">
                        <div className="hex-home five-home link-home link-two-home"><p>About Me</p></div>
                        <div className="hex-home six-home"></div>
                        <div className="hex-home seven-home"></div>
                        <div className="hex-home eight-home"></div>
                    </div>
                    <div className="third-row-home">
                        <div className="hex-home nine-home"></div>
                        <div className="hex-home ten-home"></div>
                        <div className="hex-home eleven-home link-home link-three-home"><p>Projects</p></div>
                        <div className="hex-home twelve-home"></div>
                    </div>
                    <div className="fourth-row-home">
                        <div className="hex-home thirteen-home"></div>
                        <div className="hex-home fourteen-home link-home link-four-home"><p>Blog</p></div>
                        <div className="hex-home fifteen-home"></div>
                        <div className="hex-home sixteen-home"></div>
                    </div>
                    <div className="fifth-row-home">
                        <div className="hex-home seventeen-home"></div>
                        <div className="hex-home eighteen-home"></div>
                        <div className="hex-home nineteen-home"></div>
                        <div className="hex-home twenty-home link-home link-five-home"><p>Contact</p></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;