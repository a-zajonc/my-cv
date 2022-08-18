import { ChakraProvider, Box, HStack, Center } from '@chakra-ui/react';
import { FirstSection } from './Components/FirstSection';
import { SecondSection } from './Components/SecondSection';
import { LanguageChange } from './Components/LanguageChange';

function App() {
  return (
    <ChakraProvider>
      <Box m={2} p={10}>
        <LanguageChange />
        <Center>
          <HStack>
            <FirstSection />
            <SecondSection />
          </HStack>
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default App;