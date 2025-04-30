import { type TickerData } from '@/utils/getTickerData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type OpenCloseCombinedLineChartProps = {
  data: TickerData[];
}

export default function OpenCloseCombinedLineChart({data}: OpenCloseCombinedLineChartProps) {
    return (
      <div className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
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