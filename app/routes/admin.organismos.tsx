import {
  Outlet,
  NavLink,
} from "@remix-run/react";

export default function AdminPanel() {
  return (
    <div className="flex w-full flex-col items-center gap-6 p-4">
      <h1 className="text-3xl">Organismos</h1>
      <div className="flex gap-4">
        <NavLink to="edit">
          <button
            type="button"
            className="rounded-full bg-cyan-700 px-5 py-1 text-lg font-bold text-white"
          >
            Inserir
          </button>
        </NavLink>
        <NavLink to="list">
          <button
            type="button"
            className="rounded-full bg-cyan-700 px-5 py-1 text-lg font-bold text-white"
          >
            Listar
          </button>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
