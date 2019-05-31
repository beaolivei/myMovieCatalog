import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Navbar  from '../components/navbar'
import Title from '../components/title'

const MovieDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 3% 0 0 0;
    background-color: #D9DCE5;
`
const ImageDiv = styled.div`
    width: 40%;
    @media (min-width: 600px) {
        width: 20%;
        padding: 3%;
    }
`
const MyFilmImages =styled.img `
    width: 100%;
`

class MovieListMistery extends React.Component {
    constructor(props){
        super(props);
        this.state={
            dataMovie : [],
            dataMovie1: [],
            dataMovie2: [],
            dataMovie3: [],
            dataMovie4: [],
            dataMovie5: [],
            dataMovie6: [],
            dataMovie7: [],
            dataMovie8: [],
            dataMovie9: [],
            dataMovie10: [],
            dataMovie11: [],
            dataMovie12: [],
            dataMovie13: [],
            dataMovie14: [],
            dataMovie15: [],
            dataMovie16: [],
            dataMovie17: [],
            dataMovie18: [],
            dataMovie19: [],
        }
    }
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=2262518421d7f297bcccbb4ceb43d9d1&with_genres=9648&sort_by=vote_average.desc&vote_count.gte=10')
        .then(response => response.json())
        .then(data => this.setState ({ dataMovie : data,
                                    dataMovie1 : data.results[1],
                                    dataMovie2: data.results[2],
                                    dataMovie3: data.results[3],
                                    dataMovie4: data.results[4],
                                    dataMovie5: data.results[5],
                                    dataMovie6: data.results[6],
                                    dataMovie7: data.results[7],
                                    dataMovie8: data.results[8],
                                    dataMovie9: data.results[9],
                                    dataMovie10: data.results[10],
                                    dataMovie11: data.results[11],
                                    dataMovie12: data.results[12],
                                    dataMovie13: data.results[13],
                                    dataMovie14: data.results[14],
                                    dataMovie15: data.results[15],
                                    dataMovie16: data.results[16],
                                    dataMovie17: data.results[17],
                                    dataMovie18: data.results[18],
                                    dataMovie19: data.results[19]}));
    }

    render () {
        console.log('dataMovie', this.state.dataMovie)

        return (
            <div>
            <Navbar/>
            <Title text="Mistery"/>
            <MovieDiv>
                <ImageDiv>
                    <MyFilmImages src={'https://image.tmdb.org/t/p/w500'+this.state.dataMovie1.poster_path}/>
                </ImageDiv>
                <ImageDiv>  
                    <MyFilmImages src={'https://image.tmdb.org/t/p/w500'+this.state.dataMovie2.poster_path} />
                </ImageDiv> 
                <ImageDiv>
                    <MyFilmImages src={'https://image.tmdb.org/t/p/w500'+this.state.dataMovie3.poster_path} />
                </ImageDiv>
                <ImageDiv>
                   <MyFilmImages src={'https://image.tmdb.org/t/p/w500'+this.state.dataMovie4.poster_path} />
                </ImageDiv>
                <ImageDiv>
                   <MyFilmImages src={'https://image.tmdb.org/t/p/w500'+this.state.dataMovie5.poster_path} />
                </ImageDiv>
                <ImageDiv>
                   <MyFilmImages src={'https://image.tmdb.org/t/p/w500'+this.state.dataMovie6.poster_path} />
                </ImageDiv>
                <ImageDiv>
                   <MyFilmImages src={'https://image.tmdb.org/t/p/w500'+this.state.dataMovie7.poster_path} />
                </ImageDiv>
                <ImageDiv>
                   <MyFilmImages src={'https://image.tmdb.org/t/p/w500'+this.state.dataMovie8.poster_path} />
                </ImageDiv>
                <ImageDiv>
                   <MyFilmImages src={'https://image.tmdb.org/t/p/w500'+this.state.dataMovie9.poster_path} />
                </ImageDiv>
                <ImageDiv>
                   <MyFilmImages src={'https://image.tmdb.org/t/p/w500'+this.state.dataMovie10.poster_path} />
                </ImageDiv>
                <ImageDiv>
                   <MyFilmImages src={'https://image.tmdb.org/t/p/w500'+this.state.dataMovie11.poster_path} />
                </ImageDiv>
                <ImageDiv>
                   <MyFilmImages src={'https://image.tmdb.org/t/p/w500'+this.state.dataMovie12.poster_path} />
                </ImageDiv>
                <ImageDiv>
                   <MyFilmImages src={'https://image.tmdb.org/t/p/w500'+this.state.dataMovie13.poster_path} />
                </ImageDiv>
                <ImageDiv>
                   <MyFilmImages src={'https://image.tmdb.org/t/p/w500'+this.state.dataMovie14.poster_path} />
                </ImageDiv>
                <ImageDiv>
                   <MyFilmImages src={'https://image.tmdb.org/t/p/w500'+this.state.dataMovie15.poster_path} />
                </ImageDiv>
                <ImageDiv>
                   <MyFilmImages src={'https://image.tmdb.org/t/p/w500'+this.state.dataMovie16.poster_path} />
                </ImageDiv>
                <ImageDiv>
                   <MyFilmImages src={'https://image.tmdb.org/t/p/w500'+this.state.dataMovie17.poster_path} />
                </ImageDiv>
                <ImageDiv>
                   <MyFilmImages src={'https://image.tmdb.org/t/p/w500'+this.state.dataMovie18.poster_path} />
                </ImageDiv>
                <ImageDiv>
                   <MyFilmImages src={'https://image.tmdb.org/t/p/w500'+this.state.dataMovie19.poster_path} />
                </ImageDiv>
            </MovieDiv>
            </div>
        )
        
    }
    
}

export default MovieListMistery