package com.facility.repository;

import com.facility.domain.Organismo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrganismoRepository extends JpaRepository<Organismo, Long> {}
