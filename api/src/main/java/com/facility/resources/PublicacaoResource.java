package com.facility.resources;

import com.facility.domain.Publicacao;
import com.facility.dto.PublicacaoDTO;
import com.facility.service.PublicacaoService;
import java.util.List;
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
@RequestMapping("/api/v1/publicacoes")
public class PublicacaoResource {

  @Autowired private PublicacaoService publicacaoService;

  @GetMapping
  public ResponseEntity<List<PublicacaoDTO>> findAll() {
    List<PublicacaoDTO> publicacoes = publicacaoService.findAll();
    if (publicacoes == null || publicacoes.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    return new ResponseEntity<>(publicacoes, HttpStatus.OK);
  }

  @PostMapping
  public Publicacao create(@RequestBody Publicacao publicacao) {
    return publicacaoService.save(publicacao);
  }

  @GetMapping(path = {"/{id}"})
  public ResponseEntity<?> findById(@PathVariable Long id) {
    return publicacaoService
        .findById(id)
        .map(record -> ResponseEntity.ok().body(record))
        .orElse(ResponseEntity.notFound().build());
  }

  @PutMapping(value = "/{id}")
  public ResponseEntity<Publicacao> update(
      @PathVariable("id") Long id, @RequestBody Publicacao publicacao) {
    return publicacaoService
        .findById(id)
        .map(
            record -> {
              record.setPublicac(publicacao.getPublicac());
              record.setPeptideo(publicacao.getPeptideo());
              Publicacao updated = publicacaoService.save(record);
              return ResponseEntity.ok().body(updated);
            })
        .orElse(ResponseEntity.notFound().build());
  }

  @DeleteMapping(path = {"/{id}"})
  public ResponseEntity<?> delete(@PathVariable Long id) {
    return publicacaoService
        .findById(id)
        .map(
            record -> {
              publicacaoService.deleteById(id);
              return ResponseEntity.ok().build();
            })
        .orElse(ResponseEntity.notFound().build());
  }
}
