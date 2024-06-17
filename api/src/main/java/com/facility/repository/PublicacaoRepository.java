package com.facility.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.facility.domain.Publicacao;

@Repository
public interface PublicacaoRepository extends JpaRepository<Publicacao, Long> {

}
