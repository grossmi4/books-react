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


}

export default searchPage