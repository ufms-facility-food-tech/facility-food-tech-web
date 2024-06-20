import {
  json,
  redirect,
  useLoaderData,
  type ClientLoaderFunctionArgs,
} from "@remix-run/react";
import type { components } from "~/api-schema";

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

  const res = await fetch(`${url.origin}/api/${params.panel}/${params.id}`);

  if (params.panel === "peptideos") {
    return json<components["schemas"]["PeptideoDTO"]>(await res.json());
  }

  return json<components["schemas"]["OrganismoDTO"]>(await res.json());
}

export default function Detail() {
  const data = useLoaderData<typeof clientLoader>();
  console.log(data);
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
