import './App.css';
import { Box, HStack } from '@chakra-ui/react';
import { FirstSection } from './Components/FirstSection';
import { SecondSection } from './Components/SecondSection';

function App() {
  return (
    <Box m={2} p={10}>
      <HStack>
        <FirstSection />
        <SecondSection />
      </HStack>
    </Box>
  );
}

export default App;