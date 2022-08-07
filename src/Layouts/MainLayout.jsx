import React from 'react';
// eslint-disable-next-line import/extensions,import/no-unresolved
import Header from './header/header';
// eslint-disable-next-line import/extensions,import/no-unresolved
import Footer from './footer/footer';
import styled from 'styled-components';

const StyledMainLayout = styled.div`
  background-color: ${props => props.theme.baseBackgroundColor};
`;

const MainLayout = (props) => {
  return (
    <StyledMainLayout>
      <Header/>
      <div className={'content'}>
        {props.children}
      </div>
      <Footer/>
    </StyledMainLayout>
  );
};

export default MainLayout;
