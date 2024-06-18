package com.facility.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import java.io.Serializable;

@Entity
public class FuncBiologica implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String funcBiolDesc;

  @ManyToOne
  @JoinColumn(name = "id_peptideo", nullable = false, updatable = true)
  private Peptideo peptideo;

  public FuncBiologica() {}

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getFuncBiolDesc() {
    return funcBiolDesc;
  }

  public void setFuncBiolDesc(String funcBiolDesc) {
    this.funcBiolDesc = funcBiolDesc;
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
