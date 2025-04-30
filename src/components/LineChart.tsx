import { type TickerData } from '@/utils/getTickerData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type LineChartComponentProps = {
  data: TickerData[];
}

export default function LineChartComponent({ data }: LineChartComponentProps) {
  return (
    <div className="w-full h-[400px] border rounded-lg shadow-md">
       <ResponsiveContainer width="100%" height="100%">
         <LineChart data={data}>
           <CartesianGrid strokeDasharray="3 3" />
           <XAxis dataKey="date" />
           <YAxis domain={['auto', 'auto']} />
           <Tooltip />
           <Line type="monotone" dataKey="close" stroke="#8884d8" strokeWidth={2} dot={false} />
         </LineChart>
       </ResponsiveContainer>
    </div>
  );
}
