import { z } from "zod";

const API_KEY = "338YYCHMSEJE11XR";
const ticketDataSchema = z.object({
    "Time Series (Daily)": z.record(
        z.object({
        "1. open": z.string(),
        "2. high": z.string(),
        "3. low": z.string(),
        "4. close": z.string(),
        "5. volume": z.string(),
        })
    ),
})

export type TickerData = {
    date: Date;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}

export async function getTickerData(ticker: string): Promise<TickerData[]> {
    try {
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${API_KEY}`
        const _data = await fetch(url).then((res) => res.json());
        const data = ticketDataSchema.parse(_data);
        
        const tickerData = data["Time Series (Daily)"];
        
        return Object.entries(tickerData).map(([date, values]) => ({
            date: new Date(date),
            open: parseFloat(values["1. open"]),
            high: parseFloat(values["2. high"]),
            low: parseFloat(values["3. low"]),
            close: parseFloat(values["4. close"]),
            volume: parseInt(values["5. volume"]),
        }));
    } catch (error) {
        console.error("Error fetching ticker data:", error);
        return [];
    }
}