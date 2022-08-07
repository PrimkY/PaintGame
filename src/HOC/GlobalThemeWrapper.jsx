import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalThemeWrapper = (props) => {
  return (
    <React.Fragment>
      {/* eslint-disable-next-line max-len */}
      <ThemeProvider theme={{ lightGreenColor: 'aquamarine', baseBackgroundColor: 'skyblue', loginPageBackground: 'bisque' }}>
        {props.children}
      </ThemeProvider>
    </React.Fragment>
  );
};

export default GlobalThemeWrapper;
