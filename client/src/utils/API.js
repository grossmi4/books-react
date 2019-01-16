import axios from "axios";

export default {
  // get all books from Google API
  getBooks: function() {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=themartian");
  },
  getBook: function(search) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
  },
  getSavedBooks: function() {
    return axios.get("/api/books")
  },
  saveBook: function(book) {
    return axios.post("/api/books", book);
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id)
  }
};