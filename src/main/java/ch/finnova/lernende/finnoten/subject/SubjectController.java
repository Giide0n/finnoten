package ch.finnova.lernende.finnoten.subject;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SubjectController {

  public SubjectController() {
  }

  @GetMapping("subject/{subjectid}")
  public SubjectData getSubjectById(
      @PathVariable("subjectid") int subjectid
  ){
    return null;
  }
}
