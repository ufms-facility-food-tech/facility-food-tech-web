package com.facility.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.facility.domain.CasoSucesso;

@Repository
public interface CasoSucessoRepository extends JpaRepository<CasoSucesso, Long> {

}
