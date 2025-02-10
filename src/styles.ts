import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #2c3f50;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 110px;
`;

export const PointsPanel = styled.div`
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PanelText = styled.span<{ $color?: string }>`
  font-size: 36px;
  color: ${({ $color }) => $color || '#34495e'};
  font-weight: 700;
  text-transform: uppercase;
`;

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

export const MachineText = styled.span`
  font-size: 26px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`;

export const Row = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export const Column = styled(Row)`
  flex-direction: column;
  align-items: center;
  color: white;
`;
