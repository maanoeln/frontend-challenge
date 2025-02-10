import { PanelText, PointsPanel } from './styles';

interface IPanel {
  points: number;
}
function Panel({ points }: IPanel) {
  return (
    <PointsPanel>
      <PanelText>Score</PanelText>
      <PanelText>{points}</PanelText>
    </PointsPanel>
  );
}

export default Panel;
