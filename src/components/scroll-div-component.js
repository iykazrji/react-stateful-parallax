import React, { Component, PropTypes } from 'react';
import Styles from './component-styles.js';

export default class ScrollDiv extends Component {
	constructor(props){
		super(props);
		this.state = {
			scrollPosition: 0
		}
		this.getItemPosition = this.getItemPosition.bind(this);
		this.checkScrollAction = this.checkScrollAction.bind(this);
		this.initPosition = this.initPosition.bind(this);
	}
	componentDidMount(){
		//Move Items to Position on instantiation
		this.initPosition();
		//Runs the loop to check if user updates scroll
		this.checkScrollAction();
	}
	initPosition(){
		this.setState({
			scrollPosition: this.getItemPosition(this.props.speed)
		});
	}
	getItemPosition(speed){
		let scrollTop = (window.pageYOffset !== undefined) ? 
							window.pageYOffset : 
							(document.documentElement || document.body.parentNode || document.body).scrollTop;
		let position = scrollTop / (parseInt(speed) / 2) ;
		console.log(position);
		return position;
	}
	checkScrollAction(){
		//This method runs a loop to check if the user updated his scroll
		setInterval(function(){
			if(this.props.scrolling){
				this.setState({
					scrollPosition: this.getItemPosition(this.props.speed)
				});
			}
		}.bind(this), 200);
	}
	render(){
		let scrollingStyle = {
			transform: "translate3d(0px, "+-this.state.scrollPosition+"px, 0px)"
		}
		return (
			<div style={{...this.props.style, ...scrollingStyle}}>
				{this.props.children}
			</div>
		);
	}
}

ScrollDiv.propTypes = {
	speed: React.PropTypes.string,
	scrolling: React.PropTypes.bool
}