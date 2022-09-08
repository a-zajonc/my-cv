import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react';
import { FirstSection } from './Components/FirstSection';
import { SecondSection } from './Components/SecondSection';
import { LanguageChange } from './Components/LanguageChange';
import { Suspense } from 'react';
import "@fontsource/montserrat"
import { theme } from '.'

function App() {
  return (
    <Suspense fallback="...is loading">
      <ChakraProvider theme={theme}>
        <Box>
          <LanguageChange />
          <Box display="flex">
            <FirstSection />
            <SecondSection />
          </Box>
        </Box>
      </ChakraProvider>
    </Suspense>
  );
}

export default App;