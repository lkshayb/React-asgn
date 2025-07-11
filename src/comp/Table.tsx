// App.tsx
import {useReactTable,getCoreRowModel,flexRender} from "@tanstack/react-table";
import { data } from "../Table-setup/data";
import { columns } from "../Table-setup/columns";

function Table({togglefields} : {togglefields : boolean}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    
  });

  const desiredRowCount = 30; 
  const displayedRows = table.getRowModel().rows;
  const emptyRowsCount = Math.max(0, desiredRowCount - displayedRows.length);

  return (
    <div className="font-work">
 
      <table className="table-fixed border border-gray-200">
        <thead className="">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                let bgClr = "bg-[#EEEEEE]";
                const id = header.column.id;
                if (id === "assigned") bgClr = "bg-[#E8F0E9]"
                else if (id === "priority" || id === "dueDate") bgClr = "bg-[#EAE3FC]"
                else if (id === "+") bgClr = "bg-white"
                else if (id === "group-ques" ) bgClr = "bg-[#DCCFFC]"
                else if(id === "group-abc") bgClr = "bg-[#D2E0D4]"
                else if(id === "group-val") bgClr = "bg-[#FAC2AF]"
                else if (id === "group-url") bgClr = "bg-[#ffffff]"
                else if (id === "group-overview") bgClr = "bg-[#E2E2E2]"
                
                return (
                  <th key={header.id} colSpan={header.colSpan} className={`${bgClr}  ${togglefields ? "" : "hidden"} border border-gray-100 text-left text-sm font-medium text-gray-700 `}>
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="hover:bg-gray-50">
              {row.getVisibleCells().map(cell => {
                let align = "justify-center";
                let w = "max-w-[131px]"
                const id = cell.column.id;

                if(id === "submitter" || id === "assigned" || id=== "url"){
                  align = "justify-start"
                }
                else if(id === "submitted" || id === "dueDate" || id === "estValue"){
                  align = "justify-end"
                }
                else if(id === "jobRequest"){
                  align = "justify-start"
                  w = "max-w-[240px]"
                }

                return (
                  <td key={cell.id} className={`ring-[0.5px] ring-gray-100 hover:ring-green-700 hover:ring-[1px]  py-2  text-xs `}>
                      <div className={`flex ${align} px-2 ` }>
                          <div className={`truncate overflow-hidden whitespace-nowrap ${w} `}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </div>
                      </div>
                  </td>
                )})}
            </tr>
          ))}
          {Array.from({ length: emptyRowsCount }).map((_, idx) => (
            <tr key={`empty-row-${idx}`} className="hover:bg-gray-50">
              {table.getVisibleFlatColumns().map((_, colIdx) => (
                <td key={colIdx} className={`text-[#757575] ring-[0.5px] ring-gray-100 hover:ring-green-700 hover:ring-[1px] h-8 text-xs text-center ${colIdx > 10 ? "hidden" : ""} `}>
                  {colIdx === 0 ? displayedRows.length + idx + 1 : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
