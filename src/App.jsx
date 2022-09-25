import React, { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/extensions,import/no-unresolved
import GlobalThemeWrapper from './HOC/GlobalThemeWrapper';
// eslint-disable-next-line import/extensions,import/no-unresolved
import RootRouter from './Routes/RootRouter';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './store/initStore';
import { PersistGate } from 'redux-persist/integration/react';

const StyledMainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function App() {


  return (
    <React.Fragment>
      <BrowserRouter>
        <Provider store={ store }>
          <PersistGate loading={null} persistor={persistor}>
            <GlobalThemeWrapper>
              <RootRouter/>
            </GlobalThemeWrapper>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </React.Fragment>
  );
}
export default App;
