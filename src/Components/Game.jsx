import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/extensions,import/no-unresolved
import Tiktaktoe from './Games/Tik-tak-toe/tiktaktoe';

const StyledGame = styled.div`
  width: 100%;
  right: 0;
  height: 85vh;
`;

const Game = () => {
  return (
    <StyledGame>
     <Tiktaktoe/>
    </StyledGame>
  );
};

export default Game;
