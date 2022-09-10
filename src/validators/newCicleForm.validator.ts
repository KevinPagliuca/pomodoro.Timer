import * as zod from 'zod';

export const newCicleFormValidator = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5, 'Mínimo de 5 minutos').max(60, 'Máximo de 60 minutos'),
});
