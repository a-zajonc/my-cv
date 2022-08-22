import { Heading, Box } from '@chakra-ui/react';

export function NameHeader() {
    return <Box pt={15} pb={20}>
        <Heading fontFamily="Montserrat" color="#FFE7D4" textTransform="uppercase" fontSize="60px" ml={10}>
            Adriana Słabosz
        </Heading>
        <Box bg="#FFE7D4" width="100%" height="5px" />
    </Box>
}