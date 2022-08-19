import { Heading, Box, UnorderedList, ListItem } from '@chakra-ui/react';

export function Hobbies() {
    return <Box p="5">
        <Box bg="#FFE7D4" p="4">
            <Heading as="h1" fontFamily="Montserrat" color="#494E5F" textTransform="uppercase" >Zainteresowania</Heading>
        </Box>
        <UnorderedList fontFamily="Montserrat" color="#494E5F" pt="3" pl="3" fontSize="20px">
            <ListItem p="1">czytanie książek po polsku i po angielsku, głównie z gatunku literatury faktu, popularnonaukowych, podróżniczych, kryminały i poradniki</ListItem>
            <ListItem p="1">piłka nożna, w szczególności Manchester United</ListItem>
            <ListItem p="1">filmy i seriale</ListItem>
            <ListItem p="1">gry komputerowe, głównie takie z otwartym światem</ListItem>
        </UnorderedList>
    </Box>
}