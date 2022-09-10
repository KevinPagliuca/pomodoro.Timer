import { useForm, FormProvider } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { Play, HandPalm } from 'phosphor-react';

import { Countdown, NewCycleForm } from '../../contents/Home';
import { useCycles } from '../../contexts';
import { ICycle, NewCycleFormData } from '../../global/types';
import { newCicleFormValidator } from '../../validators';
import * as S from './Home.styles';

export const Home = () => {
  const { activeCycle, onCreateNewCycle, markCurrentCycleAsInterupted } = useCycles();

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCicleFormValidator),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  });
  const { watch, reset, handleSubmit } = newCycleForm;

  const handleCreateNewCicle = (data: NewCycleFormData) => {
    const newCycle: ICycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };
    onCreateNewCycle(newCycle);
    reset();
  };

  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <S.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCicle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
        {activeCycle ? (
          <S.StopCountdownButton type="button" onClick={markCurrentCycleAsInterupted}>
            <HandPalm size={24} />
            Interromper
          </S.StopCountdownButton>
        ) : (
          <S.StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </S.StartCountdownButton>
        )}
      </form>
    </S.HomeContainer>
  );
};
