import React, { Component } from 'react';

// Import Relevant Syles
import Styles from './component-styles/component-styles.js';

import ScrollDiv from './scroll-div-component.js';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      windowScrolling: false
    };
    this.onScroll = this.onScroll.bind(this);
    this.stopScroll = this.stopScroll.bind(this);
  }
  onScroll(){
    //Sets state to true when window is scrolling.
    this.setState({
      windowScrolling: true
    });
  }
  stopScroll(){
    //Sets state to false when windows stops scolling.
    this.setState({
      windowScrolling: false
    });
  }
  render() {
    
    // Handle Window Scrolling. Determine when scrolling has stopped
    // And update state accordingly...
    // We set a timeout that gets rest if the scroll event is still occuring...

    let timer = null;
    window.addEventListener('scroll', function(){
      if(timer !== null){
        clearTimeout(timer);
        if(!this.state.windowScrolling){
          this.onScroll();
        }
      }
      timer = setTimeout(function(){
        if(this.state.windowScrolling){
          this.stopScroll(); 
        }
      }.bind(this), 200);
    }.bind(this));

    return (
      <div id="app-wrapper"
           style={Styles.appWrapper}>
        {/* Speed should be > 0. The lesser the better though... */}
        <ScrollDiv  style={{...Styles.generalScroll, ...Styles.scrollComponent1}}
                    id="scroll-component-1"
                    speed='3' 
                    scrolling={this.state.windowScrolling}>
            <h3>Fast</h3>
        </ScrollDiv>

        <ScrollDiv  style={{...Styles.generalScroll, ...Styles.scrollComponent2}}
                    id="scroll-component-2"
                    speed='10' 
                    scrolling={this.state.windowScrolling}>
            <h3>Slow</h3>
        </ScrollDiv>

        <ScrollDiv  style={{...Styles.generalScroll, ...Styles.scrollComponent3}}
                    id="scroll-component-3"
                    speed='1' 
                    scrolling={this.state.windowScrolling}>
            <h3>Overtake those slow mothafuckaz</h3>
        </ScrollDiv>
      </div>
    );
  }
}
