import { Heading, Box } from "@chakra-ui/react";

export function NameHeader() {
  return (
    <Box pt={15} pb={20}>
      <Heading
        color="brand.firstSectionHeading"
        textTransform="uppercase"
        fontSize={{ sm: "32px", md: "60px", lg: "60px" }}
        ml={{ sm: "40px", md: "", lg: "30px" }}
      >
        Adriana Słabosz
      </Heading>
      <Box
        bg="brand.firstSectionHeading"
        width="100%"
        height={{ sm: "2px", md: "5px", lg: "5px" }}
        ml="10px"
      />
    </Box>
  );
}
