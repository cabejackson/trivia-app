import React from 'react';
import ReactDOM from 'react-dom';
import Questions from './Questions';
import { BrowserRouter } from 'react-router-dom';

it('Questions Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Questions />
        </BrowserRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);

});