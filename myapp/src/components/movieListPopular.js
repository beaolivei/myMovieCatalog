import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import movieDisplay from './movieDisplay'
import MovieDisplay from './movieDisplay';
import Title from './title';
//This component makes a movie list based on the most popular movies. It is different from the MovieListGenre component because of the API url structure//
const MovieDiv = styled.div`
    display: block;
    @media (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 3% 0 0 0;
    background-color: #D9DCE5};
`
const NavbarInput = styled.input `
    padding: 5% 35%;
    font-family: 'Montserrat', sans-serif;
    @media (min-width: 600px) {
        padding: 1% 25%;
        margin: 2% 0 0 20%;
    }
`
class MovieListMostPopular extends React.Component {
    constructor(props){
        super(props);
        this.state={
            myPopularMovies:[],
            mySearchResults:[],
            isSearchOn: false,
            resultsRows:[]
        };
    }
    
    myPopularList(movieObject) {
        var rows = []
        movieObject.forEach((movie)=> {
        rows.push(
            <MovieDisplay src={'https://image.tmdb.org/t/p/w500'+ movie.poster_path} key={movie.id} movieTitle = {movie.title} movieSummary={movie.overview} url={'https://www.themoviedb.org/movie/'+movie.id+'?language=en'}/>
        )
        })
        return(
            rows
        )
        
    }
    

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=2262518421d7f297bcccbb4ceb43d9d1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false')
        .then(response => response.json())
        .then (movies => this.setState({ myPopularMovies: movies.results}))
    }
    searchMovie(searchTerm) {
        fetch('https://api.themoviedb.org/3/search/movie?api_key=2262518421d7f297bcccbb4ceb43d9d1&query='+ searchTerm)
        .then(response => response.json())
        .then (myResults => this.setState ({mySearchResults: myResults.results}))
    }
    handleChange (e) {
        this.setState ({
            isSearchOn: true
        })
        const myValue = e.target.value
        this.searchMovie(myValue)
        console.log('results', this.state.mySearchResults)
        var resultsRows = []
        this.state.mySearchResults.forEach((movie)=> {
        resultsRows.push(
            <MovieDisplay src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} movieTitle = {movie.title} movieSummary={movie.overview} url={'https://www.themoviedb.org/movie/'+movie.id+'?language=en'}/>
        )
        })
        this.setState ({
            resultsRows : resultsRows
        })
    }
    render () {
        return (
            <div>
            <NavbarInput onChange={this.handleChange.bind(this)} placeholder="Enter search term"/>  
            {!this.state.isSearchOn ?
                <Title text="Most Popular Movies"/> :
                <Title text= "Your Search Results"/>
                } 
            <MovieDiv>  
     
                {this.state.resultsRows.length == 0 ? this.myPopularList(this.state.myPopularMovies) : this.state.resultsRows} 


            </MovieDiv>
            </div>
        )
        
    }
    
}

export default MovieListMostPopular