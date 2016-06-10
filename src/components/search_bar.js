import React, {Component } from 'react';

//FUNCTION component --> don't have constructor nor state

/*const SearchBar = () => {
  return <input />;  //React.crateElement
};*/

//CLASS component

class SearchBar extends Component {
  constructor(props) {
    super(props);  //Component already have contructor

    this.state = { term: ''};
  }

  render() {
    return (
      //value= {this.state.term} a dins el div
      <div className="search-bar">
        <input
        value = {this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term);  //el crido del index.js
  }
}

export default SearchBar;
