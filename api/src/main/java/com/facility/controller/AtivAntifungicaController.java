package com.facility.controller;

import com.facility.dto.AtivAntifungicaDTO;
import com.facility.model.AtivAntifungica;
import com.facility.repository.AtivAntifungicaRepository;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("atividades-antifungicas")
public class AtivAntifungicaController {

  @Autowired private AtivAntifungicaRepository ativAntiFungicaRepository;

  @GetMapping
  public ResponseEntity<List<AtivAntifungicaDTO>> findAll() {
    List<AtivAntifungicaDTO> ativsAntifungicas =
        ativAntiFungicaRepository.findAll().stream()
            .map(ativAntifungica -> new AtivAntifungicaDTO(ativAntifungica))
            .collect(Collectors.toList());
    if (ativsAntifungicas == null || ativsAntifungicas.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    return new ResponseEntity<>(ativsAntifungicas, HttpStatus.OK);
  }

  @PostMapping
  public AtivAntifungica create(@RequestBody AtivAntifungica ativAntifungica) {
    return ativAntiFungicaRepository.save(ativAntifungica);
  }

  @GetMapping(path = {"/{id}"})
  public ResponseEntity<?> findById(@PathVariable Long id) {
    return ativAntiFungicaRepository
        .findById(id)
        .map(record -> ResponseEntity.ok().body(record))
        .orElse(ResponseEntity.notFound().build());
  }

  @PutMapping(value = "/{id}")
  public ResponseEntity<AtivAntifungica> update(
      @PathVariable("id") Long id, @RequestBody AtivAntifungica ativAntifungica) {
    return ativAntiFungicaRepository
        .findById(id)
        .map(
            record -> {
              record.setDescricao(ativAntifungica.getDescricao());
              record.setPeptideo(ativAntifungica.getPeptideo());
              AtivAntifungica updated = ativAntiFungicaRepository.save(record);
              return ResponseEntity.ok().body(updated);
            })
        .orElse(ResponseEntity.notFound().build());
  }

  @DeleteMapping(path = {"/{id}"})
  public ResponseEntity<?> delete(@PathVariable Long id) {
    return ativAntiFungicaRepository
        .findById(id)
        .map(
            record -> {
              ativAntiFungicaRepository.deleteById(id);
              return ResponseEntity.ok().build();
            })
        .orElse(ResponseEntity.notFound().build());
  }
}
