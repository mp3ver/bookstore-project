package bookstore;

import bookstore.models.entities.MyAuthor;
import bookstore.models.entities.MyBook;
import bookstore.models.repositories.MyAuthorRepository;
import bookstore.models.repositories.MyBookRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
//@DataJpaTest
@SpringBootTest
@TestPropertySource(
        locations = "classpath:application-fortest.properties")
public class AuthorsTableTest {

    @Autowired
    MyAuthorRepository myAuthorRepository;

    @Test
    public void isEmpty() {
        Iterable<MyAuthor> authors = myAuthorRepository.findAll();

        assertThat(authors).isEmpty();
    }

}
