import React, { Component } from 'react';
import Callout from 'react-callout-component';
 
class CallOut extends Component {
  constructor() {
    super();
    this.state = {
      box: null,
    };
    this.boxEl = React.createRef();
  }
 
  componentDidMount() {
    this.setState({
      box: this.boxEl.current,
    });
  }
 
  render() {
      
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 500 }}>
        <div ref={this.boxEl} style={{ backgroundColor: 'purple', height: 100, width: 100 }} />
        <Callout isVisible parentElement={this.state.box}>
          <span style={{ color: 'white' }}>This is a box</span>
        </Callout>
      </div>
    );
  }
}
 
export default CallOut;
 