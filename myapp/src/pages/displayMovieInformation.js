import React from 'react'
import styled from 'styled-components'
import Title from '../components/title'
import Navbar from '../components/navbar'
const MyDisplayMovieDiv = styled.div `
    background-color: #D9DCE5;
    padding: 5% 6%;
`
const MyPosterImg = styled.img `
    width: 100%;
`
const DecorativeLineDiv = styled.div `
    padding: 2px; 
    background-color: #F6DA02
`

class DisplayMovieInformation extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        return (
            <div>
                <Navbar/>
                <MyDisplayMovieDiv>
                    <MyPosterImg src={'https://image.tmdb.org/t/p/w500/'+"/ziEuG1essDuWuC5lpWUaw1uXY2O"+'.jpg'}/>
                    <Title text='movie title'/>
                    <DecorativeLineDiv></DecorativeLineDiv>
                    <div>
                        <p>Genre</p>
                        <p>Rating</p>
                        <p>Budget</p>
                    </div>
                </MyDisplayMovieDiv>
            </div>
        )
    }
}
export default DisplayMovieInformation