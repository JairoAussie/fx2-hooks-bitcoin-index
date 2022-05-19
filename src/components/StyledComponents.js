import styled from 'styled-components'

export const AppContainer = styled.div`
    max-width: 720px;
    margin: 0 auto;
    text-align: center;

`

export const Heading = styled.h1`
    font-size: 2em;
    font-family: 'Bungee';
`

export const SelectHeading = styled.span`
    font-size: 1em;
    font-family: 'Bungee';
`

export const SelectContainer = styled.div`
    select {
    padding: 1em;
    border: none;
    box-shadow: none;
    background: transparent;
    -webkit-appearance: none;
    font-family: 'Bungee', cursive;
    color: #ff1769;
    font-size: 1em;
    max-width: 250px;
    white-space:nowrap;
    &:focus {
        outline: none;
    }
  }
`