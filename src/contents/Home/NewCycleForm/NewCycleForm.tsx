import { useFormContext } from 'react-hook-form';

import { useCycles } from '../../../contexts';
import * as S from './NewCycleForm.styles';

export const NewCycleForm = () => {
  const { activeCycle } = useCycles();

  const { register } = useFormContext();

  return (
    <S.FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <S.TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 4" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <S.MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        {...register('minutesAmount', {
          valueAsNumber: true,
        })}
      />
      <span>minutos.</span>
    </S.FormContainer>
  );
};
