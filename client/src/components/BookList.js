import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
  {
    books {
      name
    }
  }
`;

class BookList extends Component {
  displayBooks = () => {
    let data = this.props.data;

    if (data.loading) {
      return <div>Loading Data...</div>;
    } else {
      return data.books.map((book, index) => {
        return <li key={index}>{book.name}</li>;
      });
    }
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <ul className="book-list">
          <li>Books</li>
          {this.displayBooks()}
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
