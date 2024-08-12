import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import SharedLayout from "./layouts/SharedLayout";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <SharedLayout/>
      </ThemeProvider>
    </div>
  );
}

export default App;
