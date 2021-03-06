import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "https://api.themoviedb.org/3/discover/movie?api_key=2262518421d7f297bcccbb4ceb43d9d1"
});
client
  .query({
    query: gql`
      {
        original_title
            
        
      }
    `
  })
  .then(result => console.log('result', result));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
