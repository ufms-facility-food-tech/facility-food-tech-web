import {
  NavLink,
  Outlet,
  redirect,
  useLoaderData,
  type ClientLoaderFunctionArgs,
} from "@remix-run/react";

export function clientLoader({ params }: ClientLoaderFunctionArgs) {
  if (
    !params.panel ||
    (params.panel !== "organismos" && params.panel !== "peptideos")
  ) {
    return redirect("/admin");
  }

  return params.panel;
}

export default function AdminPanel() {
  const panel = useLoaderData<typeof clientLoader>();

  const navLinks = [
    <NavLink
      to={`/admin/${panel}/list`}
      className={({ isActive }) =>
        `${
          isActive ? "underline" : ""
        } rounded-full bg-cyan-700 px-5 py-1 text-white`
      }
      role="button"
    >
      Listar
    </NavLink>,
  ];

  if (panel === "organismos") {
    navLinks.push(
      <NavLink
        to={`/admin/${panel}/edit`}
        className={({ isActive }) =>
          `${
            isActive ? "underline" : ""
          } rounded-full bg-cyan-700 px-5 py-1 text-white`
        }
        role="button"
      >
        Inserir
      </NavLink>,
    );
  }

  return (
    <div className="flex w-full flex-grow flex-col items-center gap-6 p-4">
      <div className="flex gap-4">
        {navLinks}
      </div>
      <Outlet />
    </div>
  );
}
