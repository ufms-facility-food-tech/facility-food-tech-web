import { useForm, useFieldArray, useFormContext } from "react-hook-form";
import { Form } from "@remix-run/react";

type FormValues = {
  especie: string;
  origem: string;
  familia: string;
  nomeCientifico: string;
  nomesPopulares: { nome: string }[];
  peptideos: {
    peptideo: string;
    quantidadeAminoacidos: number;
    tipoPeptideo: "SINTETIZADO" | "NATURAL";
    sequencia: string;
    estruturaTridimensional: string;
    massaMolecular: number;
    impedimentoEsterico: number;
    hidrofobicidade: number;
    hidrofibocidade: number;
    pontoIsoeletrico: number;
    hidropatia: number;
    anfipaticidade: number;
    hidrofilicidade: number;
    cargaLiquidaTotal: number;
    indiceBoman: number;
    descricao: string;
    funcBiologicas: { descricao: string }[];
    ativAntibacterianas: { descricao: string }[];
    ativAntifungicas: { descricao: string }[];
    ativCitotoxicas: { descricao: string }[];
    casosSucesso: { caso: string }[];
    caracterisAdicionais: { descricao: string }[];
    publicacoes: { url: string }[];
  }[];
};

export default function Edit() {
  const { control, handleSubmit, register, reset } = useForm<FormValues>({
    defaultValues: {
      especie: "",
      origem: "",
      familia: "",
      nomeCientifico: "",
    },
  });

  const { fields: nomesPopularesFields, append: appendNomePopular, remove: removeNomePopular } =
    useFieldArray({
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

  const onSubmit = (data: FormValues) => {
    console.log(data);

    fetch("/api/organismos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => reset());
  };

  return (
    <Form
      method="post"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6"
    >
      <div>
        <label>Especie</label>
        <input {...register("especie")} />
      </div>
      <div>
        <label>
          Origem
          <input {...register("origem")} />
        </label>
      </div>
      <div>
        <label>Familia</label>
        <input {...register("familia")} />
      </div>
      <div>
        <label>Nome Cientifico</label>
        <input {...register("nomeCientifico")} />
      </div>

      <div className="flex flex-col gap-4">
        <label>Nomes Populares:</label>
        {nomesPopularesFields.map((item, index) => (
          <div key={item.id} className="border-2 border-black p-4">
            <label>Nome Popular {index + 1}</label>
            <input {...register(`nomesPopulares.${index}.nome` as const)} />
            <button type="button" onClick={() => removeNomePopular(index)}>
              Remover
            </button>
          </div>
        ))}
        <button type="button" onClick={() => appendNomePopular({ nome: "" })}>
          Adicionar Nome Popular
        </button>
      </div>

      {peptideosFields.map((item, index) => (
        <div
          key={item.id}
          className="flex flex-col gap-4 border-2 border-black p-4"
        >
          <label>Peptídeo {index + 1}</label>
          <button type="button" onClick={() => removePeptideo(index)}>
            Remover
          </button>
          <div>
            <label>Peptideo</label>
            <input {...register(`peptideos.${index}.peptideo` as const)} />
          </div>
          <div>
            <label>Quantidade Aminoácidos</label>
            <input
              type="number"
              {...register(`peptideos.${index}.quantidadeAminoacidos` as const)}
            />
          </div>
          <div>
            <label>Tipo Peptideo</label>
            <input {...register(`peptideos.${index}.tipoPeptideo` as const)} />
          </div>
          <div>
            <label>Sequencia</label>
            <input {...register(`peptideos.${index}.sequencia` as const)} />
          </div>
          <div>
            <label>Estrutura Tridimensional</label>
            <textarea
              {...register(
                `peptideos.${index}.estruturaTridimensional` as const,
              )}
            />
          </div>
          <div>
            <label>Massa Molecular</label>
            <input
              type="number"
              {...register(`peptideos.${index}.massaMolecular` as const)}
            />
          </div>
          <div>
            <label>Impedimento Esterico</label>
            <input
              type="number"
              {...register(`peptideos.${index}.impedimentoEsterico` as const)}
            />
          </div>
          <div>
            <label>Hidrofobicidade</label>
            <input
              type="number"
              {...register(`peptideos.${index}.hidrofobicidade` as const)}
            />
          </div>
          <div>
            <label>Hidrofibocidade</label>
            <input
              type="number"
              {...register(`peptideos.${index}.hidrofibocidade` as const)}
            />
          </div>
          <div>
            <label>Ponto Isoeletrico</label>
            <input
              type="number"
              {...register(`peptideos.${index}.pontoIsoeletrico` as const)}
            />
          </div>
          <div>
            <label>Hidropatia</label>
            <input
              type="number"
              {...register(`peptideos.${index}.hidropatia` as const)}
            />
          </div>
          <div>
            <label>Anfipaticidade</label>
            <input
              type="number"
              {...register(`peptideos.${index}.anfipaticidade` as const)}
            />
          </div>
          <div>
            <label>Hidrofilicidade</label>
            <input
              type="number"
              {...register(`peptideos.${index}.hidrofilicidade` as const)}
            />
          </div>
          <div>
            <label>Carga Liquida Total</label>
            <input
              type="number"
              {...register(`peptideos.${index}.cargaLiquidaTotal` as const)}
            />
          </div>
          <div>
            <label>Indice Boman</label>
            <input
              type="number"
              {...register(`peptideos.${index}.indiceBoman` as const)}
            />
          </div>
          <div>
            <label>Descricao</label>
            <textarea {...register(`peptideos.${index}.descricao` as const)} />
          </div>
          <div className="flex flex-col gap-4 border-2 border-black p-4">
            <label>Func Biologicas:</label>
            {item.funcBiologicas.map((func, funcIndex) => (
              <div key={funcIndex}>
                <label>Func Biologica {funcIndex + 1}</label>
                <input
                  {...register(
                    `peptideos.${index}.funcBiologicas.${funcIndex}.descricao` as const,
                  )}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 border-2 border-black p-4">
            <label>Ativ Antibacterianas:</label>
            {item.ativAntibacterianas.map((ativ, ativIndex) => (
              <div key={ativIndex}>
                <label>Ativ Antibacteriana {ativIndex + 1}</label>
                <input
                  {...register(
                    `peptideos.${index}.ativAntibacterianas.${ativIndex}.descricao` as const,
                  )}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 border-2 border-black p-4">
            <label>Ativ Antifungicas:</label>
            {item.ativAntifungicas.map((ativ, ativIndex) => (
              <div key={ativIndex}>
                <label>Ativ Antifungica {ativIndex + 1}</label>
                <input
                  {...register(
                    `peptideos.${index}.ativAntifungicas.${ativIndex}.descricao` as const,
                  )}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 border-2 border-black p-4">
            <label>Ativ Citotoxicas:</label>
            {item.ativCitotoxicas.map((ativ, ativIndex) => (
              <div key={ativIndex}>
                <label>Ativ Citotoxica {ativIndex + 1}</label>
                <input
                  {...register(
                    `peptideos.${index}.ativCitotoxicas.${ativIndex}.descricao` as const,
                  )}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 border-2 border-black p-4">
            <label>Casos Sucesso:</label>
            {item.casosSucesso.map((caso, casoIndex) => (
              <div key={casoIndex}>
                <label>Caso Sucesso {casoIndex + 1}</label>
                <input
                  {...register(
                    `peptideos.${index}.casosSucesso.${casoIndex}.caso` as const,
                  )}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 border-2 border-black p-4">
            <label>Caracteris Adicionais:</label>
            {item.caracterisAdicionais.map((caracteris, caracterisIndex) => (
              <div key={caracterisIndex}>
                <label>Caracteris Adicional {caracterisIndex + 1}</label>
                <input
                  {...register(
                    `peptideos.${index}.caracterisAdicionais.${caracterisIndex}.descricao` as const,
                  )}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 border-2 border-black p-4">
            <label>Publicacoes:</label>
            {item.publicacoes.map((pub, pubIndex) => (
              <div key={pubIndex}>
                <label>Publicacao {pubIndex + 1}</label>
                <input
                  {...register(
                    `peptideos.${index}.publicacoes.${pubIndex}.url` as const,
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        type="button"
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
      >
        Adicionar Peptídeo
      </button>
      <button type="submit">Submit</button>
    </Form>
  );
}
