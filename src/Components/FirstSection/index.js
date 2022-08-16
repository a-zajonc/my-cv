import { Box, Text } from '@chakra-ui/react';
import { PortfolioImage } from './Image';
import "@fontsource/montserrat"
import { NameHeader } from './NameHeader';
import { About } from './About';
import { Skils } from './Skills';

export function FirstSection() {
    return <Box p={20} bg="#494E5F" width="700px">
        <PortfolioImage />
        <NameHeader />
        <About pb={100} />
        <Skils />
        <Text fontFamily="Montserrat" color="white">About part</Text>
    </Box>
}