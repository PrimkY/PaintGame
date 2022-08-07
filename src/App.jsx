import React, { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/extensions,import/no-unresolved
import GlobalThemeWrapper from './HOC/GlobalThemeWrapper';
// eslint-disable-next-line import/extensions,import/no-unresolved
import RootRouter from './Routes/RootRouter';
import { BrowserRouter } from 'react-router-dom';

const StyledMainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function App() {


  return (
    <BrowserRouter>
      <GlobalThemeWrapper>
        <RootRouter/>
      </GlobalThemeWrapper>
    </BrowserRouter>
  );
}
export default App;
