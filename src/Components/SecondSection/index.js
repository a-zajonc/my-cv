import { Box } from '@chakra-ui/react';
import { Education } from './Education';
import { Employment } from './Employment';
import { Hobbies } from './Hobbies';
import { hobbies } from '../../database';

export function SecondSection() {

    return <Box width="60%">
        <Employment />
        <Education />
        <Hobbies hobbies={hobbies} />
    </Box>
}
