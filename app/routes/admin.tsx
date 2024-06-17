import { NavLink, Outlet } from "@remix-run/react";
import { Container } from "~/components/container";

export default function Admin() {
  const navLinks = [
    { name: "Organismos", path: "organismos" },
    { name: "Peptideos", path: "peptideos" },
    { name: "Publicações", path: "publicacoes" },
    { name: "Nomes Populares", path: "nomes-populares" },
    { name: "Funções Biológicas", path: "funcoes-biologicas" },
    { name: "Casos de Sucesso", path: "caso-sucesso" },
    {
      name: "Características Adicionais",
      path: "caracteristicas-adicionais",
    },
    {
      name: "Atividades Antibacterianas",
      path: "atividades-antibacterianas",
    },
    { name: "Atividades Antifungicas", path: "atividades-antifungicas" },
    { name: "Atividades Citotoxicas", path: "atividades-citotoxicas" },
  ];

  return (
    <Container title="Área Administrativa">
      <div className="flex h-full">
        <aside className="py-6 pr-6">
          <nav>
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ name, path }) => (
                <li key={path}>
                  <AdminNavItem name={name} path={path} />
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <Outlet />
      </div>
    </Container>
  );
}

function AdminNavItem({ name, path }: { name: string; path: string }) {
  return (
    <NavLink
      prefetch="intent"
      className={({ isActive }) =>
        `${
          isActive ? "underline" : ""
        } text-cyan-700 underline-offset-4 hover:underline`
      }
      to={path}
    >
      {name}
    </NavLink>
  );
}
