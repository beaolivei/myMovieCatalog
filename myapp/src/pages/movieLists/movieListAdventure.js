import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navbar'
import MyListGenres from '../../components/movieListGenres'


const PageHolderDiv = styled.div`
    height: 100%;
`
class MovieListAdventure extends React.Component {
    render() {
        return(
            <PageHolderDiv>
                <Navbar/>
                <MyListGenres genreID='12' genre ='Adventure'/>
            </PageHolderDiv>
        )
    }
}
export default MovieListAdventure