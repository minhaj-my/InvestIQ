"use client";
import Link from "next/link";
import Script from "next/script";

interface WatchlistStock {
  symbol: string;
  name: string;
  price: number;
  change: number;
}

const mockWatchlist: WatchlistStock[] = [
  { symbol: "AAPL", name: "Apple Inc.", price: 175.5, change: 1.2 },
  { symbol: "TSLA", name: "Tesla Inc.", price: 180.2, change: -2.4 },
  { symbol: "NVDA", name: "NVIDIA Corp.", price: 875.12, change: 4.5 },
];

export default function WatchlistPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold tracking-tight mb-6">My Watchlist</h1>

      {mockWatchlist.length === 0 ? (
        <p className="text-gray-400">Your watchlist is empty.</p>
      ) : (
        <div className="grid gap-4">
          {mockWatchlist.map((stock) => (
            <Link
              key={stock.symbol}
              href={`/stocks/${stock.symbol}`}
              className="flex justify-between items-center p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition"
            >
              <div>
                <h2 className="font-bold text-lg">{stock.symbol}</h2>
                <p className="text-sm text-gray-400">{stock.name}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">${stock.price.toFixed(2)}</p>
                <p
                  className={`text-sm font-medium ${stock.change >= 0 ? "text-green-400" : "text-red-400"}`}
                >
                  {stock.change >= 0 ? "+" : ""}
                  {stock.change}%
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      <EconomicMap />
    </div>
  );
}

function EconomicMap() {
  return (
    <div className="w-full h-[600px]">
      <Script
        type="module"
        src="https://widgets.tradingview-widget.com/w/en/tv-economic-map.js"
        strategy="lazyOnload"
      />
      {/* @ts-expect-error Custom Web Component */}
      <tv-economic-map theme="dark"></tv-economic-map>
    </div>
  );
}
