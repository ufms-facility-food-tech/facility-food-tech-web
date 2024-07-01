package com.facility.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import io.swagger.v3.oas.annotations.Hidden;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

@Entity
public class CasoSucesso {

  @Id
  @GenericGenerator(
    name = "casosucesso_seq",
    strategy = "com.facility.model.PrefixedGenerator",
    parameters = { @Parameter(name = "prefix", value = "casosucesso_") }
  )
  @GeneratedValue(
    strategy = GenerationType.SEQUENCE,
    generator = "casosucesso_seq"
  )
  private String id;

  @NotNull
  private String caso;

  @ManyToOne
  @JoinColumn(name = "peptideo_id", nullable = false)
  @JsonBackReference
  @Hidden
  private Peptideo peptideo;

  public CasoSucesso() {}

  public String getId() {
    return id;
  }

  public void setId(String id) {
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
