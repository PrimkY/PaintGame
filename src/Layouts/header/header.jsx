import React from 'react';
import styled from 'styled-components';


const StyledHeaderItems = styled.header`
  width: 100%;
  height: 10vh;
  background-color: ${ props => props.theme.lightGreenColor };
`;

const StyledList = styled.ul`
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Header = (props) => {
  return (
    <StyledHeaderItems>
      <header>
        <StyledList>
        <div className={'logo'}>logo</div>
          <div>Score Board</div>
        <div className={'login'}>
          <ul>
            <li>Sign in/Sign up</li>

          </ul>
        </div>
        </StyledList>
      </header>
    </StyledHeaderItems>
  );
};

export default Header;
