package bookstore.controllers;

import bookstore.models.entities.*;
import bookstore.models.repositories.GenreRepository;
import bookstore.models.repositories.MyAuthorRepository;
import bookstore.models.repositories.MyOrderRepository;
import bookstore.models.repositories.MyUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class MyOrderController {

    @Autowired
    MyOrderRepository orders;

    @Autowired
    MyUserRepository users;

    @GetMapping("/orders")
    public List<MyOrder> index() {
        return orders.findAll();
    }

    @GetMapping("/orders/{basic}")
    public List<MyOrder> customerOrders(@PathVariable String basic) {
        byte[] decodedBytes = Base64.getDecoder().decode(basic);
        String login = (new String(decodedBytes)).split(":")[0];
        Optional<MyUser> myUser = users.findByLogin(login);
        if(myUser.isPresent()){
            return orders.findByUserId(myUser.get().getId());
        }
        else{
            return null;
        }
    }

//    @PostMapping("/orders")
//    @ResponseStatus(HttpStatus.CREATED)
//    public MyOrder create(@RequestBody MyOrder newOrder) {
//        return orders.save(newOrder);
//    }

    @PostMapping("/orders/{basic}")
    @ResponseStatus(HttpStatus.CREATED)
    public MyOrder create(@RequestBody MyOrder newOrder, @PathVariable String basic) {

        byte[] decodedBytes = Base64.getDecoder().decode(basic);
        String login = (new String(decodedBytes)).split(":")[0];

        Optional<MyUser> myUser = users.findByLogin(login);
        if(myUser.isPresent()){
            newOrder.setUserId(myUser.get().getId());
            return orders.save(newOrder);
        }
        else{
            return null;
        }
        //return orders.save(newOrder);
    }

}
