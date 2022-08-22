import { Text, Box } from '@chakra-ui/react';
import { about } from '../../../database';
import { SectionHeader } from '../Styling';

export function About() {
    return <Box>
        <SectionHeader title="O mnie" />
        <Text fontFamily="Montserrat" color="white" fontSize="15px" fontWeight="100" pb="10" >
            {about}
        </Text>
    </Box>
}
