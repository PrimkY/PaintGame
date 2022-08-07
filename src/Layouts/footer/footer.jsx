import React from 'react';
import styled from 'styled-components';

const StyledFooterItems = styled.footer`
  position: absolute;
  width: 100%;
  height: 100px;
  background-color: ${ props => props.theme.lightGreenColor };
  bottom: 0;
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
