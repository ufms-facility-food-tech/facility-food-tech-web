package com.facility.dto;

import com.facility.domain.Peptideo;
import com.facility.domain.Publicacao;

public class PublicacaoDTO {

  private Long id;
  private String publicac;
  private Peptideo peptideo;

  public PublicacaoDTO(Publicacao publicac) {

    this.id = publicac.getId();
    this.publicac = publicac.getPublicac();
    this.peptideo = publicac.getPeptideo();
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

  public String getPublicac() {
    return publicac;
  }

  public void setPublicac(String publicac) {
    this.publicac = publicac;
  }
}
