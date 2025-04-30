import { z } from "zod";

const API_KEY = "QDXSEI79AX8F6E3UQ";


/**
 * {
    "Meta Data": {
        "1. Information": "Daily Prices (open, high, low, close) and Volumes",
        "2. Symbol": "IBM",
        "3. Last Refreshed": "2025-04-29",
        "4. Output Size": "Compact",
        "5. Time Zone": "US/Eastern"
    },
    "Time Series (Daily)": {
        "2025-04-29": {
            "1. open": "237.0000",
            "2. high": "239.9800",
            "3. low": "236.1400",
            "4. close": "239.3900",
            "5. volume": "3426508"
        },
    }
 */
const ticketDataSchema = z.object({
    // "Meta Data": z.object({
    //     "1. Information": z.string(),
    //     "2. Symbol": z.string(),
    //     "3. Last Refreshed": z.string(),
    //     "4. Output Size": z.string(),
    //     "5. Time Zone": z.string(),
    // }),
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
}