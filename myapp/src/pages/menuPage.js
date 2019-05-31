import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar'
import SearchInput from '../components/searchInput'
import Title from '../components/title'

const MenuPageHolderDiv = styled.div `
    background-color: #FCF902;
    height: -webkit-fill-available;
    @media (min-width: 600px) {
        height: 100%;
    }

`
const GenreLinksListDiv = styled.div`
    display: block;
    padding: 10%;
`
const MyLink = styled(Link)`
    display:block;
    text-decoration: none;
    padding: 5% 4%;
    @media (min-width: 600px) {
        padding: 0% 2%;
    }
`
class MenuPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            whatIsTheGener: 'Popular',
        }
        this.handleClickDrama = this.handleClickDrama.bind(this);
        this.handleClickComedy = this.handleClickComedy.bind(this);
        this.handleClickMistery = this.handleClickMistery.bind(this);
    }
    handleClickDrama() {
        this.setState({
            whatIsTheGener: 'Drama'
          });
        }

    handleClickComedy() {
        this.setState({
            whatIsTheGener : 'Comedy'
        })
    }
    handleClickMistery() {
        this.setState({
            whatIsTheGener : 'Mistery'
        })
    }
    render() {
        console.log('whatIstheGener', this.state.whatIsTheGener)
        return(
            <MenuPageHolderDiv>
                <Navbar genre={this.state.whatIsTheGener}/>
                <SearchInput/>
                <GenreLinksListDiv>
                    <MyLink to='/myListDrama'onClick={this.handleClickDrama}>
                        <Title text="Drama"/>
                    </MyLink>
                    <MyLink to='/myListComedy'onClick={this.handleClickComedy}>
                        <Title text="Comedy"/>
                    </MyLink>
                    <MyLink to='/myListMistery' onClick={this.handleClickMistery}>
                        <Title text="Mistery"/>
                    </MyLink>
                </GenreLinksListDiv>
            </MenuPageHolderDiv>
        )
    }
}
export default MenuPage