package bookstore.controllers;

import bookstore.models.entities.Book;
import bookstore.models.entities.MyBook;
import bookstore.models.repositories.BookRepository;
import bookstore.models.repositories.MyBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class MyBookController {

    @Autowired
    MyBookRepository books;

    /**
     * полный список - GET
     */
    @GetMapping("/books")
    public List<MyBook> index() {
        return (List<MyBook>) books.findAll();
    }

    /**
     * возвращаем одну книгу - GET
     * @param id
     */
    @GetMapping("/books/{id}")
    public MyBook get(@PathVariable long id) {
        Optional<MyBook> result = books.findById(id);

        if (result.isPresent()) {
            return result.get();
        } else {
            return null;
        }
    }

    /**
     * создание новой записи - POST
     */
    @PostMapping("/books")
    @ResponseStatus(HttpStatus.CREATED)
    public MyBook create(@RequestBody MyBook book) {
        return books.save(book);
    }

    /**
     * сохранение записи - PUT
     * @param id
     */
    @PutMapping("/books/{id}")
    @ResponseStatus(HttpStatus.OK)
    public MyBook save(@PathVariable long id, @RequestBody MyBook newBook) {
        return books.findById(id)
                .map(book -> {
                    book.setTitle(newBook.getTitle());
                    book.setAuthors(newBook.getAuthors());
                    book.setPrice(newBook.getPrice());
                    return books.save(book);
                })
                .orElseGet(() -> {
                    return null;
                });
    }

    /**
     * удаление книги - DELETE
     * @param id
     */
    @DeleteMapping("/books/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable long id) {
        books.deleteById(id);
    }

}
