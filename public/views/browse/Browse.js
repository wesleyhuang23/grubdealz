import React from 'react';
import ReactDOM from 'react-dom';

export default class Browser extends React.Component{
    render(){
        console.log(this.props.params, 'from browser component');
        return (
            <div>
                <h1>This is the browse page</h1>
            </div>
        )
    }
}