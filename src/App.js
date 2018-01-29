import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Home from './home/Home';

//路由配置
const routes = [
    {
        component: Home,
        path: '/',
        exact: true
    }
];

export default class App extends React.Component{
    render(){
        return (
            <Router>
                {renderRoutes(routes)}
            </Router>
        );
    }
}