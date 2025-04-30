"use client";

import { EnumChartType } from "@/constants/enums";
import { type TickerData } from "@/utils/getTickerData"

import dynamic from 'next/dynamic';
import { useState, type ReactNode } from "react";
import { AddChart } from "./AddChart";

const HighLowAreaChart = dynamic(() => import('@/components/HighLowAreaChart'), { ssr: false });
const LineChartComponent = dynamic(() => import('@/components/LineChart'), { ssr: false });
const OpenCloseCombinedLineChart = dynamic(() => import('@/components/OpenCloseCombinedLineChart'), { ssr: false });
const VolumeBarChart = dynamic(() => import('@/components/VolumeBarChart'), { ssr: false });

type ChartViewProps = {
    data: TickerData[]
}

const initialCharts = [EnumChartType.Line, EnumChartType.Bar, EnumChartType.Area, EnumChartType.Combined];
const getChartMap: (data: ChartViewProps["data"]) => Record<typeof EnumChartType[keyof typeof EnumChartType], ReactNode> = (data) => ({
    [EnumChartType.Line]: <LineChartComponent data={data} />,
    [EnumChartType.Bar]: <VolumeBarChart data={data} />,
    [EnumChartType.Area]: <HighLowAreaChart data={data} />,
    [EnumChartType.Combined]: <OpenCloseCombinedLineChart data={data} />,
})

export function ChartView({ data }: ChartViewProps) {
    const [charts, setCharts] = useState(initialCharts);
    const chartComponents = getChartMap(data);

    return <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        <AddChart onAdd={t => setCharts(p => [...p, EnumChartType[t]])} />
        {charts.map((chartType) => (
            <div key={chartType} className="w-full h-full">
                {chartComponents[chartType]}
            </div>
        ))}
    </div>
}