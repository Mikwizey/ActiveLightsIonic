package com.active_lights.activelights.field;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.util.stream.Stream;

@Component
public class FieldCommandLineRunner implements CommandLineRunner {

  private final FieldRepository repository;

  public FieldCommandLineRunner(FieldRepository repository) {
    this.repository = repository;
  }

  @Override
  public void run(String... strings) throws Exception {
    // Top beers from https://www.beeradvocate.com/lists/top/
    Stream.of(
            "Kentucky Brunch Brand Stout",
            "Good Morning",
            "Very Hazy",
            "King Julius",
            "Budweiser",
            "Coors Light",
            "PBR")
        .forEach(name -> repository.save(new Field(name)));
    repository.findAll().forEach(System.out::println);
  }
}
