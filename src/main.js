import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const render = (Component) => {
    ReactDOM.render(
        <Component/>,
        document.getElementById('root')
    )
};
render(App);

//react启用热加载
if (module.hot) {
    module.hot.accept('./App.js', () => {
        const NextRootContainer = require('./App').default;
        render(NextRootContainer);
    });
}