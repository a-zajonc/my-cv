import { Box, Text } from '@chakra-ui/react';
import { PortfolioImage } from './Image';
import "@fontsource/montserrat"
import { NameHeader } from './NameHeader';
import { About } from './About';

export function FirstSection() {
    return <Box p={20} bg="#494E5F" width="700px">
        <PortfolioImage />
        <NameHeader />
        <About />
        <Text fontFamily="Montserrat" color="white">About part</Text>
    </Box>
}