import styled from 'styled-components'

export const FooterContainer = styled.div`
    height: 10rem;
    border-top: solid 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        height: auto;
    }
`
export const CountryBlockLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: 1rem;
`

export const CountryName = styled.p`
    font-weight: 700;
`

export const Button = styled.button`
    height: 8rem;
    width: 20%;
    background-color: ${({ theme }) => theme.colors.white};
    border: solid 1px ${({ theme }) => theme.colors.darkGrey};
    border-radius: 0.5rem;
    @media only screen and (max-width: 768px) {
        width: 50%;
        margin: 1rem 0;
    }
`
