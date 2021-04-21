package bookstore.models.repositories;

import bookstore.models.entities.MyAuthor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MyAuthorRepository extends JpaRepository<MyAuthor, Long> {
}
