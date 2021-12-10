import { BitcoinWidget } from 'components/bitcoin-widget'

import { Container } from './style'

// component for container in which widget is centered in

export const BitcoinWidgetContainer = ({ background, ...props }) => {
    return (
        <>
            <Container background={background}>
                <BitcoinWidget {...props} />
            </Container>
        </>
    )
}
