import React from 'react'

interface SummaryProps {
    price: any
}

const Summary: React.FC<SummaryProps> = ({price}) => {
        return (
            <div className="p-5">
                <p className='font-bold text-4xl font-sans mt-5'>Total: ${price?.usd}</p>
            </div>
        );
}

export default Summary