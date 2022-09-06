import { Box, UnorderedList, ListItem } from '@chakra-ui/react';
import { Header } from '../Styling';

export function Hobbies({ hobbies }) {

    return <Box p="5">
        <Header title={"Zainteresowania"} />
        <UnorderedList fontFamily="Montserrat" color="#494E5F" pt="3" pl="3" fontSize="18px">
            {hobbies.map((hobby) => {
                return <ListItem p="1">{hobby}</ListItem>
            })}
        </UnorderedList>
    </Box>
}