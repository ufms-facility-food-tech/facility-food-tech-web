package com.facility.repository;

import com.facility.domain.AtivCitotoxica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AtivCitotoxicaRepository extends JpaRepository<AtivCitotoxica, Long> {}
