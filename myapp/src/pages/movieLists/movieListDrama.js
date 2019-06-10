import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navbar'
import MyListGenres from '../../components/movieListGenres'


const PageHolderDiv = styled.div`
    height: 100%;
`
class MovieListDrama extends React.Component {
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
                <MyListGenres genreID='18' genre ='Drama'/>
            </PageHolderDiv>
        )
    }
}
export default MovieListDrama
