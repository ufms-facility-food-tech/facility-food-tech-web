package com.facility.model;

import java.io.Serializable;
import java.util.Properties;
import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.enhanced.SequenceStyleGenerator;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.type.Type;

public class PrefixedGenerator extends SequenceStyleGenerator {

  private String prefix;

  @Override
  public void configure(
    Type type,
    Properties params,
    ServiceRegistry serviceRegistry
  ) {
    super.configure(type, params, serviceRegistry);
    prefix = params.getProperty("prefix");
    if (prefix == null) {
      prefix = "";
    }
  }

  @Override
  public Serializable generate(
    SharedSessionContractImplementor session,
    Object object
  ) throws HibernateException {
    String sequenceValue = super.generate(session, object).toString();
    return prefix + sequenceValue;
  }
}
