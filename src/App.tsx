import { ThemeProvider } from 'styled-components';

import { CyclesProvider } from './contexts';
import { Router } from './pages';
import { GlobalStyle } from './styles';
import { defaultTheme } from './styles/themes';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CyclesProvider>
        <Router />
      </CyclesProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

