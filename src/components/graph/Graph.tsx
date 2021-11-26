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
            width: 30,
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
        <ReactHighcharts config={chartConfig} />
    );
}

export default Graph