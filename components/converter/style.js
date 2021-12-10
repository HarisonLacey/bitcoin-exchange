import styled from 'styled-components'

export const RefreshButton = styled.button.attrs(() => ({
    type: 'button',
}))`
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    margin-top: 2rem;
    cursor: pointer;
`

export const InputContainer = styled.div`
    display: flex;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const InputWrapper = styled.div`
    margin: 0 0.5rem;
    input {
        margin-left: 0.5rem;
    }
    @media only screen and (max-width: 768px) {
        margin-top: 0.5rem;
    }
`
