import { createContext, useContext, useState } from 'react';

import { differenceInSeconds } from 'date-fns';

import { ICycle } from '../global/types';
import { useCycleReducer } from '../hooks';
import {
  addNewCycleAction,
  markCurrentCycleAsFinishedAction,
  markCurrentCycleAsInteruptedAction,
} from '../reducers';

interface ICyclesContextData {
  cycles: ICycle[];
  activeCycleId?: string;
  activeCycle?: ICycle;
  amountSecondsPassed: number;
  markCurrentCycleAsInterupted: () => void;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
  onCreateNewCycle: (cycle: ICycle) => void;
}

export const CyclesContext = createContext({} as ICyclesContextData);

interface ICyclesProviderProps {
  children: React.ReactNode;
}

export const CyclesProvider = ({ children }: ICyclesProviderProps) => {
  const {
    state: { cycles, activeCycleId },
    dispatch,
  } = useCycleReducer();
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      const secondsDifference = differenceInSeconds(new Date(), new Date(activeCycle.startDate));
      return secondsDifference;
    } else {
      return 0;
    }
  });

  const setSecondsPassed = (amountSeconds: number) => {
    setAmountSecondsPassed(amountSeconds);
  };

  const onCreateNewCycle = (newCycle: ICycle) => {
    dispatch(addNewCycleAction(newCycle));
    setAmountSecondsPassed(0);
  };

  const markCurrentCycleAsFinished = () => {
    dispatch(markCurrentCycleAsFinishedAction());
  };

  const markCurrentCycleAsInterupted = () => {
    dispatch(markCurrentCycleAsInteruptedAction());
  };

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycleId,
        activeCycle,
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        markCurrentCycleAsInterupted,
        setSecondsPassed,
        onCreateNewCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
};

export const useCycles = () => useContext(CyclesContext);
