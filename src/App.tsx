import React, { useEffect, useState } from 'react';
import './App.css';
import GlobalStyled from './globalStyled';
import {
  Column,
  MachineText,
  MoveImage,
  MoveImageBG,
  MoveItem,
  MovesContainer,
  PanelText,
  PointsPanel,
  Row,
  Wrapper,
} from './styles';
import { IMoves, MOVES } from './moves';

type Winner = 'user' | 'machine' | 'even' | '';

function App() {
  const [points, setPoints] = useState<number>(0);
  const [userSelection, setUserSelection] = useState<IMoves | null>(null);
  const [machineSelection, setMachine] = useState<IMoves | null>(null);
  const [winner, setWinner] = useState<Winner>('');

  function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const getMachineItem = (id: number) => {
    const machineItem = MOVES.filter((item) => item.id === id);

    return machineItem[0];
  };

  const numberFromnterval = randomIntFromInterval(1, 3);

  const handleUserSelection = (item: IMoves) => {
    setUserSelection(item);

    setTimeout(() => {
      setMachine(getMachineItem(numberFromnterval));
    }, 500);
  };

  const getWinner = () => {
    if (machineSelection?.id === userSelection?.id) {
      setWinner('even');
      return;
    }

    if (
      (userSelection?.id === 2 && machineSelection?.id === 3) ||
      (userSelection?.id === 3 && machineSelection?.id === 1) ||
      (userSelection?.id === 1 && machineSelection?.id === 2)
    ) {
      setWinner('user');
      return;
    }
    setWinner('machine');
  };

  useEffect(() => {
    getWinner();
  }, [machineSelection]);

  useEffect(() => {
    if (winner === 'user') {
      setPoints((state) => state + 1);
    }
  }, [winner]);

  const handleNewMatch = () => {
    setMachine(null);
    setUserSelection(null);
  };

  console.log(winner);

  return (
    <>
      <GlobalStyled />
      <Wrapper>
        <PointsPanel>
          <PanelText>Score</PanelText>
          <PanelText>{points}</PanelText>
        </PointsPanel>

        <MovesContainer>
          {!userSelection &&
            MOVES.map((item) => (
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

        {userSelection && (
          <>
            <Row>
              <MoveItem
                key={userSelection.id}
                $backgroundColor={userSelection.bgColor}
              >
                <MoveImageBG>
                  <MoveImage
                    src={userSelection.image}
                    alt={userSelection.name}
                  />
                </MoveImageBG>
              </MoveItem>

              <MoveItem $backgroundColor={machineSelection?.bgColor || 'red'}>
                <MoveImageBG>
                  {machineSelection?.image && (
                    <MoveImage
                      src={machineSelection.image}
                      alt={machineSelection?.name}
                    />
                  )}
                </MoveImageBG>
              </MoveItem>
            </Row>
            <Column>
              <MachineText>
                {!machineSelection
                  ? 'Machine is choosing...'
                  : `Machine selected ${machineSelection.name}`}
              </MachineText>

              {winner && (
                <>
                  <PanelText $color='white'>
                    {winner === 'user'
                      ? 'You win'
                      : winner === 'machine'
                      ? 'You lose'
                      : "It's a draw"}
                  </PanelText>
                </>
              )}
            </Column>
          </>
        )}
      </Wrapper>
    </>
  );
}

export default App;
