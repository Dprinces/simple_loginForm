import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginForm from './components/LoginForm';
import { Container, FormControlLabel, Switch } from '@mui/material';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#000' : '#fff',
      },
      text: {
        primary: darkMode ? '#fff' : '#000',
      },
    },
  });

  const handleThemeChange = (event) => {
    setDarkMode(event.target.checked);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={handleThemeChange}
              color="primary"
            />
          }
          label={darkMode ? "Light Mode" : "Dark Mode"}
        />
        <LoginForm darkMode={darkMode} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
