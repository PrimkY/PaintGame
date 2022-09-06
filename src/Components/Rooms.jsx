import React from 'react';
import styled from 'styled-components';

const StyledRoomElem = styled.div`
  width: 35%;
  
  .room_name {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid greenyellow;
    margin: 5px;
  }
`;

const Rooms = (props) => {
  return (
    <StyledRoomElem>
      <div className='rooms'>
        <strong>
          Room list
        </strong>
        <div className='room_name'>
          <strong>RoomName</strong>
          <div>
            room label and online
          </div>
          <div className='enter'>
            Enter the room
          </div>
        </div>
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
