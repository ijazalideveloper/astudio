import React from "react";

interface Column {
  id: string;
  label: string;
  render?: (value: any) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  isLoading: boolean;
  clientSearchTerm?: string;
}

const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  isLoading,
  clientSearchTerm = "",
}) => {

  const filteredData = clientSearchTerm
    ? data?.filter((item) => {
        return Object.values(item).some((value) => {
          if (value === null || value === undefined) return false;
          if (typeof value === 'object') {
            return Object.values(value).some(
              (v) => v && v.toString().toLowerCase().includes(clientSearchTerm.toLowerCase())
            );
          }
          return value.toString().toLowerCase().includes(clientSearchTerm.toLowerCase());
        });
      })
    : data;
  
  if (isLoading) {
    return (
      <div className="table-container">
        <div className="flex justify-center items-center p-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-custom-black"></div>
            <p className="mt-2">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (filteredData.length === 0) {
    return (
      <div className="table-container">
        <div className="flex justify-center items-center p-8">
          <p>No data found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto container mx-auto ">
      <table className="w-full border border-gray-300">
        <thead className="bg-[#c0e3e5]">
          <tr>
            {columns.map((column) => (
              <th key={column?.id} className="border p-2 text-left">
                {column?.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, rowIndex) => (
            <tr key={row.id || rowIndex} className="table-row border-b border p-2 hover:bg-[#ebebeb]">
              {columns.map((column) => (
                <td
                  key={`${row.id || rowIndex}-${column.id}`}
                  className="table-cell border p-2"
                >
                  {column.render
                    ? column.render(row[column.id])
                    : String(row[column.id] || "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
