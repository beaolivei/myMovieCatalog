import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navbar'
import MyListGenres from '../../components/movieListGenres'


const PageHolderDiv = styled.div`
    height: 100%;
`
class MovieListAnimation extends React.Component {
    render() {
        return(
            <PageHolderDiv>
                <Navbar/>
                <MyListGenres genreID='16' genre ='Animation'/>
            </PageHolderDiv>
        )
    }
}
export default MovieListAnimation