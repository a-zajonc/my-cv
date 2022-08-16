import { Box, Text } from '@chakra-ui/react';
import { PortfolioImage } from './Image';
import "@fontsource/montserrat"
import { NameHeader } from './NameHeader';

export function FirstSection() {
    return <Box p={20} bg="#494E5F" width="700px">
        <PortfolioImage />
        <NameHeader />
        <Text fontFamily="Montserrat" color="white">About part</Text>
    </Box>
}