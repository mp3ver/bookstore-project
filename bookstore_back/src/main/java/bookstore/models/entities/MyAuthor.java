package bookstore.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.Entity;
import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="authors")
public class MyAuthor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @JsonIgnoreProperties({"authors"})
    @ManyToMany(mappedBy = "authors")
    Set<MyBook> books;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<MyBook> getBooks() {
        return books;
    }

    public void setBooks(Set<MyBook> books) {
        this.books = books;
    }

    public MyAuthor(Long id, String name, Set<MyBook> books) {
        this.id = id;
        this.name = name;
        this.books = books;
    }

    public MyAuthor() {
    }
}
