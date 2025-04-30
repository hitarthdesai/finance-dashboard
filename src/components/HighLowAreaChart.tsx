import { type TickerData } from '@/utils/getTickerData';
import {  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

type HighLowAreaChartProps = {
    data: TickerData[];
}
  
export default function HighLowAreaChart({data}: HighLowAreaChartProps) {
  return (
    <div className="w-full h-[400px] border rounded-lg shadow-md">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Area type="monotone" dataKey="high" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="low" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}