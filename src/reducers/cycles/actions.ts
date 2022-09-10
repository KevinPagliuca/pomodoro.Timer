import { ICycle } from '../../global/types';
import { ICycleState } from './reducers';

export const CYCLE_ACTIONS_TYPES = {
  ADD_NEW_CYCLE: 'ADD_NEW_CYCLE',
  INTERUPT_CURRENT_CYCLE: 'INTERUPT_CURRENT_CYCLE',
  FINISH_CURRENT_CYCLE: 'FINISH_CURRENT_CYCLE',
  UPDATE_CYCLE_STATE: 'UPDATE_CYCLE_STATE',
  SET_ACTIVE_CYCLE: 'SET_ACTIVE_CYCLE',
} as const;

export const addNewCycleAction = (cycle: ICycle) => {
  return { type: CYCLE_ACTIONS_TYPES.ADD_NEW_CYCLE, payload: cycle };
};

export const markCurrentCycleAsInteruptedAction = () => {
  return { type: CYCLE_ACTIONS_TYPES.INTERUPT_CURRENT_CYCLE };
};

export const markCurrentCycleAsFinishedAction = () => {
  return { type: CYCLE_ACTIONS_TYPES.FINISH_CURRENT_CYCLE };
};

export const updateCycleStateAction = (cycles: ICycleState) => {
  return { type: CYCLE_ACTIONS_TYPES.UPDATE_CYCLE_STATE, payload: cycles };
};

export const setActiveCycleAction = (activeCycleId: string) => {
  return { type: CYCLE_ACTIONS_TYPES.SET_ACTIVE_CYCLE, payload: activeCycleId };
};
