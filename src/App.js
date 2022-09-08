import { ChakraProvider, Box } from '@chakra-ui/react';
import { FirstSection } from './Components/FirstSection';
import { SecondSection } from './Components/SecondSection';
import { LanguageChange } from './Components/LanguageChange';
import { Suspense } from 'react';
import "@fontsource/montserrat"

function App() {
  return (
    <Suspense fallback="...is loading">
      <ChakraProvider>
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