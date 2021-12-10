import Head from 'next/head'
import { useRouter } from 'next/router'

import { Layout } from 'components/layout'

import { useReload } from 'hooks/useReload'

export default function Landing({ data }) {
    const { query } = useRouter()
    useReload()
    return (
        <>
            <Head>
                <title>BitExchange | usa</title>
            </Head>
            <Layout currencyData={data} />
        </>
    )
}

// nature of next.js means data is fetched at build time server side
// data is revalidated every second so when the page reloads the latest price is showing

export async function getStaticProps() {
    try {
        const result = await fetch(
            `https://api.coindesk.com/v1/bpi/currentprice/usd.json`
        )
        const data = await result.json()
        return {
            props: {
                data: data.bpi['USD'],
            },
            revalidate: 1,
        }
    } catch (err) {
        console.log(err.message)
    }
}
