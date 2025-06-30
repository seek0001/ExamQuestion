import React, { useEffect, useState } from "react";
import api from "../api";

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // For now fetch a specific author's books for demo
    api.get("/author/test").then((res) => setBooks(res.data));
  }, []);

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <b>{book.title}</b> by {book.author}<br />
          <small>{book.description}</small>
        </li>
      ))}
    </ul>
  );
}
