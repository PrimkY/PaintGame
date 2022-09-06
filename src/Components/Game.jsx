import React from 'react';
import styled from 'styled-components';

const StyledGame = styled.div`
  width: 70vw;
  right: 0;
  height: 85vh;
`;

const Game = () => {
  return (
    <StyledGame>
      <div>
        game board
      </div>
    </StyledGame>
  );
};

export default Game;
