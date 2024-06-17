package com.facility.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.facility.domain.AtivAntibacteriana;
import com.facility.dto.AtivAntibacterianaDTO;
import com.facility.repository.AtivAntibacterianaRepository;

@Service
public class AtivAntibacterianaService {

    @Autowired
    private AtivAntibacterianaRepository ativAntibacterianaRepository;

    public AtivAntibacteriana save(AtivAntibacteriana ativAntibacteriana) {
        return ativAntibacterianaRepository.save(ativAntibacteriana);
    }

    public List<AtivAntibacterianaDTO> findAll() {
        return ativAntibacterianaRepository.findAll().stream().map(ativAntibacteriana -> new AtivAntibacterianaDTO(ativAntibacteriana)).collect(Collectors.toList());
    }

    public Optional<AtivAntibacteriana> findById(Long id) {
        return ativAntibacterianaRepository.findById(id);
    }

    public AtivAntibacteriana update(AtivAntibacteriana ativAntibacteriana) {
        return ativAntibacterianaRepository.save(ativAntibacteriana);
    }

    public void deleteById(Long id) {
        ativAntibacterianaRepository.deleteById(id);
    }
}
