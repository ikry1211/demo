import React, { Component } from 'react';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
<MyHeader></MyHeader>
    );
  }
}

const MyHeader=styled.div`
height: auto;
width:100%;
background: #FFC107;
padding-top: 10vw;
padding-bottom: 10vw;
box-shadow: 0 6px 5px #9D9D9D;
z-index: 999;
`;

export default App;
