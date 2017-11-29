import React, { Component } from 'react';
import styled from 'styled-components'

import BlackBoxAnimated from './BlackBoxAnimated'

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background: #333;
`
const ImageBox = styled.div`
  width: 600px;
  height: 400px;
  background: url('https://cdn-images-1.medium.com/max/2000/1*8v-jC0gOxqP2oOaTY32w_A.jpeg');
  background-size: cover;
  background-position: center;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <ImageBox>
          <BlackBoxAnimated
            reverseDirection={false}
          />
          <BlackBoxAnimated
            reverseDirection={true}
          />
          <BlackBoxAnimated
            reverseDirection={false}
          />
          <BlackBoxAnimated
            reverseDirection={true}
          />
        </ImageBox>
      </Wrapper>
    );
  }
}

export default App;
