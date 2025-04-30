"use client";

import { type TickerData } from "@/utils/getTickerData";
import { ColumnDef } from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";

const columns: ColumnDef<TickerData>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ getValue }) => {
      const date = getValue<Date>();
      return date.toLocaleDateString();
    },
  },
  {
    accessorKey: "open",
    header: "Open",
  },
  {
    accessorKey: "high",
    header: "High",
  },
  {
    accessorKey: "low",
    header: "Low",
  },
  {
    accessorKey: "close",
    header: "Close",
  },
  {
    accessorKey: "volume",
    header: "Volume",
  },
];
  
  type DataTableProps = {
    data: TickerData[];
  }
  
  export function DataTable({ data }: DataTableProps) {
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    });
  
    return (
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
  
          <TableBody>
            {table.getRowModel().rows.map(row => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
  