import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/navbar'
import MovieListMostPopular from '../components/movieListPopular'
import Title from '../components/title';
const PageHolderDiv = styled.div`
    height: 100%;
`
class ExibingMovies extends React.Component {
    constructor(props){
        super(props);
        this.state={
            genre: 'Popular'
        }
    }
    changeGenreState() {

    }
    render() {
        return(
            <PageHolderDiv>
                <Navbar/>
                <Title text ='All Genres'/>
                <MovieListMostPopular/>
            </PageHolderDiv>
        )
    }
}
export default ExibingMovies