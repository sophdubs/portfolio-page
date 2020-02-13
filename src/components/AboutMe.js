import React from 'react';
import '../stylesheets/AboutMe.css';

class AboutMe extends React.Component {
    render() {
        return (
            <div className="main-container">
                <div className="left-container"></div>
                <div className="right-container">
                    <h1 className="title-aboutme">About me</h1>
                    <p className="text-aboutme"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea nihil nisi consequatur unde officiis libero, dolores sequi modi. Maiores temporibus repellat fuga atque rem ipsa molestiae distinctio est? Suscipit, consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est impedit, pariatur assumenda nam soluta non doloribus consectetur optio odio sapiente, minima tenetur at natus dolorum laboriosam? Fugit, molestias recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cupiditate ea officia, deserunt voluptatibus aliquid, sed necessitatibus perferendis similique natus totam quidem nam? Recusandae dignissimos veritatis, architecto sit ex praesentium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex, eum voluptatem iusto error est alias atque accusamus, perferendis fugit porro laboriosam expedita illo molestiae asperiores fuga corrupti culpa explicabo!</p>
                </div>
            </div>
        );
    };
}

export default AboutMe;