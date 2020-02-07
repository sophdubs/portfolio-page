import React from 'react';
import '../stylesheets/Landing.css';

class Landing extends React.Component {
    render() {
        return (
            <div className='page'>
                <div className='blob first'></div>
                <div className='blob second'></div>
                <div className='blob third'></div>
                <div className="left"></div>
                <div className="right"></div>
                <div className="text">
                    <h2 className='header'>Hi, I'm Sophie</h2>
                    <h3>I am a front-end web developer</h3>
                    <p className='learn-more'>Learn more about what I do &#xbb;</p>
                </div>
            </div>
        )
    }
}

export default Landing;