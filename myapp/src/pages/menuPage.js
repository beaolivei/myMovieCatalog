import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar'
import Title from '../components/title'

const MenuPageHolderDiv = styled.div `
    background-color: #FCF902;
    height: 800px;
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
     render() {
        return(
            <MenuPageHolderDiv>
                <Navbar/>
                <GenreLinksListDiv>
                    <MyLink to='/'>
                        <Title text="Popular"/>
                    </MyLink>
                    <MyLink to='/myListAction'>
                        <Title text="Action"/>
                    </MyLink>
                    <MyLink to='/myListAdventure'>
                        <Title text="Adventure"/>
                    </MyLink>
                    <MyLink to='/myListAnimation'>
                        <Title text="Animation"/>
                    </MyLink>
                    <MyLink to='/myListComedy'>
                        <Title text="Comedy"/>
                    </MyLink>
                    <MyLink to='/myListDocumentary'>
                        <Title text="Documentary"/>
                    </MyLink>
                    <MyLink to='/myListDrama'>
                        <Title text="Drama"/>
                    </MyLink>
                </GenreLinksListDiv>
            </MenuPageHolderDiv>
        )
    }
}
export default MenuPage