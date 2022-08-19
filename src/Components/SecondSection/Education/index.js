import { Box, Heading, UnorderedList, ListItem, Text } from '@chakra-ui/react';

export function Education() {
    return <Box p="5">
        <Box bg="#FFE7D4" p="4">
            <Heading as="h1" fontFamily="Montserrat" color="#494E5F" textTransform="uppercase" >Wykształcenie</Heading>
        </Box>
        <Heading fontSize="24px" fontFamily="Montserrat" color="#494E5F" pt="3" pb="3">
            Uniwersytet Szczeciński
        </Heading>
        <UnorderedList pl="3">
            <ListItem>
                <Text fontSize="14px" fontFamily="Montserrat" color="#494E5F" fontWeight="300" >
                    Wydział Nauk Ekonomicznych i Zarządzania
                </Text>
                <Box display="flex" justifyContent="space-between">
                    <Heading fontSize="22px" fontFamily="Montserrat" color="#494E5F" pt="3">
                        Magister Public Management
                    </Heading>
                    <Text fontFamily="Montserrat" color="#494E5F" fontSize="22px" pt="3">
                        2016-2018
                    </Text>
                </Box>
            </ListItem>
            <ListItem>
                <Text fontSize="14px" fontFamily="Montserrat" color="#494E5F" fontWeight="300" >
                    Wydział Filologiczny
                </Text>
                <Box display="flex" justifyContent="space-between">
                    <Heading fontSize="22px" fontFamily="Montserrat" color="#494E5F" pt="3">
                        Licencjat Filologii angielskiej
                    </Heading>
                    <Text fontFamily="Montserrat" color="#494E5F" fontSize="22px" pt="3">
                        2013-2016
                    </Text>
                </Box>
            </ListItem>
        </UnorderedList>
    </Box>
}