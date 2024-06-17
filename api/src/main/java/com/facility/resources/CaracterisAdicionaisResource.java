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

import com.facility.domain.CaracterisAdicionais;
import com.facility.dto.CaracterisAdicionaisDTO;
import com.facility.service.CaracterisAdicionaisService;

@RestController
@RequestMapping("/api/v1/caracterisadicionais")
public class CaracterisAdicionaisResource {

    @Autowired
    private CaracterisAdicionaisService caracterisAdicionaisService;

    @GetMapping
    public ResponseEntity<List<CaracterisAdicionaisDTO>> findAll() {
        List<CaracterisAdicionaisDTO> caracterisAdicionais = caracterisAdicionaisService.findAll();
        if (caracterisAdicionais == null || caracterisAdicionais.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(caracterisAdicionais, HttpStatus.OK);
    }

    @PostMapping
    public CaracterisAdicionais create(@RequestBody CaracterisAdicionais CaracterisAdicionaisDTO) {
        return caracterisAdicionaisService.save(CaracterisAdicionaisDTO);
    }

    @GetMapping(path = {"/{id}"})
    public ResponseEntity<?> findById(@PathVariable Long id) {
        return caracterisAdicionaisService.findById(id).map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<CaracterisAdicionais> update(@PathVariable("id") Long id, @RequestBody CaracterisAdicionais caracterisAdicionais) {
        return caracterisAdicionaisService.findById(id).map(record -> {
            record.setCaracAdicionaisDesc(caracterisAdicionais.getCaracAdicionaisDesc());
            record.setPeptideo(caracterisAdicionais.getPeptideo());
            CaracterisAdicionais updated = caracterisAdicionaisService.save(record);
            return ResponseEntity.ok().body(updated);
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path = {"/{id}"})
    public ResponseEntity<?> delete(@PathVariable Long id) {
        return caracterisAdicionaisService.findById(id).map(record -> {
            caracterisAdicionaisService.deleteById(id);
            return ResponseEntity.ok().build();
        }).orElse(ResponseEntity.notFound().build());
    }
}
