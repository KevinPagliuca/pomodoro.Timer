import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export const formatDate = (date: Date) => {
  return format(new Date(date), 'dd/MM/yyyy', {
    locale: ptBR,
  });
};

export const formatDateDistance = (date: Date) => {
  return formatDistanceToNow(new Date(date), {
    locale: ptBR,
    addSuffix: true,
  });
};
