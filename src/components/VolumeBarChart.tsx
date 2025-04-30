import { type TickerData } from '@/utils/getTickerData';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

type VolumeBarChartProps = {
  data: TickerData[];
}

export default function VolumeBarChart({data}: VolumeBarChartProps) {
    return (
      <div className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="volume" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
  
  