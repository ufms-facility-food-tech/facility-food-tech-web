package com.facility.dto;

import com.facility.domain.CasoSucesso;
import com.facility.domain.Peptideo;

public class CasoSucessoDTO {

    private Long id;
    private String caso;
    private Peptideo peptideo;

    public CasoSucessoDTO(CasoSucesso casoSucesso) {
        this.id = casoSucesso.getId();
        this.caso = casoSucesso.getCaso();
        this.peptideo = casoSucesso.getPeptideo();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCaso() {
        return caso;
    }

    public void setCaso(String caso) {
        this.caso = caso;
    }

    public Peptideo getPeptideo() {
        return peptideo;
    }

    public void setPeptideo(Peptideo peptideo) {
        this.peptideo = peptideo;
    }

}
