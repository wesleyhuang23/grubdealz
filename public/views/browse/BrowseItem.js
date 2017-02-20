import React from 'react';
import ReactDOM from 'react-dom';

export default class BrowseItem extends React.Component{
    render(){
        let bgImg = {
            backgroundImage: 'url(' + this.props.img + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
        let position = {
            position: 'absolute'
        }
        console.log(this.props);
        return (
            <div className="deal-item">
                <div style={bgImg}>
                </div>
                <p style={position}>{this.props.shortTitle}</p>
                <p id="price">${this.props.value}</p>
            </div>
        )
    }
}