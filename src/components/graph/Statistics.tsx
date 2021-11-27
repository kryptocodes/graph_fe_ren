import React from 'react'
import Table from '../shared/Table';

interface StatisticsProps {
    chart: any
}

const Statistics: React.FC<StatisticsProps> = ({chart}) => {
    const HeaderProduct = [
        {
          title: "Sno",
        },
        {
          title: "Date",
        },
        {
          title: "Market Cap",
        },    
    ]

    const ColumnProduct = chart?.market_caps?.reverse().map((item: any,index:number) => [
        {
            sno: index + 1,
            Date: new Date(item?.[0]).toLocaleDateString(),
            MarketCap: item?.[1]?.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
              .replace(/\d(?=(\d{3})+\.)/g, "$&,")
              .replace(/\$/g, "")
        }
    ])

    
    return (
        <>
        <Table Headers={HeaderProduct} Columns={ColumnProduct.slice(0,50)}/>
        </>
    );
}

export default Statistics