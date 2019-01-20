import React, { Component } from 'react';
import { Container, ImageContainer, InfoContainer, Name, Description, Quote } from './theme/grid';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imounted: false
    }
  }

  render() {
    return (
      <Container>
         <ImageContainer/>
         <InfoContainer>
           <Name>Abhishek R Athreya</Name>
           <Description>Full-stack Developer by day. Full-on Anime fan by night.</Description>
           <Quote>
             <blockquote>Quotes are too mainstream! If you want inspiration, check out the comments I write in my code.</blockquote>
             <div className="byline">- Me</div>
           </Quote>
         </InfoContainer>
      </Container>
    )
}

};

export default App;
