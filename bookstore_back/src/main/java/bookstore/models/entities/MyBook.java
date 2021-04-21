package bookstore.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.Entity;
import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="books")
public class MyBook {

    public MyBook(Long id, String title, Double price, Set<MyAuthor> authors) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.authors = authors;
    }

    public MyBook() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Set<MyAuthor> getAuthors() {
        return authors;
    }

    public void setAuthors(Set<MyAuthor> authors) {
        this.authors = authors;
    }

    @Column(nullable = false)
    private Double price;

    @JsonIgnoreProperties({"books"})
    @ManyToMany
    @JoinTable(
            name="book_to_author",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "author_id")
    )
    private Set<MyAuthor> authors;

}
