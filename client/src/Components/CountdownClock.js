import React, { useState, useEffect, Component } from 'react';
import { Timer } from 'react-countdown-clock-timer';
import {ReactCountdownClock } from 'react-countdown-clock';
import { Button, Row, Col } from 'react-bootstrap';

export class CountdownClock extends React.Component {
    constructor(props){
        super(props)
        this.tick = this.tick.bind(this)
        this.state = {seconds: 10, disabled: false}
   
      }
      
      onStart(){
        this.timer = setInterval(this.tick, 1000);
        this.setState({disabled: true})
      }
    
      tick(){
        if (this.state.seconds > 0) {
          this.setState({seconds: this.state.seconds - 1})
        } else {
          clearInterval(this.timer);
          window.location.reload();
        }
      }
      render(){
        return (<>
        <Row  className="justify-content-center">
          <Col sm={3}>
          <span className="p-3" style ={{border: '4px solid blue', width:'100px', height:'100px', borderRadius:'100%'}}>{this.state.seconds}...</span>
          </Col>
        </Row>
        <Row className="justify-content-center">
           <Col sm={3}>
           <Button className="mt-4" disabled={this.state.disabled} onClick={() => this.onStart()}>START</Button>
           </Col>
        </Row>
          </>)
      }
}