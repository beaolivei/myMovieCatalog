import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ExibingPopularMovies from './pages/exibingMovies'
import MenuPage from './pages/menuPage'
import MovieListDrama from './pages/movieLists/movieListDrama'
import MovieListAction from './pages/movieLists/movieListAction';
import MovieListAnimation from './pages/movieLists/movieListAnimation'
import MovieListAdventure from './pages/movieLists/movieListAdventure'
import MovieListComedy from './pages/movieLists/movieListComedy';
import MovieListDocumentary from './pages/movieLists/movieListDocumentary'



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={ExibingPopularMovies}/>
        <Route path='/menu'  component ={MenuPage}/>
        <Route path ="/myListAction" component ={MovieListAction}/>
        <Route path ="/myListAdventure" component ={MovieListAdventure}/>
        <Route path ="/myListAnimation" component ={MovieListAnimation}/>
        <Route path ="/myListComedy" component ={MovieListComedy}/>
        <Route path ="/myListDocumentary" component ={MovieListDocumentary}/> 
        <Route path ="/myListDrama" component ={MovieListDrama}/>

      </Switch>
    </BrowserRouter>

  )
}

export default App;