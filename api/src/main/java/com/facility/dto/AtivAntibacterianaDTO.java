package com.facility.dto;

import com.facility.domain.AtivAntibacteriana;
import com.facility.domain.Peptideo;

public class AtivAntibacterianaDTO {

    private Long id;
    private String ativAntibacterDesc;
    private Peptideo peptideo;

    public AtivAntibacterianaDTO(AtivAntibacteriana ativAntibacteriana) {
        this.id = ativAntibacteriana.getId();
        this.ativAntibacterDesc = ativAntibacteriana.getAtivAntibacterDesc();
        this.peptideo = ativAntibacteriana.getPeptideo();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAtivAntibacterDesc() {
        return ativAntibacterDesc;
    }

    public void setAtivAntibacterDesc(String ativAntibacterDesc) {
        this.ativAntibacterDesc = ativAntibacterDesc;
    }

    public Peptideo getPeptideo() {
        return peptideo;
    }

    public void setPeptideo(Peptideo peptideo) {
        this.peptideo = peptideo;
    }

}
