package com.example.ElasticSearchDemo;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173") // React default port
@RestController
@RequestMapping("/books")
public class BookController {

    private final BookRepo bookRepo;

    public BookController(BookRepo bookRepo) {
        this.bookRepo = bookRepo;
    }

    @PostMapping
    public Book createBook(@RequestBody Book book) {
        return bookRepo.save(book);
    }

    @GetMapping("/{id}")
    public Book getBookById(@PathVariable String id) {
        return bookRepo.findById(id).orElse(null);
    }

    @GetMapping("/title/{title}")
    public List<Book> getBooksByTitle(@PathVariable String title) {
        return bookRepo.findByTitle(title);
    }

    @GetMapping("/author/{author}")
    public List<Book> getBooksByAuthor(@PathVariable String author) {
        return bookRepo.findByAuthor(author);
    }

    @GetMapping("/description/{description}")
    public List<Book> getBooksByDescription(@PathVariable String description) {
        return bookRepo.findByDescription(description);
    }

    @GetMapping("/search")
    public List<Book> searchBooks(@RequestParam String title, @RequestParam String author) {
        return bookRepo.findByTitleOrAuthor(title, author);
    }

    @GetMapping
public List<Book> getAllBooks() {
    return (List<Book>) bookRepo.findAll();
}

}