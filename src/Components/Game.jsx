import React from 'react';
import styled from 'styled-components';

const StyledGame = styled.div`
  margin: 1%;
  border: 2px solid black;
  width: 100%;
  height: 100%;
  min-height: 600px;
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
