import * as zod from 'zod';

import { newCicleFormValidator } from '../../validators';

export interface ICycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

export type NewCycleFormData = zod.infer<typeof newCicleFormValidator>;
