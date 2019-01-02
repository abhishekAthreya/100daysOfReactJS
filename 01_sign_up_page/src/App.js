import React, { Component } from 'react';
import Modal from './components/Modal';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imounted: false
    }
  }

  componentDidMount = () => this.setState({ mounted: true });

  handleSubmit = (e) => {
    this.setState({ mounted: false });
    e.preventDefault();
  }


  render() {
    var child;
		if(this.state.mounted) {
			child = (<Modal onSubmit={this.handleSubmit} />);
		}
		
		return(
			<div className="App">
					{child}
			</div>
		);
}

};

export default App;
