import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { RefreshButton, InputContainer, InputWrapper } from './style'

import refreshIcon from 'public/refresh.png'

// component for converter inside bitcoin widget

export const Converter = ({ currencyData }) => {
    const [currency, setCurrency] = useState(null)
    const [bitcoin, setBitcoin] = useState(null)
    const router = useRouter()
    const handleChange = (value, name) => {
        if (name === 'currency') {
            setBitcoin(
                value.nativeEvent.data / currencyData.rate_float !== 0
                    ? (
                          value.nativeEvent.data / currencyData.rate_float
                      ).toFixed(10)
                    : null
            )
        } else {
            setCurrency(
                value.nativeEvent.data * currencyData.rate_float !== 0
                    ? (
                          value.nativeEvent.data * currencyData.rate_float
                      ).toFixed(4)
                    : null
            )
        }
    }
    return (
        <>
            <InputContainer>
                <InputWrapper>
                    <label htmlFor='currency'>{currencyData.code}</label>
                    <input
                        id='currency'
                        type='number'
                        value={currency && currency}
                        onChange={(e) => handleChange(e, 'currency')}
                        onClick={() => currency && setCurrency(null)}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor='bitcoin'>BTC</label>
                    <input
                        id='bitcoin'
                        type='number'
                        value={bitcoin && bitcoin}
                        onChange={(e) => handleChange(e, 'bitcoin')}
                        onClick={() => bitcoin && setBitcoin(null)}
                    />
                </InputWrapper>
            </InputContainer>
            <RefreshButton onClick={() => router.reload()}>
                <Image
                    src={refreshIcon}
                    width={20}
                    height={20}
                    alt='refresh icon'
                    quality={100}
                />
            </RefreshButton>
        </>
    )
}
