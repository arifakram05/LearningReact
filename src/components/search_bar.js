import React, { Component } from 'react'; // Though we are not using React in this file, we still
                           // need this such that React is in scope to convert JSX into Javascript

// SearchBar class is a React.Component i.e. SearchBar gets all of React.Component's functionality
class SearchBar extends Component {
  // called whenever a new instance of the class is created
  constructor(props) {
    super(props);

    this.state = {
      term: 'Search here...',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // every class component in React should have a render() method, and should return JSX
  render() {
    return (
      <div>
        <input value={this.state.term} onChange={this.handleInputChange} />
        <p>New Term: {this.state.term}</p>
      </div>
    );
  }

  handleInputChange(event) {
    // console.log('typed: ', event.target.value);
    this.setState({
      term: event.target.value
    });
  }

}

export default SearchBar;
// You need to export this component such that the file
// that imports this file, has access to this component
