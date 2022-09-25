import React from 'react';
import styled from 'styled-components';

const StyledMainLayout = styled.div`
  
`;


const MainLayout = (props) => {
  return (
    <StyledMainLayout>
        {props.children}
    </StyledMainLayout>
  );
};

export default MainLayout;
