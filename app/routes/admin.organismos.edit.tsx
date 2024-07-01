import React, { useState } from "react";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { useForm, useFieldArray } from "react-hook-form";

// Custom components (as defined in previous responses)
function Button({
  children,
  type = "button",
  variant = "default",
  size = "default",
  disabled = false,
  onClick,
  className = "",
}) {
  const baseClasses =
    "font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
  };
  const sizeClasses = {
    default: "px-4 py-2 text-sm",
    sm: "px-2 py-1 text-xs",
  };
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const Input = React.forwardRef(({ className = "", ...props }, ref) => (
  <input
    className={`w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${className}`}
    ref={ref}
    {...props}
  />
));

function Label({ children, htmlFor }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1 block text-sm font-medium text-gray-700"
    >
      {children}
    </label>
  );
}

function Alert({ children, variant = "default" }) {
  const baseClasses = "p-4 rounded-md mb-4";
  const variantClasses = {
    default: "bg-blue-100 text-blue-700",
    destructive: "bg-red-100 text-red-700",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </div>
  );
}

const AlertDescription = ({ children }) => (
  <p className="text-sm">{children}</p>
);

function Peptideo({ index, register, control, remove }) {
  const {
    fields: funcBiologicas,
    append: appendFuncBiologica,
    remove: removeFuncBiologica,
  } = useFieldArray({
    control,
    name: `peptideos.${index}.funcBiologicas`,
  });

  const {
    fields: ativAntibacterianas,
    append: appendAtivAntibacteriana,
    remove: removeAtivAntibacteriana,
  } = useFieldArray({
    control,
    name: `peptideos.${index}.ativAntibacterianas`,
  });

  const {
    fields: ativAntifungicas,
    append: appendAtivAntifungica,
    remove: removeAtivAntifungica,
  } = useFieldArray({
    control,
    name: `peptideos.${index}.ativAntifungicas`,
  });

  const {
    fields: ativCitotoxicas,
    append: appendAtivCitotoxica,
    remove: removeAtivCitotoxica,
  } = useFieldArray({
    control,
    name: `peptideos.${index}.ativCitotoxicas`,
  });

  const {
    fields: casosSucesso,
    append: appendCasoSucesso,
    remove: removeCasoSucesso,
  } = useFieldArray({
    control,
    name: `peptideos.${index}.casosSucesso`,
  });

  const {
    fields: caracterisAdicionais,
    append: appendCaracteristicaAdicional,
    remove: removeCaracteristicaAdicional,
  } = useFieldArray({
    control,
    name: `peptideos.${index}.caracterisAdicionais`,
  });

  const {
    fields: publicacoes,
    append: appendPublicacao,
    remove: removePublicacao,
  } = useFieldArray({
    control,
    name: `peptideos.${index}.publicacoes`,
  });

  return (
    <div className="mb-4 rounded-lg border border-gray-200 p-4">
      <h4 className="mb-4 text-lg font-semibold">Peptídeo {index + 1}</h4>

      <div className="space-y-4">
        <div>
          <Label htmlFor={`peptideos.${index}.peptideo`}>Peptídeo</Label>
          <Input
            id={`peptideos.${index}.peptideo`}
            {...register(`peptideos.${index}.peptideo`, {
              required: "Peptídeo é obrigatório",
            })}
          />
        </div>

        <div>
          <Label htmlFor={`peptideos.${index}.quantidadeAminoacidos`}>
            Quantidade de Aminoácidos
          </Label>
          <Input
            type="number"
            id={`peptideos.${index}.quantidadeAminoacidos`}
            {...register(`peptideos.${index}.quantidadeAminoacidos`, {
              valueAsNumber: true,
            })}
          />
        </div>

        <div>
          <Label htmlFor={`peptideos.${index}.tipoPeptideo`}>
            Tipo de Peptídeo
          </Label>
          <select
            id={`peptideos.${index}.tipoPeptideo`}
            {...register(`peptideos.${index}.tipoPeptideo`)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="SINTETIZADO">SINTETIZADO</option>
            <option value="NATURAL">NATURAL</option>
          </select>
        </div>

        <div>
          <Label htmlFor={`peptideos.${index}.sequencia`}>Sequência</Label>
          <Input
            id={`peptideos.${index}.sequencia`}
            {...register(`peptideos.${index}.sequencia`)}
          />
        </div>

        <div>
          <Label htmlFor={`peptideos.${index}.estruturaTridimensional`}>
            Estrutura Tridimensional
          </Label>
          <Input
            id={`peptideos.${index}.estruturaTridimensional`}
            {...register(`peptideos.${index}.estruturaTridimensional`)}
          />
        </div>

        <div>
          <Label htmlFor={`peptideos.${index}.massaMolecular`}>
            Massa Molecular
          </Label>
          <Input
            id={`peptideos.${index}.massaMolecular`}
            {...register(`peptideos.${index}.massaMolecular`)}
          />
        </div>

        <div>
          <Label>Funções Biológicas</Label>
          {funcBiologicas.map((field, funcIndex) => (
            <div key={field.id} className="mt-1 flex items-center space-x-2">
              <Input
                {...register(
                  `peptideos.${index}.funcBiologicas.${funcIndex}.descricao`,
                )}
                placeholder="Descrição"
              />
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeFuncBiologica(funcIndex)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => appendFuncBiologica({ descricao: "" })}
            className="my-2"
          >
            Adicionar Função Biológica
          </Button>
        </div>

        <div>
          <Label>Ativ Antibacterianas</Label>
          {ativAntibacterianas.map((field, ativIndex) => (
            <div key={field.id} className="mt-1 flex items-center space-x-2">
              <Input
                {...register(
                  `peptideos.${index}.ativAntibacterianas.${ativIndex}.descricao`,
                )}
                placeholder="Descrição"
              />
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeAtivAntibacteriana(ativIndex)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => appendAtivAntibacteriana({ descricao: "" })}
            className="my-2"
          >
            Adicionar Ativ Antibacteriana
          </Button>
        </div>

        <div>
          <Label>Ativ Antifungicas</Label>
          {ativAntifungicas.map((field, ativIndex) => (
            <div key={field.id} className="mt-1 flex items-center space-x-2">
              <Input
                {...register(
                  `peptideos.${index}.ativAntifungicas.${ativIndex}.descricao`,
                )}
                placeholder="Descrição"
              />
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeAtivAntifungica(ativIndex)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => appendAtivAntifungica({ descricao: "" })}
            className="my-2"
          >
            Adicionar Ativ Antifungica
          </Button>
        </div>

        <div>
          <Label>Ativ Citotoxicas</Label>
          {ativCitotoxicas.map((field, ativIndex) => (
            <div key={field.id} className="mt-1 flex items-center space-x-2">
              <Input
                {...register(
                  `peptideos.${index}.ativCitotoxicas.${ativIndex}.descricao`,
                )}
                placeholder="Descrição"
              />
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeAtivCitotoxica(ativIndex)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => appendAtivCitotoxica({ descricao: "" })}
            className="my-2"
          >
            Adicionar Ativ Citotoxica
          </Button>
        </div>

        <div>
          <Label>Casos de Sucesso</Label>
          {casosSucesso.map((field, casoIndex) => (
            <div key={field.id} className="mt-1 flex items-center space-x-2">
              <Input
                {...register(
                  `peptideos.${index}.casosSucesso.${casoIndex}.caso`,
                )}
                placeholder="Caso"
              />
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeCasoSucesso(casoIndex)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => appendCasoSucesso({ caso: "" })}
            className="my-2"
          >
            Adicionar Caso de Sucesso
          </Button>
        </div>

        <div>
          <Label>Características Adicionais</Label>
          {caracterisAdicionais.map((field, caracterIndex) => (
            <div key={field.id} className="mt-1 flex items-center space-x-2">
              <Input
                {...register(
                  `peptideos.${index}.caracterisAdicionais.${caracterIndex}.descricao`,
                )}
                placeholder="Descrição"
              />
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeCaracteristicaAdicional(caracterIndex)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => appendCaracteristicaAdicional({ descricao: "" })}
            className="my-2"
          >
            Adicionar Característica Adicional
          </Button>
        </div>

        <div>
          <Label>Publicações</Label>
          {publicacoes.map((field, publicacaoIndex) => (
            <div key={field.id} className="mt-1 flex items-center space-x-2">
              <Input
                {...register(
                  `peptideos.${index}.publicacoes.${publicacaoIndex}.url`,
                )}
                placeholder="URL"
              />
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removePublicacao(publicacaoIndex)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => appendPublicacao({ url: "" })}
            className="my-2"
          >
            Adicionar Publicação
          </Button>
        </div>
      </div>

      <Button
        variant="destructive"
        className="mt-4"
        onClick={() => remove(index)}
      >
        Remove Peptídeo
      </Button>
    </div>
  );
}

// Custom components (Alert, AlertDescription, Button, Input, Label) remain the same...

export default function OrganismoForm() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      especie: "",
      origem: "",
      familia: "",
      nomesPopulares: [{ nome: "" }],
      peptideos: [
        {
          peptideo: "",
          quantidadeAminoacidos: 0,
          tipoPeptideo: "SINTETIZADO",
          sequencia: "",
          estruturaTridimensional: "",
          massaMolecular: 0,
          impedimentoEsterico: 0,
          hidrofobicidade: 0,
          hidrofibocidade: 0,
          pontoIsoeletrico: 0,
          hidropatia: 0,
          anfipaticidade: 0,
          hidrofilicidade: 0,
          cargaLiquidaTotal: 0,
          indiceBoman: 0,
          descricao: "",
          funcBiologicas: [{ descricao: "" }],
          ativAntibacterianas: [{ descricao: "" }],
          ativAntifungicas: [{ descricao: "" }],
          ativCitotoxicas: [{ descricao: "" }],
          casosSucesso: [{ caso: "" }],
          caracterisAdicionais: [{ descricao: "" }],
          publicacoes: [{ url: "" }],
        },
      ],
    },
  });

  const {
    fields: nomesPopularesFields,
    append: appendNomePopular,
    remove: removeNomePopular,
  } = useFieldArray({
    control,
    name: "nomesPopulares",
  });

  const {
    fields: peptideosFields,
    append: appendPeptideo,
    remove: removePeptideo,
  } = useFieldArray({
    control,
    name: "peptideos",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const onSubmit = async (data) => {
    await fetch("/api/organismos", {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({ "content-type": "application/json" }),
    })
      .then((response) => {
        if (response.ok) {
          reset();
          setShowAlert(true);
        }
      })
      .catch((error) => {
        setShowErrorAlert(true);
      });
  };

  const successAlert = (
    <Alert variant="default">
      <AlertDescription>Organismo criado com sucesso!</AlertDescription>
    </Alert>
  );

  const errorAlert = (
    <Alert variant="destructive">
      <AlertDescription>Ocorreu um erro ao criar o organismo!</AlertDescription>
    </Alert>
  );

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      method="post"
      className="w-full space-y-8"
    >
      <div className="space-y-4">
        {showErrorAlert && errorAlert}
        <div>
          <Label htmlFor="especie">Espécie</Label>
          <Input
            id="especie"
            {...register("especie", { required: "Espécie é obrigatória" })}
          />
          {errors.especie && (
            <span className="text-sm text-red-500">
              {errors.especie.message}
            </span>
          )}
        </div>

        <div>
          <Label htmlFor="origem">Origem</Label>
          <Input id="origem" {...register("origem")} />
        </div>

        <div>
          <Label htmlFor="familia">Família</Label>
          <Input id="familia" {...register("familia")} />
        </div>

        <div>
          <Label>Nomes Populares</Label>
          {nomesPopularesFields.map((field, index) => (
            <div key={field.id} className="mt-1 flex items-center space-x-2">
              <Input
                {...register(`nomesPopulares.${index}.nome`)}
                placeholder="Nome Popular"
              />
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeNomePopular(index)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => appendNomePopular({ nome: "" })}
            className="my-2"
          >
            Adicionar Nome Popular
          </Button>
        </div>

        <div>
          <Label>Peptídeos</Label>
          {peptideosFields.map((field, index) => (
            <Peptideo
              key={field.id}
              index={index}
              register={register}
              control={control}
              remove={removePeptideo}
            />
          ))}
          <Button
            variant="outline"
            onClick={() =>
              appendPeptideo({
                peptideo: "",
                quantidadeAminoacidos: 0,
                tipoPeptideo: "SINTETIZADO",
                sequencia: "",
                estruturaTridimensional: "",
                massaMolecular: 0,
                impedimentoEsterico: 0,
                hidrofobicidade: 0,
                hidrofibocidade: 0,
                pontoIsoeletrico: 0,
                hidropatia: 0,
                anfipaticidade: 0,
                hidrofilicidade: 0,
                cargaLiquidaTotal: 0,
                indiceBoman: 0,
                descricao: "",
                funcBiologicas: [{ descricao: "" }],
                ativAntibacterianas: [{ descricao: "" }],
                ativAntifungicas: [{ descricao: "" }],
                ativCitotoxicas: [{ descricao: "" }],
                casosSucesso: [{ caso: "" }],
                caracterisAdicionais: [{ descricao: "" }],
                publicacoes: [{ url: "" }],
              })
            }
            className="my-2"
          >
            Adicionar Peptídeo
          </Button>
        </div>
      </div>

      {showAlert && successAlert}
      <Button type="submit" disabled={navigation.state === "submitting"}>
        {navigation.state === "submitting" ? "Enviando..." : "Enviar"}
      </Button>

      {actionData?.error && (
        <Alert variant="destructive">
          <AlertDescription>{actionData.error}</AlertDescription>
        </Alert>
      )}
    </Form>
  );
}
