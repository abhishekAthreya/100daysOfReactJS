import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from './components/common/HeaderContainer'
import Overlay from './components/common/Overlay'
import Container from './components/common/Container'
import ImagePreview from './components/ImagePreviewArea/ImagePreview'
import Checkout from './components/CheckoutArea/Checkout'

class App extends Component {

  constructor(props){
    super(props);
    this.state = 
      {
        mounted: false,
        people: 1,
        price: 320.00,
        tax: 20,
        duration: 5,
        discount: 5
      };
  }

  handleChange = (e) => {
    this.setState({ duration: e.target.value });
  }

  componentDidMount = () => {
    this.setState({ mounted: true });
  }

  render() {
    return (
      <div className="App">
        <HeaderContainer onChange={this.handleChange}/>
        <Overlay image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg"/>
        <Container>
          <ImagePreview price={this.state.price} duration={this.state.duration} people={this.state.people} image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg" />
          <Checkout duration={this.state.duration} discount={this.state.discount} tax={this.state.tax} price={this.state.price} onSubmit={this.handleSubmit} />
        </Container>
      </div>
    );
  }
}

export default App;
