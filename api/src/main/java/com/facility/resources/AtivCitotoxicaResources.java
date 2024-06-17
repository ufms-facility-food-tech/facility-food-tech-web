package com.facility.resources;

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

import com.facility.domain.AtivCitotoxica;
import com.facility.dto.AtivCitotoxicaDTO;
import com.facility.service.AtivCitotoxicaService;

@RestController
@RequestMapping("/api/v1/ativcitotoxica")
public class AtivCitotoxicaResources {

    @Autowired
    private AtivCitotoxicaService ativCitotoxicaService;

    @GetMapping
    public ResponseEntity<List<AtivCitotoxicaDTO>> findAll() {
        List<AtivCitotoxicaDTO> ativsCitotoxicas = ativCitotoxicaService.findAll();
        if (ativsCitotoxicas == null || ativsCitotoxicas.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(ativsCitotoxicas, HttpStatus.OK);
    }

    @PostMapping
    public AtivCitotoxica create(@RequestBody AtivCitotoxica ativCitotoxica) {
        return ativCitotoxicaService.save(ativCitotoxica);
    }

    @GetMapping(path = {"/{id}"})
    public ResponseEntity<?> findById(@PathVariable Long id) {
        return ativCitotoxicaService.findById(id).map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<AtivCitotoxica> update(@PathVariable("id") Long id, @RequestBody AtivCitotoxica ativCitotoxica) {
        return ativCitotoxicaService.findById(id).map(record -> {
            record.setAtivCitotoxicDesc(ativCitotoxica.getAtivCitotoxicDesc());
            record.setPeptideo(ativCitotoxica.getPeptideo());
            AtivCitotoxica updated = ativCitotoxicaService.save(record);
            return ResponseEntity.ok().body(updated);
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path = {"/{id}"})
    public ResponseEntity<?> delete(@PathVariable Long id) {
        return ativCitotoxicaService.findById(id).map(record -> {
            ativCitotoxicaService.deleteById(id);
            return ResponseEntity.ok().build();
        }).orElse(ResponseEntity.notFound().build());
    }
}
