import { Heading, Text, Box } from '@chakra-ui/react';

export function About() {
    return <Box>
        <Heading fontFamily="Montserrat" color="#FFE7D4" textTransform="uppercase" pb="5">O mnie</Heading>
        <Text fontFamily="Montserrat" color="white" fontSize="15px" fontWeight="100" pb="10" >
            Jestem osobą, która nie boi się wyzwań. Podjęcie się awansu w pracy z jednoczesnym studiowaniem czy przeprowadzka do innego miasta nie jest dla mnie większym problemem.             Podczas przebywania na urlopie macierzyńskim postanowiłam podjąć się kolejnego wyzwania, jakim jest nauka programowania. Zdecydowałam się na samodzielną naukę JavaScript, HTML oraz             CSS. Następnie wdrożyłam React, a niedawno zaczęłam korzystać z GitHuba oraz uczyć się Gita. Następnie w planach mam podjęcie się nauki TypeScripta.
        </Text>
    </Box>
}
