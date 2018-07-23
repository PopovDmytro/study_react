import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// styles
import './scss/app.scss';
// componsnts 
import Routes from './routes';

const App = () => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    );
}

export default App;