import { useCounter } from '../domain/counter/CounterContext';

export interface CounterProps {}

export const Counter: React.FC<CounterProps> = () => {
  const { value, inc } = useCounter();

  return (
    <button onClick={inc}>
      <span>{value}</span>
    </button>
  );
};
