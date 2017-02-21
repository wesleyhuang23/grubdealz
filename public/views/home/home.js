import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';

export default class Home extends React.Component{
    constructor() {
        super();
    }
    term(event){
        console.log(event.target.value);
        this.setState({
            city: event.target.value
        });
    }
    goToBrowser(){
        console.log(this.state.city);
        browserHistory.push('/browse/' + this.state.city);
    }
    render(){
        return(
            <div className="home-content">
            <div className="darken"></div>
                <video className="video-container" loop autoPlay>
                    <source type="video/mp4" src="./videos/food.mp4" />
                </video>
                <div className="content-container">
                    <h1>Grub<span>Dealz</span></h1>
                    <form onSubmit={() => {this.goToBrowser(event)} }>
                        <input placeholder="CITY" type="text" onChange={this.term.bind(this)}/>
                    </form>
                </div>
            </div>
        )
    }
}