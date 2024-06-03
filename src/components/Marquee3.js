import React from 'react';
import styled, { keyframes } from 'styled-components';

const marqueeAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #1a1a1a;
  color: #a9b3c1;
  padding: 13px 0; /* Add some padding for more space around the text */
  margin-bottom: 0px;
  padding-bottom:25px;
  padding-top:30px;
`;

const MarqueeText = styled.div`
  white-space: nowrap;
  font-size: 100px; /* Adjust the font size */
  font-weight: bold; /* Make the text bold */
  animation: ${marqueeAnimation} 40s linear infinite; /* Adjust the timing according to your needs */
  animation-delay: -10s; /* Delay the start of the animation */
`;

const Marquee3 = () => {
  return (
    <MarqueeContainer>
      <MarqueeText>
        BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR | BURN $VAR |
      </MarqueeText>
    </MarqueeContainer>
  );
};

export default Marquee3;
