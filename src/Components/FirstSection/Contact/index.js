import { Box, Text, List, ListItem, Link } from "@chakra-ui/react";
import {
  faPhone,
  faEnvelope,
  faLocationPin,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { SectionHeader } from "../Styling";

function contactDisplay(icon, information) {
  return (
    <ListItem display="flex" alignItems="center">
      <FontAwesomeIcon icon={icon} color="white" width="16px" height="16px" />
      <Text color="brand.firstSectionText" pl="10">
        {information}
      </Text>
    </ListItem>
  );
}

export function Contact({ title }) {
  return (
    <Box>
      <SectionHeader title={title} />
      <List pb="10">
        {contactDisplay(faPhone, "668 954 072")}
        <Link href="https://a-zajonc.github.io/portfolio/">
          {contactDisplay(
            faLaptopCode,
            "https://a-zajonc.github.io/portfolio/"
          )}
        </Link>
        {contactDisplay(faEnvelope, "slaboszadriana@gmail.com")}
        <Link href="https://github.com/a-zajonc">
          {contactDisplay(faGithub, "https://github.com/a-zajonc")}
        </Link>
        {contactDisplay(faLocationPin, "Szczecin")}
      </List>
    </Box>
  );
}
