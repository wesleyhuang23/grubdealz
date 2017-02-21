import React from 'react';
import ReactDOM from 'react-dom';

export default class Deal extends React.Component{
    render(){
        console.log(this.props.params);
        return (
            <div>
                This is Deal details
            </div>
        )
    }
}