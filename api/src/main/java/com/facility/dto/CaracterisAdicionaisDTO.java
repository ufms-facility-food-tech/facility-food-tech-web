package com.facility.dto;

import com.facility.domain.CaracterisAdicionais;
import com.facility.domain.Peptideo;

public class CaracterisAdicionaisDTO {

    private Long id;
    private String caracAdicionaisDesc;
    private Peptideo peptideo;

    public CaracterisAdicionaisDTO(CaracterisAdicionais caracterisAdicionais) {
        this.id = caracterisAdicionais.getId();
        this.caracAdicionaisDesc = caracterisAdicionais.getCaracAdicionaisDesc();
        this.peptideo = caracterisAdicionais.getPeptideo();
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

    public String getCaracAdicionaisDesc() {
        return caracAdicionaisDesc;
    }

    public void setCaracAdicionaisDesc(String caracAdicionaisDesc) {
        this.caracAdicionaisDesc = caracAdicionaisDesc;
    }

}
