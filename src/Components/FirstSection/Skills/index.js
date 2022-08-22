import { Box, UnorderedList, ListItem, Heading } from '@chakra-ui/react';
import { SectionHeader } from '../Styling';

export function Skils() {
    return <Box>
        <SectionHeader title="Umiejętności" />
        <UnorderedList pb="10" fontSize="15px" fontWeight="100">
            <ListItem fontFamily="Montserrat" color="white">język angielski - poziom B2</ListItem>
            <ListItem fontFamily="Montserrat" color="white">JavaScript - poziom podstawowy</ListItem>
            <ListItem fontFamily="Montserrat" color="white">HTML i CSS - poziom podstawowy</ListItem>
            <ListItem fontFamily="Montserrat" color="white">React - poziom podstawowy</ListItem>
            <ListItem fontFamily="Montserrat" color="white">Git - poziom podstawowy</ListItem>
            <ListItem fontFamily="Montserrat" color="white">prawo jazdy kat. B</ListItem>
        </UnorderedList>
    </Box>
}




