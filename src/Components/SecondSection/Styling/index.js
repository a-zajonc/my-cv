import { Box, Heading } from '@chakra-ui/react';

export function Header({ title }) {
    return <Box bg="#FFE7D4" p="4">
        <Heading as="h1" color="#494E5F" textTransform="uppercase" >{title}</Heading>
    </Box>
}