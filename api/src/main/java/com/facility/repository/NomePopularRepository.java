package com.facility.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.facility.domain.NomePopular;

@Repository
public interface NomePopularRepository extends JpaRepository<NomePopular, Long> {

}
