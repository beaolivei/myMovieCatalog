import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/navbar'
import MovieListMostPopular from '../components/movieListPopular'
import Title from '../components/title';

//this is the main page. All the other genre lists follow the same model as this page but with different main component//

const PageHolderDiv = styled.div`
    height: 100%;
`
class ExibingPopularMovies extends React.Component {
    render() {
        return(
            <PageHolderDiv>
                <Navbar/>
                <MovieListMostPopular/>
            </PageHolderDiv>
        )
    }
}
export default ExibingPopularMovies