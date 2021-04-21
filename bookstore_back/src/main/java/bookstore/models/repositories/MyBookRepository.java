package bookstore.models.repositories;

import bookstore.models.entities.MyBook;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MyBookRepository extends JpaRepository<MyBook, Long> {
}
