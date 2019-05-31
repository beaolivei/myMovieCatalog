import React from 'react'
import styled from 'styled-components'

const PStyled = styled.p `
    color: #ae6006;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    @media (min-width: 600px){
        font-size: 35px;
    }
`
function Title (props) {
    return (
        <PStyled>
            {props.text}
        </PStyled>
    )
}
export default Title