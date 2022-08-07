import React from 'react';
import styled from 'styled-components';

const StyledFooterItems = styled.footer`
  position: absolute;
  width: 100%;
  height: 100px;
  background-color: aquamarine;
  bottom: 0;
`;

const Footer = () => {
  return (
    <StyledFooterItems>
      <footer>
        directed by NWME
      </footer>
    </StyledFooterItems>
  );
};

export default Footer;
