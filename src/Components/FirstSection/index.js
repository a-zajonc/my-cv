import { Box, Text } from '@chakra-ui/react';
import { PortfolioImage } from './PortfolioImage';
import "@fontsource/montserrat"

export function FirstSection() {
    return <Box p={20} bg="#494E5F" width="700px">
        <PortfolioImage />
        <Text fontFamily="Montserrat" color="white">About part</Text>
    </Box>
}
