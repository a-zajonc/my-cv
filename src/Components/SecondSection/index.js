import { Box } from '@chakra-ui/react';
import { Education } from './Education';
import { Employment } from './Employment';
import { Hobbies } from './Hobbies';

export function SecondSection() {

    return <Box width="60%">
        <Employment title={"Wykształcenie"} />
        <Education />
        <Hobbies />
    </Box>
}
