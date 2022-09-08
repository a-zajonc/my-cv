import { Heading, Box } from '@chakra-ui/react';

export function NameHeader() {
    return <Box pt={15} pb={20}>
        <Heading color="brand.firstSectionHeading" textTransform="uppercase" fontSize="60px" ml={10}>
            Adriana Słabosz
        </Heading>
        <Box bg="brand.firstSectionHeading" width="100%" height="5px" />
    </Box>
}