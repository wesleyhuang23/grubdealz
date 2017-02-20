import React from 'react';
import ReactDOM from 'react-dom';

export default class BrowseItem extends React.Component{
    render(){
        console.log(this.props);
        return (
            <div>
                <h2>{this.props.shortTitle}</h2>
            </div>
        )
    }
}