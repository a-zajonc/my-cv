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
    <ListItem
      display="flex"
      alignItems="center"
      pb={{ sm: "20px", lg: "10px" }}
    >
      <FontAwesomeIcon icon={icon} color="white" width="16px" height="16px" />
      <Text
        color="brand.firstSectionText"
        pl={{ sm: "15px", lg: "30px" }}
        fontSize={{ sm: "15px", lg: "16px" }}
      >
        {information}
      </Text>
    </ListItem>
  );
}

export function Contact({ title }) {
  return (
    <Box>
      <SectionHeader title={title} />
      <List pb={{ sm: "10px", lg: "10px" }}>
        <Link href="tel:668954072">
          {contactDisplay(faPhone, "668 954 072")}
        </Link>
        <Link href="mailto:slaboszadriana@gmail.com">
          {contactDisplay(faEnvelope, "slaboszadriana@gmail.com")}
        </Link>
        <Link href="https://a-zajonc.github.io/portfolio/">
          {contactDisplay(
            faLaptopCode,
            "https://a-zajonc.github.io/portfolio/"
          )}
        </Link>
        <Link href="https://github.com/a-zajonc">
          {contactDisplay(faGithub, "https://github.com/a-zajonc")}
        </Link>
        {contactDisplay(faLocationPin, "Szczecin")}
      </List>
    </Box>
  );
}
