import { type TickerData } from "@/utils/getTickerData";
import { Column } from "@tanstack/react-table";

export function NumericRangeFilter({
  column,
}: {
  column: Column<TickerData, unknown>;
}) {
    // @ts-ignore
  const [min, max] = column.getFilterValue() ?? [];

  return (
    <div className="flex items-center gap-2">
      <input
        type="number"
        placeholder="Min"
        className="w-20 border px-2 py-1 rounded"
        value={min ?? ""}
        onChange={(e) =>
          column.setFilterValue([
            e.target.value ? parseFloat(e.target.value) : undefined,
            max,
          ])
        }
      />
      <input
        type="number"
        placeholder="Max"
        className="w-20 border px-2 py-1 rounded"
        value={max ?? ""}
        onChange={(e) =>
          column.setFilterValue([
            min,
            e.target.value ? parseFloat(e.target.value) : undefined,
          ])
        }
      />
    </div>
  );
}
