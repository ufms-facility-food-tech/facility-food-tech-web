package com.facility.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.ExampleMatcher.StringMatcher;
import org.springframework.stereotype.Service;

import com.facility.domain.Organismo;
import com.facility.dto.OrganismoDTO;
import com.facility.repository.OrganismoRepository;

@Service
public class OrganismoService {

    @Autowired
    private OrganismoRepository organismoRepository;

    public Organismo save(Organismo organismo) {
        return organismoRepository.save(organismo);
    }

    public List<OrganismoDTO> findAll() {
        return organismoRepository.findAll().stream().map(organismo -> new OrganismoDTO(organismo)).collect(Collectors.toList());
    }

    public List<OrganismoDTO> query(Organismo organismo) {
        return organismoRepository.findAll(Example.of(organismo, ExampleMatcher.matching().withStringMatcher(StringMatcher.CONTAINING)))
                .stream()
                .map(o -> new OrganismoDTO(o))
                .collect(Collectors.toList());
    }

    public Optional<Organismo> findById(Long id) {
        return organismoRepository.findById(id);
    }

    public Organismo update(Organismo organismo) {
        return organismoRepository.save(organismo);
    }

    public void deleteById(Long id) {
        organismoRepository.deleteById(id);
    }
}
