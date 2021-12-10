import Head from 'next/head'
import { useRouter } from 'next/router'

import { Layout } from 'components/layout'

import { useReload } from 'hooks/useReload'

// page to show bitcoin price for different countries

export default function Currency({ data }) {
    const { query } = useRouter()
    useReload()
    return (
        <>
            <Head>
                <title>BitExchange | {query.country}</title>
            </Head>
            <Layout currencyData={data} />
        </>
    )
}

// nature of next.js means data is fetched at build time server side
// data is revalidated every second so when the page reloads the latest price is showing

export async function getStaticProps({ params }) {
    const { country } = params
    const currencyChecker = () => {
        return country === 'south africa'
            ? 'ZAR'
            : country === 'canada'
            ? 'CAD'
            : country === 'germany' && 'EUR'
    }
    const currency = currencyChecker()
    try {
        const result = await fetch(
            `https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`
        )
        const data = await result.json()
        return {
            props: {
                data: data.bpi[currency],
            },
            revalidate: 1,
        }
    } catch (err) {
        console.log(err.message)
    }
}

export async function getStaticPaths() {
    const countries = ['south africa', 'canada', 'germany']
    const paths = countries.map((c) => ({ params: { country: c } }))
    return {
        paths,
        fallback: false,
    }
}
