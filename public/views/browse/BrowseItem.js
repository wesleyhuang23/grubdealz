import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

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
            <Link to={`deal/${this.props.id}`}>
                <div style={bgImg}>
                </div>
                <p style={position}>{this.props.shortTitle} <br /></p>
                <p id="place">{this.props.merchant.locality}, {this.props.merchant.region}</p>
                <p id="price">${this.props.value}</p>
            </Link>
            </div>
        )
    }
}