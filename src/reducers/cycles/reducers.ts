import { produce } from 'immer';

import { ICycle } from '../../global/types';
import { IAction } from '../../global/types/reducer.type';
import { CYCLE_ACTIONS_TYPES } from './actions';

export interface ICycleState {
  cycles: ICycle[];
  activeCycleId?: string;
}

export const cycleInitialState: ICycleState = {
  cycles: [],
};

export const cycleReducer = (state: ICycleState, action: IAction): ICycleState => {
  switch (action.type) {
    case CYCLE_ACTIONS_TYPES.ADD_NEW_CYCLE: {
      return produce(state, (draft) => {
        draft.cycles.push(action.payload);
        draft.activeCycleId = action.payload.id;
      });
    }
    case CYCLE_ACTIONS_TYPES.INTERUPT_CURRENT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => cycle.id === state.activeCycleId);

      if (currentCycleIndex < 0) return state;

      return produce(state, (draft) => {
        draft.activeCycleId = undefined;
        draft.cycles[currentCycleIndex].interruptedDate = new Date();
      });
    }
    case CYCLE_ACTIONS_TYPES.FINISH_CURRENT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => cycle.id === state.activeCycleId);

      return produce(state, (draft) => {
        draft.activeCycleId = undefined;
        draft.cycles[currentCycleIndex].finishedDate = new Date();
      });
    }
    case CYCLE_ACTIONS_TYPES.UPDATE_CYCLE_STATE: {
      return produce(state, (draft) => {
        draft.activeCycleId = action.payload.activeCycleId;
        draft.cycles = action.payload.cycles;
      });
    }
    case CYCLE_ACTIONS_TYPES.SET_ACTIVE_CYCLE: {
      return produce(state, (draft) => {
        draft.activeCycleId = action.payload;
      });
    }
    default:
      return state;
  }
};
