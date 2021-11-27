import React from 'react'

interface SettingsProps {

}

const Settings: React.FC<SettingsProps> = ({}) => {
        return (
            <>
                <div className='sm:p-4 p-0 mt-4'>
                    <p className='text-xl font-bold'>
                        Coin: BTC
                    </p>
                    <p className='text-xl font-bold'>
                        Market: BTC-USD
                    </p>
                    <p className='text-xl font-bold'>
                        Timeframe: max
                    </p>

                </div>
            </>
        );
}

export default Settings