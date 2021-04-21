package bookstore.config;

import bookstore.models.entities.MyUser;
import bookstore.models.repositories.MyUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import javax.xml.ws.soap.Addressing;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Component
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    MyUserRepository myUserRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<MyUser> myUser = myUserRepository.findByLogin(username);

        if(!myUser.isPresent()) {
            throw new UsernameNotFoundException("User not found");
        }

//        UserDetails user = User.builder()
//                .username(myUser.getLogin())
//                .password(myUser.getPassword())
//                .roles(myUser.getRole())
//                .build();
//        return user;

//        List<SimpleGrantedAuthority> authorities = Arrays.asList(new SimpleGrantedAuthority("user"));
        List<SimpleGrantedAuthority> authorities = Arrays.asList(new SimpleGrantedAuthority(myUser.get().getRole()));

        return new User(myUser.get().getLogin(), myUser.get().getPassword(), authorities);
    }

}
