import { Converter } from 'components/converter'

import { Widget } from './style'

// component for center widget that displays and calculates bitcoin price

export const BitcoinWidget = ({ currencyData }) => {
    return (
        <Widget>
            <h2>
                {currencyData.code} {currencyData.rate}
            </h2>
            <Converter currencyData={currencyData} />
        </Widget>
    )
}
