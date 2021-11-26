import React, { useEffect, useState, useRef } from "react";
import { formatData } from "../utils/util";

import Graph from "./Graph";

interface indexProps {}

const PriceIndex: React.FC<indexProps> = ({}) => {
  const [price, setPrice] = useState<any>();
  const [chart, setChart] = useState<any>();

  useEffect(() => {
    const FetchData = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=max "
      );
      const data = await response.json();
      setChart(data);
      console.log(data);
    };

    const FetchPrice = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true"
      );
      const data = await response.json();
      setPrice(data?.bitcoin);
    };

    FetchPrice();
    FetchData();
  }, []);


  const ButtonTab = ({ active=false, content }) => (
    <button className={`text-gray-900 font-medium py-4 px-6 block  focus:outline-none  ${active ? 'border-b-4 border-indigo-500' : ''} `}>
      {content}
    </button>
  );

  return (
    <div className="p-4">
      <div className="flex">
        <h1 className="text-6xl font-bold">
          {price?.usd
            .toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })
            .replace(/\d(?=(\d{3})+\.)/g, "$&,")
            .replace(/\$/g, "")}
        </h1>
        <p className="ml-1 text-lg font-bold text-gray-400">USD</p>
      </div>
      <p
        className={`${
          price?.usd_24h_change > 0 ? "text-green-500" : "text-red-500"
        } text-2xl mt-5`}
      >
        {price?.usd_24h_change > 0 ? "+" : ""}
        {(Math.round((price?.usd_24h_change / 100) * price?.usd) * 100) / 100} (
        {Math.round(price?.usd_24h_change * 100) / 100}%)
      </p>

      <nav className="flex flex-col sm:flex-row">
        <ButtonTab content="Summary" />
        <ButtonTab  content="Chart" active  />
        <ButtonTab content="Statistics" />
        <ButtonTab content="Analystics" />
        <ButtonTab content="Settings" />
      </nav>

      <div className="flex p-5 gap-5 -mb-5">
        <button className="flex gap-2 p-2 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#6F7177"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
            ></path>
          </svg>
          Full Screen
        </button>
        <button className="flex gap-2 p-2 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Compare
        </button>
      </div>
      {chart && <Graph chart={chart} />}
    </div>
  );
};
export default PriceIndex;
