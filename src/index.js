import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js'; // User defined components needs to specify relative path to the component
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBKSgiZkyOOLmcA_qIgZpECBJ4ibXOjQtQ';

// 1. Create a new component that produces some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    };

    YTSearch({key: API_KEY, term: 'Reactjs'}, (videos) => {
      this.setState({ videos }); // as the key and property name is same, we can
                                 // use this instead of this.state({ videos: videos})
    });
  }
    // return <div>Hi!</div>;// Babel translates this (JSX) into ES5 javascript
  render() {
    console.log('videos: ', this.state.videos);
    return ( // Many components can be put inside a paranthesis like this
      <div>
        <SearchBar />
      </div>
    );
  }
}

// 2. Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));
