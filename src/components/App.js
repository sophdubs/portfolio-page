import React from 'react';
import '../stylesheets/App.css';

class App extends React.Component {
    render() {
        return (
            <div className='page'>
                <div className='blob first'></div>
                <div className='blob second'></div>
                <div className='blob third'></div>
                <div className='blob fourth'></div>

            </div>
        )
    }
}

export default App;