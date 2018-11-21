import React, { Component } from 'react';
import { getAuthorsQuery, addBookMutations } from '../queries/queries';
import { graphql, compose } from 'react-apollo';

class AddBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: '',
      authorId: ''
    };
  }
  displayAuthors() {
    let data = this.props.data;
    if (data.loading) {
      return <option disabled> Loading authors...</option>;
    } else {
      return data.authors.map((author, index) => {
        return (
          <option key={index} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }

  submitform = e => {
    e.preventDefault();
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      }
    });
  };
  render() {
    console.log(this.props);
    return (
      <form id="add-book" onSubmit={this.submitform}>
        <div className="field">
          <label>Book name:</label>
          <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input
            type="text"
            onChange={e => this.setState({ genre: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Author:</label>

          <select onChange={e => this.setState({ authorId: e.target.value })}>
            <option>Select Author</option>
            {this.displayAuthors()}
          </select>
        </div>
        <button type="submit">+</button>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery),
  graphql(addBookMutations, { name: 'addBookMutation' })
)(AddBooks);
