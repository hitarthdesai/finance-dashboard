import { type TickerData } from '@/utils/getTickerData';
import {  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

type HighLowAreaChartProps = {
    data: TickerData[];
}
  
export default function HighLowAreaChart({data}: HighLowAreaChartProps) {
  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
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