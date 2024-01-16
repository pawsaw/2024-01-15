import { ReactNode, useCallback, useContext, useState } from 'react';
import { Counter } from './Counter';
import React from 'react';

const CounterContext = React.createContext<Counter>({
  value: 0,
  inc: () => {},
  dec: () => {},
});

export const CounterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState(0);

  const inc = useCallback(() => {
    setValue((value) => value + 1);
  }, []);

  const dec = useCallback(() => {
    setValue((value) => value - 1);
  }, []);

  return (
    <CounterContext.Provider
      value={{
        value,
        inc,
        dec,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
