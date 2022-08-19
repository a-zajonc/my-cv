import { Box, Heading, UnorderedList, ListItem, Text } from '@chakra-ui/react';
import { Header } from '../Styling';

export function Education() {

    function studiesDisplay(department, studies, years) {
        return <ListItem>
            <Text fontSize="14px" fontFamily="Montserrat" color="#494E5F" fontWeight="300" >
                {department}
            </Text>
            <Box display="flex" justifyContent="space-between">
                <Heading fontSize="22px" fontFamily="Montserrat" color="#494E5F" pt="3">
                    {studies}
                </Heading>
                <Text fontFamily="Montserrat" color="#494E5F" fontSize="22px" pt="3">
                    {years}
                </Text>
            </Box>
        </ListItem>
    }

    return <Box p="5">
        <Header title={"Wykształcenie"} />
        <Heading fontSize="24px" fontFamily="Montserrat" color="#494E5F" pt="3" pb="3">
            Uniwersytet Szczeciński
        </Heading>
        <UnorderedList pl="3">
            {studiesDisplay(("Wydział Nauk Ekonomicznych i Zarządzania"), ("Magister Public Management"), ("2016-2018"))}
            {studiesDisplay(("Wydział Filologiczny"), ("Licencjat Filologii angielskiej"), ("2013-2016"))}
        </UnorderedList>
    </Box>
}