package com.active_lights.activelights.field;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Collection;
import java.util.stream.Collectors;

@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080", "http://localhost:8100"})
@RestController
public class FieldController {
  private FieldRepository repository;

  public FieldController(FieldRepository repository) {
    this.repository = repository;
  }

  @RequestMapping("/field")
  public Collection<Field> goodField() {

    return repository.findAll().stream().filter(this::isGreat).collect(Collectors.toList());
  }

  private boolean isGreat(Field field) {
    return !field.getName().equals("Budweiser")
        && !field.getName().equals("Coors Light")
        && !field.getName().equals("PBR");
  }
}
