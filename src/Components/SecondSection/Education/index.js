import { Box, Heading, UnorderedList, ListItem, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Center } from '@chakra-ui/react';
import { Header } from '../Styling';

export function Education({ studies, title }) {

    function studiesDisplay(department, studiesName, years, additional) {

        return <ListItem >
            <Text fontSize="14px" fontFamily="Montserrat" color="#494E5F" fontWeight="300" >
                {department}
            </Text>
            <Accordion allowMultiple >
                <AccordionItem border="none">
                    <AccordionButton display="flex" justifyContent="space-between" pl={0}>
                        <Heading fontSize="22px" fontFamily="Montserrat" color="#494E5F">
                            {studiesName}
                        </Heading>
                        <Box Box display="flex">
                            <Text fontFamily="Montserrat" color="#494E5F" fontSize="22px" mr={1}>
                                {years}
                            </Text>
                            <Center>
                                <AccordionIcon />
                            </Center>
                        </Box>
                    </AccordionButton>
                    <AccordionPanel>
                        <Text fontFamily="Montserrat" color="#494E5F">{additional}</Text>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </ListItem>
    }

    return <Box p="5">
        <Header title={title} />
        <Heading fontSize="24px" fontFamily="Montserrat" color="#494E5F" pt="3" pb="3">
            Uniwersytet Szczeciński
        </Heading>
        <UnorderedList pl="3">
            {studies.map((study) => {
                return studiesDisplay((study.department), (study.studiesName), (study.years), (study.additional))
            }
            )
            }
        </UnorderedList>
    </Box>
}