import {
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Center,
} from "@chakra-ui/react";
import { Header } from "../Styling";

function studiesDisplay(department, studiesName, years, additional) {
  return (
    <ListItem>
      <Text fontSize="14px" color="#494E5F" fontWeight="300">
        {department}
      </Text>
      <Accordion allowMultiple>
        <AccordionItem border="none">
          <AccordionButton display="flex" justifyContent="space-between" pl={0}>
            <Heading fontSize={{ sm: "18px", lg: "22px" }} color="#494E5F">
              {studiesName}
            </Heading>
            <Box display="flex" flexDirection="row">
              <Text
                color="#494E5F"
                fontSize={{ sm: "16px", lg: "22px" }}
                mr={1}
              >
                {years}
              </Text>
              <Center>
                <AccordionIcon />
              </Center>
            </Box>
          </AccordionButton>
          <AccordionPanel>
            <Text color="#494E5F">{additional}</Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </ListItem>
  );
}

export function Education({ studies, title }) {
  return (
    <Box p="5">
      <Header title={title} />
      <Heading fontSize="24px" color="#494E5F" pt="15px" pb="15px">
        Uniwersytet Szczeciński
      </Heading>
      <UnorderedList pl="10px">
        {studies.map((study) => {
          return studiesDisplay(
            study.department,
            study.studiesName,
            study.years,
            study.additional
          );
        })}
      </UnorderedList>
    </Box>
  );
}
