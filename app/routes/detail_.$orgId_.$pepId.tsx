import {
  json,
  useLoaderData,
  useNavigate,
  type ClientLoaderFunctionArgs,
} from "@remix-run/react";
import { Container } from "~/components/container";
import type { components } from "~/api-schema";

export async function clientLoader({
  request,
  params,
}: ClientLoaderFunctionArgs) {
  const peptideoId = params.pepId;
  const organismoId = params.orgId;

  const url = new URL(request.url);

  const peptideo = await fetch(`${url.origin}/api/peptideos/${peptideoId}`);

  const organismo = await fetch(`${url.origin}/api/organismos/${organismoId}`);

  if (!organismo.ok || !peptideo.ok) {
    return [{}, {}];
  }

  return json(await Promise.all([peptideo.json(), organismo.json()]));
}

export default function Peptideo() {
  // @ts-ignore
  const [peptideo, organismo]: [
    components["schemas"]["PeptideoDTO"],
    components["schemas"]["OrganismoDTO"],
  ] = useLoaderData<typeof clientLoader>();
  peptideo as components["schemas"]["PeptideoDTO"];
  organismo as components["schemas"]["OrganismoDTO"];

  const navigate = useNavigate();
  return (
    <Container title="Peptideo">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mb-4 text-cyan-700 underline"
      >
        &lt; Voltar
      </button>
      <div className="relative my-2 w-full overflow-x-auto rounded-lg outline outline-1">
        <table className="w-full text-left">
          <thead className="bg-white text-lg outline outline-1">
            <tr>
              <th scope="col" className="px-6 py-3 font-normal">
                Detalhes
              </th>
              <th scope="col" className="px-6 py-3 font-normal" />
            </tr>
          </thead>
          <tbody>
            <tr className="border-b odd:bg-neutral-100 even:bg-neutral-300">
              <td className="px-6 py-4">Peptídeo</td>
              <td className="px-6 py-4">{peptideo.peptideo}</td>
            </tr>
            <tr className="border-b odd:bg-neutral-100 even:bg-neutral-300">
              <td className="px-6 py-4">Sequência</td>
              <td className="px-6 py-4">{peptideo.peptideo}</td>
            </tr>
            <tr className="border-b odd:bg-neutral-100 even:bg-neutral-300">
              <td className="px-6 py-4">Tipo de peptídeo</td>
              <td className="px-6 py-4">{peptideo.peptideo}</td>
            </tr>
            <tr className="border-b odd:bg-neutral-100 even:bg-neutral-300">
              <td className="px-6 py-4">Espécie</td>
              <td className="px-6 py-4">{organismo.especie}</td>
            </tr>
            <tr className="border-b odd:bg-neutral-100 even:bg-neutral-300">
              <td className="px-6 py-4">Nomes populares</td>
              <td className="px-6 py-4">
                {organismo.nomesPopulares?.map(({ nome }) => nome).join(", ")}
              </td>
            </tr>
            <tr className="border-b odd:bg-neutral-100 even:bg-neutral-300">
              <td className="px-6 py-4">Família</td>
              <td className="px-6 py-4">{organismo.familia}</td>
            </tr>
            <tr className="border-b odd:bg-neutral-100 even:bg-neutral-300">
              <td className="px-6 py-4">Funções biológicas</td>
              <td className="px-6 py-4">
                {peptideo.funcBiologicas
                  ?.map((item) => item.descricao)
                  .join(", ")}
              </td>
            </tr>
            <tr className="border-b odd:bg-neutral-100 even:bg-neutral-300">
              <td className="px-6 py-4">Massa molecular</td>
              <td className="px-6 py-4">{peptideo.massaMolecular}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
}
