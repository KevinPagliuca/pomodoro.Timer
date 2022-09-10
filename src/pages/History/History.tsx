import { useCycles } from '../../contexts';
import { ICycle } from '../../global/types';
import { formatDateDistance } from '../../utils';
import * as S from './History.styles';

export const History = () => {
  const { cycles } = useCycles();

  const getCycleStatus = (cycle: ICycle) => {
    if (cycle?.interruptedDate) return <S.Status statusColor="red">Interrompido</S.Status>;

    if (cycle?.finishedDate) return <S.Status statusColor="green">Finalizado</S.Status>;

    return <S.Status statusColor="yellow">Em andamento</S.Status>;
  };

  return (
    <S.HistoryContainer>
      <h1>Meu histórico</h1>

      <S.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>{formatDateDistance(cycle.startDate)}</td>
                <td>{getCycleStatus(cycle)}</td>
              </tr>
            ))}
            {cycles.length === 0 && (
              <tr>
                <td colSpan={4}>Nenhum ciclo iniciado até o momento.</td>
              </tr>
            )}
          </tbody>
        </table>
      </S.HistoryList>
    </S.HistoryContainer>
  );
};
