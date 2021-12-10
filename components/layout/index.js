import { useState } from 'react'

import { NavBar } from 'components/nav-bar'
import { BitcoinWidgetContainer } from 'components/bitcoin-widget-container'
import { Footer } from 'components/footer'

// layout component

export const Layout = ({ children, ...props }) => {
    const [background, setBackground] = useState('#EAEAEA')
    return (
        <>
            <NavBar background={background} setBackground={setBackground} />
            <BitcoinWidgetContainer background={background} {...props} />
            <Footer />
        </>
    )
}
