import React, { useState } from 'react';
// eslint-disable-next-line import/extensions,import/no-unresolved
import MainLayout from './Layouts/MainLayout';
// eslint-disable-next-line import/no-unresolved,import/extensions
import Rooms from './Components/Rooms';
// eslint-disable-next-line import/extensions,import/no-unresolved
import Game from './Components/Game';

import styled from 'styled-components';

const StyledMainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function App() {


  return (
    <div>
      <MainLayout/>
      <StyledMainContent>
        <Rooms/>
        <Game/>
      </StyledMainContent>
    </div>
  );
}
export default App;
