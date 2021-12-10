import styled from 'styled-components'

export const NavContainer = styled.div`
    height: 5rem;
    border-bottom: solid 1px;
    display: flex;
    padding: 0 1rem;
`
export const NavTitleContainer = styled.div`
    width: 50%;
    font-family: 'Secular One', sans-serif;
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.black};
    }
`
export const NavButtonContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: right;
    align-items: center;
`
export const NavButtons = styled.button.attrs(() => ({
    type: 'button',
}))`
    border: solid 1px;
    border-bottom: ${({ isHighlight }) =>
        isHighlight ? 'solid 3px' : 'solid 1px'};
    height: 3rem;
    width: 3rem;
    cursor: pointer;
    margin: 1rem;
    background-color: ${({ background }) => background};
`
