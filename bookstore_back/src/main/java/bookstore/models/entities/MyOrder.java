package bookstore.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.Entity;
import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="orders")
public class MyOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, name="user_id")
    private Long userId;

    @ManyToMany
    @JoinTable(
            name="book_to_order",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "book_id")
    )
    private Set<MyBook> books;

    public MyOrder() {
    }

    public MyOrder(Long id, Long userId, Set<MyBook> books) {
        this.id = id;
        this.userId = userId;
        this.books = books;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Set<MyBook> getBooks() {
        return books;
    }

    public void setBooks(Set<MyBook> books) {
        this.books = books;
    }
}
