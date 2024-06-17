package com.facility.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.facility.domain.AtivAntibacteriana;

@Repository
public interface AtivAntibacterianaRepository extends JpaRepository<AtivAntibacteriana, Long> {

}
