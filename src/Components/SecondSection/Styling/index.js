import { Box, Heading } from '@chakra-ui/react';

export function Header({ title }) {
    return <Box bg="brand.firstSectionHeading" p="4">
        <Heading as="h1" color="brand.secondSection" textTransform="uppercase" >{title}</Heading>
    </Box>
}