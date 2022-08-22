import { Box, Center } from '@chakra-ui/react';
import { PortfolioImage } from './Image';
import "@fontsource/montserrat"
import { NameHeader } from './NameHeader';
import { About } from './About';
import { Skills } from './Skills';
import { Contact } from './Contact';

export function FirstSection() {
    return <Box p={20} bg="#494E5F" width="35%" ml="10" mb="10">
        <Center>
            <PortfolioImage />
        </Center>
        <NameHeader />
        <About />
        <Skills />
        <Contact />
    </Box>
}