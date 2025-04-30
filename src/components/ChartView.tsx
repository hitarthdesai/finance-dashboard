"use client";

import { type TickerData } from "@/utils/getTickerData"

import dynamic from 'next/dynamic';

const HighLowAreaChart = dynamic(() => import('@/components/HighLowAreaChart'), { ssr: false });
const LineChartComponent = dynamic(() => import('@/components/LineChart'), { ssr: false });
const OpenCloseCombinedLineChart = dynamic(() => import('@/components/OpenCloseCombinedLineChart'), { ssr: false });
const VolumeBarChart = dynamic(() => import('@/components/VolumeBarChart'), { ssr: false });

type ChartViewProps = {
    data: TickerData[]
}

export function ChartView({ data }: ChartViewProps) {
    return <div className="grid grid-cols-2 gap-4">
        <LineChartComponent data={data}  />
        <VolumeBarChart data={data} />
        <HighLowAreaChart data={data} />
        <OpenCloseCombinedLineChart data={data} />
    </div>
}