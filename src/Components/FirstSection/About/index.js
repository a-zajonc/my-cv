import { Text, Box } from '@chakra-ui/react';
import { SectionHeader } from '../Styling';

export function About({ title, about }) {

    return <Box>
        <SectionHeader title={title} />
        <Text color="white" fontSize="15px" fontWeight="100" pb="10" >
            {about}
        </Text>
    </Box>
}
