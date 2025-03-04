import { MockTableColumns, MockTableData } from "@/contants/data";
import React from "react";

const DataTable: React.FC = () => {
  return (
    <div className="overflow-x-auto container mx-auto ">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            {MockTableColumns.map((column) => (
              <th key={column} className="border p-2 text-left">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {MockTableData.map((row) => (
            <tr key={row.id} className="border-b">
              <td className="border p-2">{row.id}</td>
              <td className="border p-2">{row.firstName}</td>
              <td className="border p-2">{row.lastName}</td>
              <td className="border p-2">{row.age}</td>
              <td className="border p-2">{row.gender}</td>
              <td className="border p-2">{row.email}</td>
              <td className="border p-2">{row.phone}</td>
              <td className="border p-2">{row.username}</td>
              <td className="border p-2">{row.birthDate}</td>
              <td className="border p-2">{row.bloodGroup}</td>
              <td className="border p-2">{row.height}</td>
              <td className="border p-2">{row.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
