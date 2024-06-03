import React from 'react';
import styled, { keyframes } from 'styled-components';
import realLogo from '../images/real.png'; 

const marqueeAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #1a1a1a;
  color: white;
  padding: 6px 0; /* Añade algo de padding para más espacio alrededor del texto */
  margin-bottom:0px;
`;

const MarqueeText = styled.div`
  display: inline-block;
  white-space: nowrap;
  padding-left: 100%;
  animation: ${marqueeAnimation} 45s linear infinite; /* Ajusta el tiempo según tus necesidades */
  font-size: 15px; /* Aumenta el tamaño de la fuente */
  animation-delay: -20s; /* Retrasa el inicio de la animación */
`;

const Logo = styled.img`
  width: 13px; /* Ajusta el tamaño de la imagen según tus necesidades */
  height: auto;
`;

const Marquee = () => {
  return (
    <MarqueeContainer>
        <MarqueeText>
{/*             <Logo src={realLogo} alt="Real Madrid Logo" />
 */}            $VAR will be burned during every event of the Euro Cup and Copa America. Be part of this historic journey as we revolutionize football with crypto!        </MarqueeText>
    </MarqueeContainer>
  );
};

export default Marquee;
