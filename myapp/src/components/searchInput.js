import React from 'react'
import styled from 'styled-components'
import Title from './title'

const SearchInputHolderDiv = styled.div `
    background-color: #FCF902;
    align-itens: center;
    display: block;
    padding: 10% 20%;
    @media (min-width: 600px){
        padding: 4% 40%;
        height: 100%;   
    }
`
const MyInput = styled.input`
    background-color: rgba(246,218,2,0.45);
    font-family:'Montserrat', sans-serif;
    display: block;
    align-items: center;
    style: none;
    resize: none;
    text-align: center;
    padding: 3%;
    @media (min-width: 600px){
        padding: 2% 15%;
    }

`
const MyButton = styled.button `
    border-style: none;
    padding: 3% 10%;
    background-color: #F6DA02;
    display: block;
    margin: 5% 0 0 40%;
    @media (min-width: 600px){
    padding: 0% 25%;
    margin:0;
    }
`
const DecorativeLineDiv = styled.div `
    padding: 2px; 
    background-color: #F6DA02
`
class SearchInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            query: "",
            data: [],
            filteredData: []
          };
    }
    handleInputChange = event => {
      const query = event.target.value;
  
      this.setState(prevState => {
        const filteredData = prevState.data.filter(element => {
          return element.name.toLowerCase().includes(query.toLowerCase());
        });
  
        return {
          query,
          filteredData
        };
      });
    };
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=2262518421d7f297bcccbb4ceb43d9d1&language=en')
        .then(response => response.json())
        .then(data =>this.setState ({data: data.results}))
    }

    render () {
        console.log('data', this.state.data)
        return (
            <div>
                <SearchInputHolderDiv>
                    <MyInput type='text' value='type the film title here'/>
                    <MyButton><Title text='GO'/></MyButton>
                </SearchInputHolderDiv>
                <DecorativeLineDiv></DecorativeLineDiv>
            </div>
        )
    }
}
export default SearchInput
