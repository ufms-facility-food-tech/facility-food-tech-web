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
public class NomePopular {

  @Id
  @GenericGenerator(
    name = "nomepop_seq",
    strategy = "com.facility.model.PrefixedGenerator",
    parameters = { @Parameter(name = "prefix", value = "nomepop_") }
  )
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "nomepop_seq")
  private String id;

  @NotNull
  private String nome;

  @ManyToOne
  @JoinColumn(name = "organismo_id", nullable = false)
  @JsonBackReference
  @Hidden
  private Organismo organismo;

  public NomePopular() {}

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public Organismo getOrganismo() {
    return organismo;
  }

  public void setOrganismo(Organismo organismo) {
    this.organismo = organismo;
  }
}
