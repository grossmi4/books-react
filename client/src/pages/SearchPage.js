import React from "react";
import Search from "../components/Search";
import Book from "../components/Book";
import API from "../utils/API";

class searchPage extends React.Component {
  state = {
    books: [],
    search: ""
  };

  componentDidMount() {
    API.getBooks()
      .then(res => {
        this.setState({
          books: res.data.items
        });
        console.log(this.state.books);
      })
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    API.getBook(this.state.search)
      .then(res => {
        this.setState({
          books: res.data.items
        });
      }).catch(err => console.log(err));
  };

  handleSave = event => {
    const book = this.state.books[event.target.id].volumeInfo;
    const newBook = {
      title: book.title,
      authors: book.authors,
      description: book.description,
      image: book.imageLinks.smallThumbnail,
      link: book.infoLink
    };
    API.saveBook(newBook)
      .then(res => {
        this.setState({
          books: []
        })
      })
  };

  render() {
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
              handleSave={this.handleSave}
              key={index}
              id={index}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              description={book.volumeInfo.description}
              image={book.volumeInfo.imageLinks.smallThumbnail}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default searchPage