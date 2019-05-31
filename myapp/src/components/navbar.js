import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import HamburguerMenuLines from '../assets/img/hamburguerMenu.png'
import Title from './title'

const NavibarDiv = styled.div `
    display: flex; 
    background-color:#FCF902;
    @media (min-width: 600px) {
        height: 150px;
    }
`
const HamburguerMenuDiv = styled.div`
    background-color: #F6DA02;
    border-radius: 30px;
    padding: 4%;
    @media (min-width: 600px){
        background-color: transparent;
    }
`
const TitleHolderDiv = styled.div `
    margin: 5% 0 0 20%;
    @media (min-width: 600px) {
        margin: 0 35%;
    }
`

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            shouldMenuBeOpen: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        // e.preventDefault();
        this.setState(state => ({
          shouldMenuBeOpen: !state.shouldMenuBeOpen
        }));
      }
    render() {
        console.log('shouldMenuBeOpen', this.state.shouldMenuBeOpen)
        console.log('genre', this.state.genre)
        return (
            <NavibarDiv>
                <HamburguerMenuDiv>
                    <Link onClick={this.handleClick} to={!this.state.shouldMenuBeOpen ? '/menu': '/'}>
                        <img src={HamburguerMenuLines} />
                    </Link>
                </HamburguerMenuDiv>
                {!this.state.shouldMenuBeOpen ? 
                    <TitleHolderDiv>
                        <Title text="Most Popular"/>
                    </TitleHolderDiv> :
                    <TitleHolderDiv>
                        <Title text=""/>
                    </TitleHolderDiv> 
                         }
            </NavibarDiv>
        )
    }
}

export default Navbar