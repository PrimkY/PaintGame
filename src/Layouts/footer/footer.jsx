import React from 'react';
import styled from 'styled-components';

const StyledFooterItems = styled.footer`
  width: 100%;
  height: 5vh;
  background-color: ${ props => props.theme.lightGreenColor };
`;

const Footer = (props) => {
  return (
    <StyledFooterItems>
      <footer>
        directed by NWME
      </footer>
    </StyledFooterItems>
  );
};

export default Footer;
