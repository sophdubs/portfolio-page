import React from 'react';

import '../stylesheets/Contact.css';

class Contact extends React.Component {
    render() {
        return (
            <div className="main-container">
                <div className="left-container">
                    <div className="title-contact">
                        <h1>Contact Me</h1>
                    </div>
                    <div className="links-contact">
                        <ul className="links-list-contact">
                            <li className="linked-in-contact">
                                <div className="linked-in-icon-contact"></div>
                                <p className="linked-in-link-contact">Connect with me on LinkedIn &#187;</p>
                            </li>
                            <li className="twitter-contact">
                                <div className="twitter-icon-contact"></div>
                                <p className="twitter-link-contact">Follow me on twitter &#187;</p>
                            </li>
                            <li className="github-contact">
                                <div className="github-icon-contact"></div>
                                <p className="github-link-contact">Checkout my GitHub page &#187;</p>
                            </li>
                            <li className="gmail-contact">
                                <div className="gmail-icon-contact"></div>
                                <p className="gmail-link-contact">Copy my email address &#187;</p>
                            </li>
                        </ul>
                    </div>  
                </div>
                <div id="right-container-contact" className="right-container"></div>
            </div>
        );
    };
}

export default Contact;