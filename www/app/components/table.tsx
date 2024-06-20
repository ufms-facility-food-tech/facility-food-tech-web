import { Link } from "@remix-run/react";

export function Table({
  tableHeader,
  data,
}: {
  tableHeader: Array<{ propertyName: string; label: string }>;
  data: Array<any>;
}) {
  if (Array.isArray(data) === false) {
    return null;
  }

  return (
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
            <th
                scope="col"
                className="px-6 py-3 font-normal"
              >
                Detalhes
              </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b odd:bg-neutral-100 even:bg-neutral-300"
            >
              {tableHeader.map(({ propertyName }) => (
                <td key={propertyName} className="px-6 py-4">
                  {item[propertyName]}
                </td>
              ))}
              <td className="px-6 py-4 underline">
                <Link to={`${item.id}`}>
                  Detalhes
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
