import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalThemeWrapper = (props) => {
  return (
    <React.Fragment>
      {/* eslint-disable-next-line max-len */}
      <ThemeProvider theme={{ lightGreenColor: 'goldenrod', baseBackgroundColor: 'skyblue', loginPageBackground: 'bisque', otherPagesBackground: '#696969' }}>
        {props.children}
      </ThemeProvider>
    </React.Fragment>
  );
};

export default GlobalThemeWrapper;
