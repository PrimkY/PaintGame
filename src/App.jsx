import React, { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/extensions,import/no-unresolved
import GlobalThemeWrapper from './HOC/GlobalThemeWrapper';
// eslint-disable-next-line import/extensions,import/no-unresolved
import RootRouter from './Routes/RootRouter';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/initStore';
import { PersistGate } from 'redux-persist/integration/react';
// eslint-disable-next-line import/no-unresolved
import { persistor } from './store/initStore';

const StyledMainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function App() {


  return (
    <React.Fragment>
      <Provider store={ store }>
        <PersistGate persistor={ persistor } loading={<div>Loading...</div>}>
          <BrowserRouter>
            <GlobalThemeWrapper>
              <RootRouter/>
            </GlobalThemeWrapper>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.Fragment>
  );
}
export default App;
