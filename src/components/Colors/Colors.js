import styled from 'styled-components'

export const colorScheme = {

    defaultLight: '#FFFFFF',
    defaultBright: '#000000',
    primary: '#026670',
    primaryLight: '#9FEDD7',
    secondary: '#FCE181',
    secondaryLight: '#FEF9C7',
    shadow: '#EDEAE5'

}

export const Color = styled.div`
  background-color: ${p => colorScheme[p.color]};
  width: 100px;
  height: 100px;
  display: inline-block;
`
