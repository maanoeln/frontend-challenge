import styled from 'styled-components';

export const MovesContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const MoveItem = styled.div<{ $backgroundColor: string }>`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: ${({ $backgroundColor }) => $backgroundColor || 'white'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MoveImageBG = styled.div`
  background-color: white;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MoveImage = styled.img`
  background-color: white;
  width: 60px;
  height: 60px;
`;
