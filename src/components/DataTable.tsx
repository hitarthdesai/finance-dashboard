"use client";

import { type TickerData } from "@/utils/getTickerData";
import { ColumnDef, getFilteredRowModel, getSortedRowModel } from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { NumericRangeFilter } from "./NumericRangeFilter";
import React from "react";

const columns: ColumnDef<TickerData>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ getValue }) => {
      const date = getValue<Date>();
      return date.toLocaleDateString();
    },
    sortingFn: "datetime",
  },
  {
    accessorKey: "open",
    header: "Open",
    enableSorting: true,
    enableColumnFilter: true,
    filterFn: "inNumberRange",
    meta: {
      filterComponent: NumericRangeFilter,
    },
  },
  {
    accessorKey: "high",
    header: "High",
    enableSorting: true,
    enableColumnFilter: true,
    filterFn: "inNumberRange",
    meta: {
      filterComponent: NumericRangeFilter,
    },
  },
  {
    accessorKey: "low",
    header: "Low",
    enableSorting: true,
    enableColumnFilter: true,
    filterFn: "inNumberRange",
    meta: {
      filterComponent: NumericRangeFilter,
    },
  },
  {
    accessorKey: "close",
    header: "Close",
    enableSorting: true,
    enableColumnFilter: true,
    filterFn: "inNumberRange",
    meta: {
      filterComponent: NumericRangeFilter,
    },
  },
  {
    accessorKey: "volume",
    header: "Volume",
    enableSorting: true,
    enableColumnFilter: true,
    filterFn: "inNumberRange",
    meta: {
      filterComponent: NumericRangeFilter,
    },
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
      getFilteredRowModel: getFilteredRowModel(),
      getSortedRowModel: getSortedRowModel(),
      filterFns: {
        betweenNumberRange: (row, columnId, filterValue) => {
          const value = row.getValue<number>(columnId);
          const [min, max] = filterValue ?? [];
          if (min !== undefined && value < min) return false;
          if (max !== undefined && value > max) return false;
          return true;
        },
      },
    });
    
  
    return (
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getCanFilter() &&
                      header.column.columnDef.filterFn &&
                      <NumericRangeFilter
                        column={header.column}
                      />}
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
  