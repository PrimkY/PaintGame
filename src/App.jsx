import React, { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/extensions,import/no-unresolved
import GlobalThemeWrapper from './HOC/GlobalThemeWrapper';
// eslint-disable-next-line import/extensions,import/no-unresolved
import RootRouter from './Routes/RootRouter';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/initStore';

const StyledMainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function App() {


  return (
    <BrowserRouter>
      <Provider store={ store }>
        <GlobalThemeWrapper>
          <RootRouter/>
        </GlobalThemeWrapper>
      </Provider>
    </BrowserRouter>
  );
}
export default App;
