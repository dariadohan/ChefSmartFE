import Image from '../assets/ctaImage.png'
import styled from 'styled-components';
import React from 'react';

const ContainerC = styled.div`
    position: absolute;
    top: 350px;
    left: 100px;
    width: 100rem;
    height: 40%;
    border-radius: 0;
`

const ctaComponent = () => {
    return (
        <ContainerC>
            <img src={Image} alt="My Image" style={{ maxWidth: '80rem' }} />
        </ContainerC>
    );
};

export default ctaComponent;