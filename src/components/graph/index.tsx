import React, { useEffect, useState, useRef } from "react";
import { formatData } from "../utils/util";

import ReactHighcharts from "react-highcharts/ReactHighstock.src";

interface indexProps {}

const PriceIndex: React.FC<indexProps> = ({}) => {
  const [price, setPrice] = useState<any>();
  const [chart, setChart] = useState<any>();

  useEffect(() => {
  const FetchData = async () => {
    const response = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=14 ")
    const data = await response.json()
    setChart(data)
    console.log(data)
  }

  const FetchPrice = async () => {
    const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true")
    const data = await response.json()
    setPrice(data?.bitcoin)
    console.log(data)
  }

  FetchPrice()
  FetchData()
  }, [])

  const chartConfig = {
    chart: {
      type: "line",
      zoomType: "x",
      panning: true,
      panKey: "shift",
      scrollablePlotArea: {
        minWidth: 600,
        scrollPositionX: 1
      },
      selectionMarkerFill: "rgba(4,2,8,0.25)",
      market: {
        enabled: true,
        color: "red"
      }
    },
    colors: ["#4B40EE"],
    colorAxis: {
      minColor: "#4B40EE",
      maxColor: "#4B40EE",
      gridLineColor: "#4B40EE"
    },
    rangeSelector: {
      buttons: [{
        type: 'day',
        count: 1,
        text: '1d',
      }, {
        type: 'day',
        count: 7,
        text: '7d'
      }, {
        type: 'month',
        count: 1,
        text: '1m'
      }, {
        type: 'month',
        count: 3,
        text: '3m'
      },
        {
        type: 'all',
        text: 'All'
      }],
      selected: 4,
      inputEnabled: false
    },
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: {
        day: "%e"
      },
      visible: false
    },
    yAxis: {
      visible: false
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: true
        }
      }
    },
    
    series: [
      {
        name: "Price",
        data: chart?.prices
      },
      
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom"
            }
          }
        }
      ]
    }
  };


  return (
    <div className="p-4">
      <div className="flex">
        <h1 className="text-6xl font-bold">{price?.usd}</h1>
        <p className="ml-2">USD</p>
      </div>
      <p className={`${price?.usd_24h_change > 0 ? 'text-green-500' : 'text-red-500'} text-2xl mt-5`}>{Math.round((price?.usd_24h_change/100) * price?.usd)*100/100} ({Math.round(price?.usd_24h_change * 100) / 100}%)</p>
      {/* {JSON.stringify(chart) !== '{}' && <ReactHighcharts config={formatData(chart)} ref={chart => setChart(chart)} />} */}
      {chart?.prices?.map((item: any, index: number) => {
        <p>{item}</p>
      })}
      {chart && <ReactHighcharts config={chartConfig} />}
    </div>
  );
};
export default PriceIndex;
