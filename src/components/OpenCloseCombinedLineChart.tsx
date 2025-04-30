import { type TickerData } from '@/utils/getTickerData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type OpenCloseCombinedLineChartProps = {
  data: TickerData[];
}

export default function OpenCloseCombinedLineChart({data}: OpenCloseCombinedLineChartProps) {
    return (
      <div className="w-full h-[400px] border rounded-lg shadow-md">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={['auto', 'auto']} />
            <Tooltip />
            <Line type="monotone" dataKey="open" stroke="#ff7300" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="close" stroke="#387908" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }