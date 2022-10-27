import { Text, Box } from "@chakra-ui/react";
import { SectionHeader } from "../Styling";

export function About({ title, about }) {
  return (
    <Box>
      <SectionHeader title={title} />
      <Text
        color="brand.firstSectionText"
        fontSize={{ sm: "15px", lg: "16px" }}
        fontWeight="100"
        pb="25px"
      >
        {about}
      </Text>
    </Box>
  );
}
