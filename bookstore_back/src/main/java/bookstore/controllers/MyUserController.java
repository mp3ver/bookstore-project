package bookstore.controllers;

import bookstore.models.entities.MyOrder;
import bookstore.models.entities.MyUser;
import bookstore.models.repositories.MyUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
public class MyUserController {

    @Autowired
    MyUserRepository myUserRepository;

    @PostMapping("/auth")
    @ResponseStatus(HttpStatus.OK)
    public MyUser auth(@RequestBody MyUser authData) {

        Optional<MyUser> foundedUser = myUserRepository.findByLogin(authData.getLogin());

        if(foundedUser.isPresent()){
            String passByBack = foundedUser.get().getPassword();
            String passByFront = authData.getPassword();
            BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
            if(bCryptPasswordEncoder.matches(passByFront,passByBack)){
                authData.setRole(foundedUser.get().getRole());
            }
            else{
                authData.setRole("Wrong password");
            }
        }
        else{
            authData.setRole("No such user");
        }

        return authData;

    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<MyUser> register(@RequestBody MyUser newUser) {

        Optional<MyUser> shouldNotBeFounded = myUserRepository.findByLogin(newUser.getLogin());

        if(shouldNotBeFounded.isPresent()){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        else{
            BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
            newUser.setPassword(  bCryptPasswordEncoder.encode(newUser.getPassword())  );
            return ResponseEntity.ok(myUserRepository.save(newUser));
        }
    }

}
