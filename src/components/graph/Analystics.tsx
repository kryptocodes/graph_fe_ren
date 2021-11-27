import React from 'react'
import Table from '../shared/Table';

interface AnalysticsProps {
    chart: any
}

const Analystics: React.FC<AnalysticsProps> = ({chart}) => {
    const HeaderProduct = [
        {
          title: "Sno",
        },
        {
          title: "Date",
        },
        {
          title: "Total Volume",
        },    
    ]

    const ColumnProduct = chart?.total_volumes?.reverse().map((item: any,index:number) => [
        {
            sno: index + 1,
            Date: new Date(item?.[0]).toLocaleDateString(),
            volume: item?.[1]?.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
              .replace(/\d(?=(\d{3})+\.)/g, "$&,")
              .replace(/\$/g, "")
        }
    ])
    return (
        <>
            <Table Headers={HeaderProduct} Columns={ColumnProduct.slice(0,100)}/>
        </> 
    );
}

export default Analystics