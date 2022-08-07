import React from 'react';
import styled from 'styled-components';

const StyledRoomElem = styled.div`
  border: 2px solid greenyellow;
  width: 35%;
  
  .room_name {
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Rooms = (props) => {
  return (
    <StyledRoomElem>
      <div className='rooms'>
        <div className='room_name'>
          <strong>RoomName</strong>
          <div>
            room label and online
          </div>
          <div className='enter'>
            Enter the room
          </div>
        </div>
      </div>
    </StyledRoomElem>
  );
};

export default Rooms;
