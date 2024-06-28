import {
  type ClientLoaderFunctionArgs,
  json,
  useLoaderData,
} from "@remix-run/react";
import { Container } from "~/components/container";
import type { components } from "~/api-schema";

export async function clientLoader({ request }: ClientLoaderFunctionArgs) {
  const url = new URL(request.url);

  const res = await fetch(
    `${url.origin}/api/organismos/query?${url.searchParams.toString()}`,
  );

  if (!res.ok) {
    console.log(res);
    return [];
  }

  return json(await res.json());
}

export default function Resultado() {
  const data: Array<components["schemas"]["OrganismoDTO"]> =
    useLoaderData<typeof clientLoader>();
  console.log(data);

  const tableHeader = [
    { propertyName: "peptideo", label: "Peptideo" },
    { propertyName: "sequencia", label: "Sequencia" },
    { propertyName: "funcBiologicas", label: "Funcoes Biologicas" },
    { propertyName: "familia", label: "Familia" },
    { propertyName: "especie", label: "Especie" },
  ];

  const dataView = data.flatMap(({ peptideos, familia, especie }) =>
    peptideos?.map(({ id, sequencia, funcBiologicas, peptideo }) => ({
      id,
      sequencia,
      funcBiologicas,
      peptideo,
      familia,
      especie,
    })),
  );

  return (
    <Container>
      <div className="relative w-full overflow-x-auto rounded-lg outline outline-1">
        <table className="w-full text-left">
          <thead className="bg-white text-lg outline outline-1">
            <tr>
              {tableHeader.map(({ propertyName, label }) => (
                <th
                  key={propertyName}
                  scope="col"
                  className="px-6 py-3 font-normal"
                >
                  {label}
                </th>
              ))}
              <th scope="col" className="px-6 py-3 font-normal">
                Detalhes
              </th>
            </tr>
          </thead>
          <tbody>
            {dataView.map((item) => (
              <tr
                key={item?.id}
                className="border-b odd:bg-neutral-100 even:bg-neutral-300"
              >
                {tableHeader.map(({ propertyName }) => (
                  <td key={propertyName} className="px-6 py-4">
                    {/* @ts-ignore */}
                    {item[propertyName]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
