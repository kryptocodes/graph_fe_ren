import React from 'react'
import ReactHighcharts from "react-highcharts/ReactHighstock.src";

interface GraphProps {
    chart: any;
}

const Graph: React.FC<GraphProps> = ({chart}) => {
    const chartConfig = {
        chart: {
          type: "line",
          zoomType: "x",
          panning: true,
          panKey: "shift",
          styledMode: true,
          scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1,
          },
          selectionMarkerFill: "rgba(4,2,8,0.25)",
          market: {
            enabled: true,
            color: "red",
          },
        },
        credits: {
          enabled: false,
        },
        tooltip: {
          crosshairs: true,
          valueDecimals: 2,
          split: true,
          shared: true,
          useHTML: true,
          valueSuffix: " USD",
          xDateFormat: "%A, %b %e, %Y",
        },
        colors: ["#4B40EE"],
        colorAxis: {
          minColor: "#4B40EE",
          maxColor: "#4B40EE",
          gridLineColor: "#4B40EE",
        },
        rangeSelector: {
          buttons: [
            {
              type: "day",
              count: 1,
              text: "1d",
            },
            {
              type: "day",
              count: 3,
              text: "3d",
            },
            {
              type: "week",
              count: 1,
              text: "1w",
            },
            {
              type: "month",
              count: 1,
              text: "1m",
            },
            {
              type: "month",
              count: 3,
              text: "3m",
            },
            {
              type: "month",
              count: 6,
              text: "6m",
            },
            {
              type: "year",
              count: 1,
              text: "1y",
            },
            {
              type: "all",
              text: "max",
            },
          ],
          selected: 3,
          inputEnabled: false,
          buttonPosition: {
            align: "right",
          },
          buttonTheme: {
            width: 50,
            height: 20,

            inputStyle: {
              fontWeight: "bold",
              padding: "5px",
            },
            state: {
              select: {
                fill: "#4B40EE",
                color: "#ffffff",
              },
            },
            style: {
              fill: "#4B40EE",
              fontWeight: "bold",
              borderRadius: "5px",
              border: "1px solid #4B40EE",
              padding: "5px",
            },
            stroke: "none",
          },
        },
        xAxis: {
          crosshair: true,
          type: "datetime",
          dateTimeLabelFormats: {
            day: "%e",
          },
          visible: false,
        },
        yAxis: {
          crosshair: true,
          visible: false,
        },
        legend: {
          enabled: false,
        },
        plotOptions: {
          series: {
            label: {
              connectorAllowed: true,
            },
          },
        },
    
        series: [
          {
            name: "Price",
            data: chart?.prices,
            color: "#4B40EE",
            backgroundColor: "#4B40EE",
          },
        ],
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500,
              },
              chartOptions: {
                legend: {
                  layout: "horizontal",
                  align: "center",
                  verticalAlign: "bottom",
                },
              },
            },
          ],
        },
      };    
    return (
      <>
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
        <ReactHighcharts config={chartConfig} />
      </>
    );
}

export default Graph