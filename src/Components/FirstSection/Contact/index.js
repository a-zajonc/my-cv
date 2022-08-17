import { Heading, Box, Text, List, ListItem } from '@chakra-ui/react';
import { faPhone, faEnvelope, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'


export function Contact() {
    return <Box>
        <Heading fontFamily="Montserrat" color="#FFE7D4" textTransform="uppercase">Dane kontaktowe</Heading>
        <List>
            <ListItem display="flex" alignItems="center">
                <FontAwesomeIcon icon={faPhone} color="white" />
                <Text fontFamily="Montserrat" color="white" pl="10">
                    668 954 072
                </Text>
            </ListItem>
            <ListItem display="flex" alignItems="center">
                <FontAwesomeIcon icon={faGithub} color="white" />
                <Text fontFamily="Montserrat" color="white" pl="10">
                    https://github.com/a-zajonc
                </Text>
            </ListItem>
            <ListItem display="flex" alignItems="center">
                <FontAwesomeIcon icon={faEnvelope} color="white" />
                <Text fontFamily="Montserrat" color="white" pl="10">
                    slaboszadriana@gmail.com
                </Text>
            </ListItem>
            <ListItem display="flex" alignItems="center">
                <FontAwesomeIcon icon={faLocationPin} color="white" />
                <Text fontFamily="Montserrat" color="white" pl="10">
                    Szczecin
                </Text>
            </ListItem>
        </List>
    </Box>
}

/* <FontAwesomeIcon icon={faGithub} color="white" /> */