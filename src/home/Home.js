import React from 'react';
import { Button } from '../public/component/Button';

class Home extends React.Component{
    render(){
        return (
            <div>
                <h1>This is home page!</h1>
                <p>This is a color text!</p>
                <Button>普通按钮</Button>
                <Button primary>选中按钮</Button>
            </div>
        )
    }
}

export default Home;