import React from 'react';
import styled from 'styled-components';


const StyledHeaderItems = styled.header`
  padding-top: 30px;
  width: 100%;
  height: 50px;
  background-color: aquamarine;
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Header = () => {
  return (
    <StyledHeaderItems>
      <header>
        <StyledList>
        <div className={'logo'}>logo</div>
          <div>Score Board</div>
        <div className={'login'}>
          <ul>
            <li>Log in/Log out</li>

          </ul>
        </div>
        </StyledList>
      </header>
    </StyledHeaderItems>
  );
};

export default Header;
