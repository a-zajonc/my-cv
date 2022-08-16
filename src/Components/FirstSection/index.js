import { Box, Text } from '@chakra-ui/react';
import { PortfolioImage } from './PortfolioImage';

export function FirstSection() {
    return <Box p={20} bg="#494E5F" width="700px">
        <PortfolioImage />
        <Text color="white">About part</Text>
    </Box>
}
