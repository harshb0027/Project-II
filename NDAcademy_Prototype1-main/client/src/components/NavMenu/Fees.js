/*
*AUTHORS: Daniel Gribanov, Mathieu Theriault
*PURPOSE:
*VERSION:1.0
*DATE:
*/
import React, { Component } from 'react';

export class Fees extends Component {
    static displayName = Fees.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  render() {
 
    return (
      <div>
        <h1>FEES PAGE. To be added later</h1>
        <p>more info about the contact information will be displayed here in due time</p>
        
      </div>
    );
  }

 
}