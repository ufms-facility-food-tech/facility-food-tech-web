package com.facility.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import java.io.Serializable;

@Entity
public class Publicacao implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String publicac;

  @ManyToOne
  @JoinColumn(name = "id_peptideo", nullable = false, updatable = true)
  private Peptideo peptideo;

  public Publicacao() {}

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getPublicac() {
    return publicac;
  }

  public void setPublicac(String publicac) {
    this.publicac = publicac;
  }

  public Peptideo getPeptideo() {
    return peptideo;
  }

  public void setPeptideo(Peptideo peptideo) {
    this.peptideo = peptideo;
  }

  public static long getSerialversionuid() {
    return serialVersionUID;
  }
}
