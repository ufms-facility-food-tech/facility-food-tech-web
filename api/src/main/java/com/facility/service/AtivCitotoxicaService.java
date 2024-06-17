package com.facility.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.facility.domain.AtivCitotoxica;
import com.facility.dto.AtivCitotoxicaDTO;
import com.facility.repository.AtivCitotoxicaRepository;

@Service
public class AtivCitotoxicaService {

    @Autowired
    private AtivCitotoxicaRepository ativCitotoxicaRepository;

    public AtivCitotoxica save(AtivCitotoxica ativCitotoxica) {
        return ativCitotoxicaRepository.save(ativCitotoxica);
    }

    public List<AtivCitotoxicaDTO> findAll() {
        return ativCitotoxicaRepository.findAll().stream().map(ativCitotoxica -> new AtivCitotoxicaDTO(ativCitotoxica)).collect(Collectors.toList());
    }

    public Optional<AtivCitotoxica> findById(Long id) {
        return ativCitotoxicaRepository.findById(id);
    }

    public AtivCitotoxica update(AtivCitotoxica ativCitotoxica) {
        return ativCitotoxicaRepository.save(ativCitotoxica);
    }

    public void deleteById(Long id) {
        ativCitotoxicaRepository.deleteById(id);
    }
}
