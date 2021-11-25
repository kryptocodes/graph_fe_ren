import { NextPage } from 'next';
import React from 'react'
import PriceIndex from '../src/components/graph';
import Wrapper from '../src/components/shared/Wrapper';

const index: React.FC<NextPage> = ({}) => {
    return (
      <Wrapper title='Graph'>
      <div className='p-5'>
        <PriceIndex />
      </div>
      </Wrapper>
    );
}

export default index