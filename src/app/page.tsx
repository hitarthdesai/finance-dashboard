import { ChartView } from "@/components/ChartView";
import { DataTable } from "@/components/DataTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EnumViewMode } from "@/constants/enums";
import { getTickerData } from "@/utils/getTickerData"

export  default async function Home() {
  const data = await getTickerData("IBM")

  return (
    <main className="flex min-h-screen w-full flex-col items-center p-4">
      <Tabs defaultValue={EnumViewMode.Chart} className="w-full h-full">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Ticker Data</h1>
          <TabsList>
            <TabsTrigger value={EnumViewMode.Chart}>Chart</TabsTrigger>
            <TabsTrigger value={EnumViewMode.Table}>Table</TabsTrigger>
          </TabsList>
        </div>
        {data.length === 0 ? <div className="flex grow flex-col w-full h-full items-center justify-center">
          <h1 className="text-2xl font-bold">No data available</h1>
          <p className="text-lg">Please try again later by refreshing this page</p>
        </div> : <>
          <TabsContent className="w-full" value={EnumViewMode.Chart}>
            <ChartView data={data} />
          </TabsContent>
          <TabsContent className="w-full" value={EnumViewMode.Table}>
            <DataTable data={data} />
          </TabsContent>
        </>}
      </Tabs>
    </main>
  );
}
