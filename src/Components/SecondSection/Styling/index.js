import { Box, Heading } from "@chakra-ui/react";

export function Header({ title }) {
  return (
    <Box bg="brand.firstSectionHeading" p={{ sm: "10px", lg: "20px" }}>
      <Heading
        fontSize={{ sm: "27px", lg: "35px" }}
        color="brand.secondSection"
        textTransform="uppercase"
      >
        {title}
      </Heading>
    </Box>
  );
}
