import React from 'react';
import '../stylesheets/Landing.css';

class Landing extends React.Component {
    render() {
        return (
            <div id='landing' className='main-container'>
        
                <div className='blob-landing first-landing'></div>
                <div className='blob-landing second-landing'></div>
                <div className='blob-landing third-landing'></div>

                <div className="text-landing">
                    <h2>Hi, I'm Sophie</h2>
                    <h3>I am a front-end web developer</h3>
                    <p className='learn-more-landing'>Learn more about what I do &#xbb;</p>
                </div>
            </div>
        )
    }
}

export default Landing;