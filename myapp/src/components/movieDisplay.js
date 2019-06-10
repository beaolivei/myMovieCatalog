import React from 'react'
import styled from 'styled-components'
import Title from './title'
//this component is the structure to display the movie item//
const ImageDiv = styled.div`
    width: 100%;
    @media (min-width: 600px) {
        width: 20%;
        padding: 3%;
    }
`
const MyFilmImages =styled.img `
    width: 100%;
`
const Paragraph = styled.p `
    color: #ae6006;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-size: 15px;
    padding: 0 10%;
    @media (min-width: 600px){
        font-size: 20px;
    }
`
const MyButton = styled.button `
    background-color: #F6DA02;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    padding: 15px 45%;;
    border-style: none;
    margin: 0 0 5% 0;
`
class MovieDisplay extends React.Component {
render() {
    return(
        <ImageDiv>
            <MyFilmImages src={this.props.src}/>
            <Title text={this.props.movieTitle}/>
            <Paragraph>{this.props.movieSummary}</Paragraph>
            <a href={this.props.url}>
                <MyButton> More </MyButton>
            </a>
        </ImageDiv>
    )
}
}
export default MovieDisplay