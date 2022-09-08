import { Heading, Box, UnorderedList, ListItem, Accordion, AccordionButton, AccordionItem, AccordionIcon, AccordionPanel } from '@chakra-ui/react';
import { Header } from '../Styling';

function workplaceDisplay(jobTitle, jobPlace, jobExperience) {
    return <AccordionItem border="none" pt={3}>
        <AccordionButton pl={0}>
            <Heading fontSize="24px" color="#494E5F" flex='1' textAlign='left'>
                {jobTitle}
            </Heading>
            <AccordionIcon />
        </AccordionButton>
        <Heading fontSize="14px" color="#494E5F" fontWeight="300">
            {jobPlace}
        </Heading>
        <AccordionPanel>
            <UnorderedList color="#494E5F">
                {jobExperience.map((experience) => {
                    return <ListItem>{experience}</ListItem>
                }
                )}
            </UnorderedList>
        </AccordionPanel>
    </AccordionItem>

}

export function Employment({ work, title }) {

    return <Box p="5">
        <Header title={title} />
        <Accordion allowMultiple>
            {work.map((job) => {
                return workplaceDisplay((job.jobTitle), (job.place), (job.jobDescription))
            }
            )}
        </Accordion>
    </Box>
}

