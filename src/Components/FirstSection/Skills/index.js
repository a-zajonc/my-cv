import { Box, UnorderedList, ListItem } from "@chakra-ui/react";
import { SectionHeader } from "../Styling";

const skillsDisplay = (skill) => {
  return <ListItem color="brand.firstSectionText">{skill}</ListItem>;
};

export function Skills({ skills, title }) {
  return (
    <Box>
      <SectionHeader title={title} />
      <UnorderedList
        pb="25px"
        fontSize={{ sm: "15px", lg: "16px" }}
        fontWeight="100"
      >
        {skills.map((skill) => {
          return skillsDisplay(skill);
        })}
      </UnorderedList>
    </Box>
  );
}
