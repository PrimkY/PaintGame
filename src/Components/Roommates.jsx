import React from 'react';
import styled from 'styled-components';

const StyledRoommates = styled.div`
  width: 20%;
  
  .roommates {
    display: flex;
    flex-direction: column;
    border: 1px solid greenyellow;
    margin: 5px;
  }
`;

const Roommates = () => {
  return (
    <StyledRoommates>
      <p>Members `${1}`</p>
      <div className="roommates">
        <div className="lock">Oleg</div>
        <div className="lock">Sanya</div>
        <div className="lock">Gleb</div>
      </div>
    </StyledRoommates>
  );
};

export default Roommates;
