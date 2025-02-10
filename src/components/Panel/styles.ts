import styled from 'styled-components';

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
  color: #34495e;
  font-weight: 700;
  text-transform: uppercase;
`;
