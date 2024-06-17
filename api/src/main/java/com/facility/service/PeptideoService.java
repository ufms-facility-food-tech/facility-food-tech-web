package com.facility.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.facility.domain.Peptideo;
import com.facility.dto.PeptideoDTO;
import com.facility.enums.TipoPeptideo;
import com.facility.repository.PeptideoRepository;

@Service
public class PeptideoService {

    @Autowired
    private PeptideoRepository peptideoRepository;

    public Peptideo save(Peptideo peptideo) {
        return peptideoRepository.save(peptideo);
    }

    public List<PeptideoDTO> findAll() {
        return peptideoRepository.findAll().stream().map(peptideo -> new PeptideoDTO(peptideo)).collect(Collectors.toList());
    }

    public Optional<Peptideo> findById(Long id) {
        return peptideoRepository.findById(id);
    }

    public Peptideo update(Peptideo peptideo) {
        return peptideoRepository.save(peptideo);
    }

    public void deleteById(Long id) {
        peptideoRepository.deleteById(id);
    }

    public List<PeptideoDTO> findByTipoPeptideo(TipoPeptideo tipoPeptideo) {
        return peptideoRepository.findByTipoPeptideo(tipoPeptideo).stream().map(peptideo -> new PeptideoDTO(peptideo)).collect(Collectors.toList());
    }
}
