package com.active_lights.activelights.field;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
interface FieldRepository extends JpaRepository<Field, Long> {}
