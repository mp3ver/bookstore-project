//package bookstore.controllers;
//
//import bookstore.models.entities.Genre;
//import bookstore.models.repositories.GenreRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@CrossOrigin
//public class GenreController {
//
//    @Autowired
//    GenreRepository genres;
//
//    @GetMapping("/genres")
//    public List<Genre> index() {
//        return (List<Genre>) (genres.findAll());
//    }
//
//    @GetMapping("/genres/{id}")
//    public Genre get(@PathVariable long id) {
//        Optional<Genre> result = genres.findById(id);
//
//        if (result.isPresent()) {
//            return result.get();
//        } else {
//            return null;
//        }
//    }
//
//    @PostMapping("/genres")
//    @ResponseStatus(HttpStatus.CREATED)
//    public Genre create(@RequestBody Genre genre) {
//        return genres.save(genre);
//    }
//
//}
