import { useLoaderData, type ClientLoaderFunctionArgs } from "@remix-run/react";

export function clientLoader({ params, request }: ClientLoaderFunctionArgs) {
  return { params, request };
}

export default function AdminPanel() {
  const data = useLoaderData<typeof clientLoader>();

  console.log(data.params.panel);

  return (
    <div className="flex w-full items-center justify-center">
      {data.params.panel}
    </div>
  );
}
