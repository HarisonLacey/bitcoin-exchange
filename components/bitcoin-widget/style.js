import styled from 'styled-components'

export const Widget = styled.div`
    width: 50%;
    height: 15rem;
    border: solid 1px grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 0.5rem;
    @media only screen and (max-width: 1024px) {
        width: 70%;
    }
`
