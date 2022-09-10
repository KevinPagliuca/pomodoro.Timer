import styled from 'styled-components';

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

const baseCountdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 100%;
  padding: 1rem;
  border: 0;
  border-radius: 8px;

  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StopCountdownButton = styled(baseCountdownButton)`
  background: ${({ theme }) => theme.colors['red-500']};
  color: ${({ theme }) => theme.colors['gray-100']};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors['red-700']};
  }
`;

export const StartCountdownButton = styled(baseCountdownButton)`
  background: ${({ theme }) => theme.colors['green-500']};
  color: ${({ theme }) => theme.colors['gray-100']};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors['green-700']};
  }
`;
