import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  background-color: mintcream;
`;
const Logo = styled.span`
  font-family: Archivo, serif;
  font-size: 28px;
  line-height: 64px;
  font-weight: 700;
  color: #1f1f1fff;
  margin-left: 20px;
`;

const ContainerTitle = styled.div`
  height: 3rem;
  width: 40%;
  background-color: mintcream;
  margin-right: -5rem;
  display: flex;
  align-items: center;
  gap: 4rem;
`;

const MenuItem = styled.a`
  font-family: Archivo, serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: #1f1f1fff;
  text-decoration: none;
`;

type PageType = {
  name: string;
  to: string;
};

const pages: PageType[] = [
  { name: 'Favourite Recipes', to: '/fav-recipes' },
  { name: 'All Ingredients', to: '/ingredients' },
  { name: 'All Recipes', to: '/all-recipes' },
];

const NavBar = () => {
  return (
    <Container>
      <Logo>ChefSmart</Logo>
      <ContainerTitle>
        {pages.map((page, index) => (
          <MenuItem href={page.to} key={index}>
            {page.name}
          </MenuItem>
        ))}
      </ContainerTitle>
    </Container>
  );
};

export default NavBar;
