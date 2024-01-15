export interface CounterProps {
  counterValue: number; // child -> parent
  onCounterValueChanged: (newValue: number) => void; // parent -> child
}

export const Counter: React.FC<CounterProps> = ({ counterValue, onCounterValueChanged }) => {
  const increment = () => {
    const newValue = counterValue + 1;
    onCounterValueChanged(newValue);
  };

  return <button onClick={increment}>{counterValue}</button>;
};
