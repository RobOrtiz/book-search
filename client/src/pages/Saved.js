import React, { Component } from "react";
import Header from "../components/Header";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import {  Container } from "../components/Grid";
import { SearchList, ListItem } from "../components/SearchList";

class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
      <Header>
      <h1>Books On My List</h1>
    </Header>
      <Container fluid>
            {this.state.books.length ? (
              <SearchList>
                {this.state.books.map(book => (
                  <ListItem
                    key={book._id}
                    title={book.title}
                    author={book.author}
                    href={book.href}
                    thumbnail={book.thumbnail}
                    description={book.description}
                    deleteBook={() => this.deleteBook(book._id)}
                  />

                ))}
              </SearchList>
            ) : (
              <h1 id="message" className="text-center">No Results to Display</h1>
            )}
      </Container>
      </div>
    );
  }
}

export default Saved;