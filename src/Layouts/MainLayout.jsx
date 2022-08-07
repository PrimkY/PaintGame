import React from 'react';
// eslint-disable-next-line import/extensions,import/no-unresolved
import Header from './header/header';
// eslint-disable-next-line import/extensions,import/no-unresolved
import Footer from './footer/footer';
import styled from 'styled-components';

const StyledMainLayout = styled.div`
  background-color: ${props => props.theme.heavyYellowColor};
`;

const MainLayout = (props) => {
  return (
    <div>
      <Header/>
      <div className={'content'}>
        {props.children}
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
