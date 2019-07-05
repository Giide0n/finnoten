package ch.finnova.lernende.finnoten.login;

import ch.finnova.lernende.finnoten.user.UserData;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {

  private ArrayList<Integer> sessionList = new ArrayList<>();

  public LoginController() {

  }

  @GetMapping("login/username/{username}/password/{password}")
  public UserData loginUser(
      @PathVariable("username") String username,
      @PathVariable("password") String password
  ) {
    return null;
  }


}
