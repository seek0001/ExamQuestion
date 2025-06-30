package com.example.ElasticSearchDemo;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import java.util.List;

public interface BookRepo extends ElasticsearchRepository<Book, String> {
    List<Book> findByTitle(String title);
    List<Book> findByAuthor(String author);
    List<Book> findByDescription(String description);
    List<Book> findByTitleOrAuthor(String title, String author);
}