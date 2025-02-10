import Rock from './assets/rock.png';
import Paper from './assets/paper.png';
import Scissor from './assets/scissor.png';

export type Name = 'rock' | 'paper' | 'scissor' | '';

export interface IMoves {
  id: number;
  name: Name;
  bgColor: string;
  image: string;
}

export const MOVES: IMoves[] = [
  {
    id: 1,
    name: 'paper',
    bgColor: '#F1C40F',
    image: Paper,
  },
  {
    id: 2,
    name: 'rock',
    bgColor: '#27AE60',
    image: Rock,
  },
  {
    id: 3,
    name: 'scissor',
    bgColor: '#2980B9',
    image: Scissor,
  },
];
