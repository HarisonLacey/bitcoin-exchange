import Link from 'next/link'

import {
    NavContainer,
    NavButtons,
    NavTitleContainer,
    NavButtonContainer,
} from './style'

// navbar component with title and buttons to change background color

export const NavBar = ({ background, setBackground }) => {
    return (
        <NavContainer>
            <NavTitleContainer>
                <Link href='/'>
                    <a>
                        <h2>BitExchange</h2>
                    </a>
                </Link>
            </NavTitleContainer>
            <NavButtonContainer>
                <NavButtons
                    isHighlight={background === '#EAEAEA'}
                    background='#EAEAEA'
                    onClick={() => setBackground('#EAEAEA')}
                />
                <NavButtons
                    isHighlight={background === '#F2DDC1'}
                    background='#F2DDC1'
                    onClick={() => setBackground('#F2DDC1')}
                />
                <NavButtons
                    isHighlight={background === '#CDF2CA'}
                    background='#CDF2CA'
                    onClick={() => setBackground('#CDF2CA')}
                />
            </NavButtonContainer>
        </NavContainer>
    )
}
