import axios from "axios";

export default {
  // get all books from Google API
  getBooks: function() {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=thedarktower");
  },
  getBook: function(search) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
  },
  saveBook: function(book) {
    return axios.post("/api/books", book);
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id)
  }
};