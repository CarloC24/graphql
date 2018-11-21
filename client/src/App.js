import React, { Component } from 'react';
import BookList from './components/BookList';
import AddBook from './components/Addbook';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Carlo'
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.name} list of books</h1>
          <BookList />
          <AddBook />
        </header>
      </div>
    );
  }
}

export default App;
