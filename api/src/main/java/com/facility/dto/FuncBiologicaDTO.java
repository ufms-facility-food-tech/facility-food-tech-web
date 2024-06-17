package com.facility.dto;

import com.facility.domain.FuncBiologica;
import com.facility.domain.Peptideo;

public class FuncBiologicaDTO {

    private Long id;
    private String funcBiolDesc;
    private Peptideo peptideo;

    public FuncBiologicaDTO(FuncBiologica funcBiologica) {
        this.id = funcBiologica.getId();
        this.funcBiolDesc = funcBiologica.getFuncBiolDesc();
        this.peptideo = funcBiologica.getPeptideo();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Peptideo getPeptideo() {
        return peptideo;
    }

    public void setPeptideo(Peptideo peptideo) {
        this.peptideo = peptideo;
    }

    public String getFuncBiolDesc() {
        return funcBiolDesc;
    }

    public void setFuncBiolDesc(String funcBiolDesc) {
        this.funcBiolDesc = funcBiolDesc;
    }

}
