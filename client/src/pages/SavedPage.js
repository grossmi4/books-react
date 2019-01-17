import React from "react";
import Search from "../components/Search";
import Book from "../components/Book";
import API from "../utils/API";

class SavedPage extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    API.getSavedBooks()
      .then(res => {
        console.log(res);
        this.setState({
          books: res.data
        });
        console.log(this.state.books);
      })
  };

  handleDelete = event => {
    const book = this.state.books[event.target.id].volumeInfo;
    const deletedBook = {
      id: book.id
    };
    API.deleteBook(deletedBook.id)
      .then(API.getSavedBooks()
        .then(res => {
          this.setState({
            books: res.data.books
          })
        })
      )
  };

  render() {
    console.log(this.state.books);
    return(
      <div className="container">
        <div className="row">
          <Search
            value={this.state.title}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div className="row">
          {this.state.books.map((book, index) => (
            <Book
              cardType="save"
              handleDelete={this.handleDelete}
              key={index}
              id={index}
              title={book.title}
              author={book.authors}
              description={book.description}
              image={book.image}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default SavedPage