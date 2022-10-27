import { Box, UnorderedList, ListItem } from "@chakra-ui/react";
import { Header } from "../Styling";

export function Hobbies({ hobbies, title }) {
  return (
    <Box p="5">
      <Header title={title} />
      <UnorderedList
        fontFamily="Montserrat"
        color="#494E5F"
        pt="10px"
        pl="10px"
        fontSize={{ sm: "15px", lg: "18px" }}
      >
        {hobbies.map((hobby) => {
          return <ListItem p="5px">{hobby}</ListItem>;
        })}
      </UnorderedList>
    </Box>
  );
}
