import { useReducer } from 'react';

import { STORAGE_CYCLES_KEY } from '../constants';
import { ICycle } from '../global/types';
import { cycleInitialState, cycleReducer } from '../reducers/cycles';
import { getLocalStorageItem, useLocalStorage } from './useLocalStorage';

export const useCycleReducer = () => {
  const storedCycles = getLocalStorageItem<typeof cycleInitialState>(STORAGE_CYCLES_KEY);

  const getFormatedCycles = (): ICycle[] => {
    let formatedCycles: ICycle[] = [];
    if (storedCycles && storedCycles.cycles.length) {
      formatedCycles = storedCycles.cycles.map((cycle) => {
        return {
          ...cycle,
          startDate: new Date(cycle.startDate),
          finishedDate: cycle.finishedDate ? new Date(cycle.finishedDate) : undefined,
          interruptedDate: cycle.interruptedDate ? new Date(cycle.interruptedDate) : undefined,
        };
      });
    }

    return formatedCycles;
  };

  const [state, dispatch] = useReducer(cycleReducer, cycleInitialState, () => {
    if (storedCycles)
      return {
        cycles: getFormatedCycles(),
        activeCycleId: storedCycles.activeCycleId,
      } as typeof cycleInitialState;
    return cycleInitialState;
  });

  useLocalStorage<typeof cycleInitialState>(STORAGE_CYCLES_KEY, cycleInitialState, state);

  return {
    state,
    dispatch,
  };
};
