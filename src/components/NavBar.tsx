import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 5rem;
    justify-content: space-between;
    align-items: center;
    background-color: mintcream;
`
const Logo = styled.span`
    font-family: Archivo,serif;
    font-size: 28px;
    line-height: 64px;
    font-weight: 700;
    color: #1F1F1FFF;
    margin-left: 20px;
`

const ContainerTitle = styled.div`
    height: 3rem;
    width: 40%;
    background-color: mintcream;
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const MenuItem= styled.span`
    font-family: Archivo,serif;
    font-size: 14px;
    line-height: 22px;
    font-weight: 700;
    color: #1F1F1FFF;
`

const pages = ['Generare Retete', 'Retete Favorite', 'Ingrediente', 'Toate Retetele'];

const NavBar = () => {
    return (
        <Container>
            <Logo>
                ChefSmart
            </Logo>
            <ContainerTitle>
                {
                    pages.map(page => (
                        <MenuItem>
                            {page}
                        </MenuItem>
                    ))
                }
            </ContainerTitle>
        </Container>
    );
};

export default NavBar;