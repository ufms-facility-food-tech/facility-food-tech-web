import { Table } from "~/components/table";
import {
  redirect,
  useLoaderData,
  type ClientLoaderFunctionArgs,
} from "@remix-run/react";

export async function clientLoader({
  request,
  params,
}: ClientLoaderFunctionArgs) {
  if (
    !params.panel ||
    (params.panel !== "organismos" && params.panel !== "peptideos")
  ) {
    return redirect("/admin");
  }

  const url = new URL(request.url);

  const res = await fetch(`${url.origin}/api/${params.panel}`);

  return {
    data: await res.json(),
    panel: params.panel,
  };
}

export default function List() {
  const { data, panel } = useLoaderData<typeof clientLoader>();

  if (data.length === 0) {
    return (
      <div className="flex w-full items-center justify-center">
        Nenhum registro encontrado
      </div>
    );
  }

  const tableHeader =
    panel === "organismos"
      ? [
          { propertyName: "especie", label: "Espécie" },
          { propertyName: "origem", label: "Origem" },
          { propertyName: "familia", label: "Família" },
          { propertyName: "nomeCientifico", label: "Nome Científico" },
        ]
      : [
          { propertyName: "peptideo", label: "Nome" },
          { propertyName: "sequencia", label: "Sequência" },
          { propertyName: "tipoPeptideo", label: "Tipo" },
          { propertyName: "quantidadeAminoacidos", label: "Qtd. Aminoácidos" },
        ];

  return <Table tableHeader={tableHeader} data={data} />;
}
