package com.facility.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.facility.domain.Publicacao;
import com.facility.dto.PublicacaoDTO;
import com.facility.repository.PublicacaoRepository;

@Service
public class PublicacaoService {

    @Autowired
    private PublicacaoRepository publicacaoRepository;

    public Publicacao save(Publicacao publicacao) {
        return publicacaoRepository.save(publicacao);
    }

    public List<PublicacaoDTO> findAll() {
        return publicacaoRepository.findAll().stream().map(publicacao -> new PublicacaoDTO(publicacao)).collect(Collectors.toList());
    }

    public Optional<Publicacao> findById(Long id) {
        return publicacaoRepository.findById(id);
    }

    public Publicacao update(Publicacao publicacao) {
        return publicacaoRepository.save(publicacao);
    }

    public void deleteById(Long id) {
        publicacaoRepository.deleteById(id);
    }
}
