import React from 'react';

import '../stylesheets/Skills.css';

class Skills extends React.Component {
    render() {
        return (
            <div className="main-container">
                <div id="skills" className="skills">
                    <div className="top-skills">
                        <div className="list-of-skills">
                            <p className="ul-skills">{`<ul class="skills">`}</p>
                            <p>{`<li>Javascript</li>`}</p>
                            <p>{`<li>HTML</li>`}</p>
                            <p>{`<li>CSS</li>`}</p>
                            <p>{`<li>React</li>`}</p>
                            <p>{`<li>Node</li>`}</p>
                            <p>{`<li>JQuery</li>`}</p>
                            <p>{`<li>Git</li>`}</p>
                            <p>{`<li>Redux</li>`}</p>
                            <p className="ul-skills">{`</ul>`}</p>
                        </div>
                    </div>
                    <div className="bottom-skills">
                        <h1 className="title-skills">My Skills</h1>
                    </div>
                </div>
             
            </div>
        );
    };
}

export default Skills;