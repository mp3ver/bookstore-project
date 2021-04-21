package bookstore.controllers;

import bookstore.models.entities.Genre;
import bookstore.models.entities.MyAuthor;
import bookstore.models.entities.MyBook;
import bookstore.models.repositories.GenreRepository;
import bookstore.models.repositories.MyAuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class MyAuthorController {

    @Autowired
    MyAuthorRepository authors;

    @GetMapping("/authors")
    public List<MyAuthor> index() {
        return (List<MyAuthor>) (authors.findAll());
    }

    @GetMapping("/authors/{id}")
    public MyAuthor get(@PathVariable long id) {
        Optional<MyAuthor> result = authors.findById(id);

        if (result.isPresent()) {
            return result.get();
        } else {
            return null;
        }
    }

    @PostMapping("/authors")
    @ResponseStatus(HttpStatus.CREATED)
    public MyAuthor create(@RequestBody MyAuthor author) {
        return authors.save(author);
    }

    /**
     * сохранение записи - PUT
     * @param id
     */
    @PutMapping("/authors/{id}")
    @ResponseStatus(HttpStatus.OK)
    public MyAuthor save(@PathVariable long id, @RequestBody MyAuthor newAuthor) {
        return authors.findById(id)
                .map(author -> {
                    author.setName(newAuthor.getName());
                    return authors.save(author);
                })
                .orElseGet(() -> {
                    return null;
                });
    }

    /**
     * удаление автора - DELETE
     * @param id
     */
    @DeleteMapping("/authors/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable long id) {
        authors.deleteById(id);
    }

}
