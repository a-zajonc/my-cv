import { Box, Heading, UnorderedList, ListItem, Text } from '@chakra-ui/react';
import { Header } from '../Styling';

export function Education({ studies, title }) {

    function studiesDisplay(department, studiesName, years) {

        return <ListItem>
            <Text fontSize="14px" fontFamily="Montserrat" color="#494E5F" fontWeight="300" >
                {department}
            </Text>
            <Box display="flex" justifyContent="space-between">
                <Heading fontSize="22px" fontFamily="Montserrat" color="#494E5F" pt="3">
                    {studiesName}
                </Heading>
                <Text fontFamily="Montserrat" color="#494E5F" fontSize="22px" pt="3">
                    {years}
                </Text>
            </Box>
        </ListItem>

    }

    return <Box p="5">
        <Header title={title} />
        <Heading fontSize="24px" fontFamily="Montserrat" color="#494E5F" pt="3" pb="3">
            Uniwersytet Szczeciński
        </Heading>
        <UnorderedList pl="3">
            {studies.map((study) => {
                return studiesDisplay((study.department), (study.studiesName), (study.years))
            }
            )
            }
        </UnorderedList>
    </Box>
}