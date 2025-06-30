import React, { useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {
  const [refresh, setRefresh] = useState(0);

  return (
    <div>
      <h1>Book Manager</h1>
      <BookForm onSaved={() => setRefresh((r) => r + 1)} />
      <hr />
      <BookList key={refresh} />
    </div>
  );
}

export default App;
