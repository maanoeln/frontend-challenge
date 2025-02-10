import { IMoves, MOVES } from '../../moves';
import { MoveImage, MoveImageBG, MoveItem, MovesContainer } from './styles';

interface IMove {
  handleUserSelection(item: IMoves): void;
}
function Moves({ handleUserSelection }: IMove) {
  return (
    <MovesContainer>
      {MOVES.map((item) => (
        <MoveItem
          key={item.id}
          $backgroundColor={item.bgColor}
          onClick={() => handleUserSelection(item)}
        >
          <MoveImageBG>
            <MoveImage src={item.image} alt={item.name} />
          </MoveImageBG>
        </MoveItem>
      ))}
    </MovesContainer>
  );
}

export default Moves;
