import { NextPage } from 'next';
import React, { useState, useEffect } from 'react'
import PriceIndex from '../src/components/graph';
import Loading from '../src/components/shared/Loading';
import Wrapper from '../src/components/shared/Wrapper';

const Index: React.FC<NextPage> = ({}) => {
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

    return (
      <Wrapper title='REN_FE'>
        {price && chart ? 
      <div className='p-5'>
        <PriceIndex price={price} chart={chart} />
      </div>
      : <Loading/> }  
      </Wrapper>
    );
}

export default Index