import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import HamburguerMenuLines from '../assets/img/hamburguerMenu.png'
import Title from './title'

const NavbarDiv = styled.div `
    display: flex; 
    background-color:#FCF902;
    @media (min-width: 600px) {
        height: 150px;
        padding: 3% 0 0 0 ;
    }
`
const HamburguerMenuDiv = styled.div`
    background-color: #F6DA02;
    border-radius: 30px;
    padding: 4%;
    margin: 0 3% 0 0 ;
    @media (min-width: 600px){
        background-color: transparent;
        margin: -2% 30% 0 0 ;
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
        this.setState(state => ({
          shouldMenuBeOpen: !this.state.shouldMenuBeOpen
        }));
      }
    render() {
        return (
            <NavbarDiv>
                <HamburguerMenuDiv>
                    <Link onClick={this.handleClick} to={!this.state.shouldMenuBeOpen ? '/menu': '/'}>
                        <img src={HamburguerMenuLines} />
                    </Link>
                </HamburguerMenuDiv>
                    <Title text="My Movie App"/>
            </NavbarDiv>
        )
    }
}

export default Navbar