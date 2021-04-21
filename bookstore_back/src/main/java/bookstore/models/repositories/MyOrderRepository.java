package bookstore.models.repositories;

import bookstore.models.entities.MyOrder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MyOrderRepository extends JpaRepository<MyOrder, Long> {

    List<MyOrder> findByUserId(Long userId);

}
