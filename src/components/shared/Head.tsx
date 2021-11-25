import React from 'react'
import HeaderBox from 'next/head'

interface HeadProps {
    title: string

}

const Head: React.FC<HeadProps> = ({title="Graph_Fe"}) => {    
    return (
        <HeaderBox>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="Graph_Fe" />
        </HeaderBox>
        );
}

export default Head