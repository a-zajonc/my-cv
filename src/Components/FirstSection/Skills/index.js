import { Box, UnorderedList, ListItem } from '@chakra-ui/react';
import { SectionHeader } from '../Styling';

export function Skills({ skills, title }) {
    const skillsDisplay = (skill) => {
        return <ListItem fontFamily="Montserrat" color="white">{skill}</ListItem>
    }

    return <Box>
        <SectionHeader title={title} />
        <UnorderedList pb="10" fontSize="15px" fontWeight="100">
            {
                skills.map((skill) => {
                    return skillsDisplay(skill)
                })
            }
        </UnorderedList>
    </Box>
}




