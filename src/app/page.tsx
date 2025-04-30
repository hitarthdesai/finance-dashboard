import { ChartView } from "@/components/ChartView";
import { DataTable } from "@/components/DataTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getTickerData } from "@/utils/getTickerData"

const EnumViewMode = {
  Chart: "chart",
  Table: "table",
} as const

export  default async function Home() {
  const data = await getTickerData("IBM")

  return (
    <main className="flex min-h-screen h-full w-full flex-col items-center justify-between p-4">
      <Tabs defaultValue={EnumViewMode.Chart} className="w-full">
        <TabsList>
          <TabsTrigger value={EnumViewMode.Chart}>Chart</TabsTrigger>
          <TabsTrigger value={EnumViewMode.Table}>Table</TabsTrigger>
        </TabsList>
        <TabsContent className="w-full" value={EnumViewMode.Chart}>
          <ChartView data={data} />
        </TabsContent>
        <TabsContent className="w-full" value={EnumViewMode.Table}>
          <DataTable data={data} />
        </TabsContent>
      </Tabs>

      
    </main>
  );
}
