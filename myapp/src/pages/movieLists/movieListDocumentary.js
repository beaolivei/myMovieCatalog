import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navbar'
import MyListGenres from '../../components/movieListGenres'


const PageHolderDiv = styled.div`
    height: 100%;
`
class MovieListDocumentary extends React.Component {
    render() {
        return(
            <PageHolderDiv>
                <Navbar/>
                <MyListGenres genreID='99' genre ='Documentary'/>
            </PageHolderDiv>
        )
    }
}
export default MovieListDocumentary