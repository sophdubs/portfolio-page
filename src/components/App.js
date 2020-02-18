import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Landing from "./Landing";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Blog from "./Blog";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";

class App extends React.Component {
    render() {
        return (
        <div>
            <BrowserRouter>
                <Route path="/" exact component={Landing} />
                <Route path="/Home" component={Home} />
                <Route path="/AboutMe" component={AboutMe} />
                <Route path="/Blog" component={Blog} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Projects" component={Projects} />
                <Route path="/Skills" component={Skills} />
            </BrowserRouter>

        </div>
        );
    };
}

export default App;
