import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ExibingMovies from './pages/exibingMovies'
import MenuPage from './pages/menuPage'
import DisplayMovieInformation from './pages/displayMovieInformation'
import MovieListDrama from './pages/movieListDrama'
import MovieListMistery from './pages/movieListMistery';
import MovieListComedy from './pages/myListComedy';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={ExibingMovies}/>
        <Route path='/menu'  component ={MenuPage}/>
        <Route path='/movieInfo' component ={DisplayMovieInformation}/>
        <Route path ="/myListDrama" component ={MovieListDrama}/>
        <Route path ="/myListMistery" component ={MovieListMistery}/>
        <Route path ="/myListComedy" component ={MovieListComedy}/>
      </Switch>
    </BrowserRouter>

  )
}

export default App;