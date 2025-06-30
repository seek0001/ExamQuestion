import React, { useState, useEffect } from "react";
import api from "../api";

export default function BookForm({ book, onSaved }) {
  const [form, setForm] = useState({ title: "", author: "", description: "" });

  useEffect(() => {
    if (book) setForm(book);
  }, [book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("", form); // ✅ posts to baseURL: "http://localhost:8080/books"
    onSaved();
    setForm({ title: "", author: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
      <input name="author" value={form.author} onChange={handleChange} placeholder="Author" required />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <button type="submit">Save Book</button>
    </form>
  );
}
