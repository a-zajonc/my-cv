import { Box, UnorderedList, ListItem, Heading } from '@chakra-ui/react';

export function Skils() {
    return <Box>
        <Heading fontFamily="Montserrat" color="#FFE7D4" textTransform="uppercase">Umiejętności</Heading>
        <UnorderedList pb={20}>
            <ListItem fontFamily="Montserrat" color="white">język angielski - poziom B2</ListItem>
            <ListItem fontFamily="Montserrat" color="white">JavaScript - poziom podstawowy</ListItem>
            <ListItem fontFamily="Montserrat" color="white">HTML i CSS - poziom podstawowy</ListItem>
            <ListItem fontFamily="Montserrat" color="white">React - poziom podstawowy</ListItem>
            <ListItem fontFamily="Montserrat" color="white">Git - poziom podstawowy</ListItem>
            <ListItem fontFamily="Montserrat" color="white">prawo jazdy kat. B</ListItem>
        </UnorderedList>
    </Box>
}




