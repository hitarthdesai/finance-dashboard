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
    return <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        <div>
            <LineChartComponent data={data}  />
        </div>
        <div>
            <VolumeBarChart data={data} />
        </div>
        <div>
            <HighLowAreaChart data={data} />
        </div>
        <div>
            <OpenCloseCombinedLineChart data={data} />
        </div>
    </div>
}