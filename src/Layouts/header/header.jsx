import React from 'react';
import styled from 'styled-components';


const StyledHeaderItems = styled.header`
  padding-top: 30px;
  width: 100%;
  height: 50px;
  background-color: ${ props => props.theme.lightGreenColor };
`;

const StyledList = styled.ul`
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
