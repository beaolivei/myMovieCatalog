import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navbar'
import MyListGenres from '../../components/movieListGenres'


const PageHolderDiv = styled.div`
    height: 100%;
`
class MovieListComedy extends React.Component {
    render() {
        return(
            <PageHolderDiv>
                <Navbar/>
                <MyListGenres genreID='35' genre ='Comedy'/>
            </PageHolderDiv>
        )
    }
}
export default MovieListComedy