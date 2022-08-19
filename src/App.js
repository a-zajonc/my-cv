import { ChakraProvider, Box } from '@chakra-ui/react';
import { FirstSection } from './Components/FirstSection';
import { SecondSection } from './Components/SecondSection';
import { LanguageChange } from './Components/LanguageChange';

function App() {
  return (
    <ChakraProvider>
      <Box>
        <LanguageChange />
        <Box display="flex">
          <FirstSection />
          <SecondSection />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;