import { Box } from '@chakra-ui/react';
import { Education } from './Education';
import { Employment } from './Employment';

export function SecondSection() {
    return <Box width="60%">
        <Employment />
        <Education />
    </Box>
}
