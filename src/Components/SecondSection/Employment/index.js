import { Heading, Box, UnorderedList, ListItem, Accordion, AccordionButton, AccordionItem, AccordionIcon, AccordionPanel } from '@chakra-ui/react';

export function Employment() {

    return <Box p="5">
        <Box bg="#FFE7D4" p="4">
            <Heading as="h1" fontFamily="Montserrat" color="#494E5F" textTransform="uppercase" >Historia zatrudnienia</Heading>
        </Box>
        <Accordion allowMultiple >
            <AccordionItem border="none" pt={3}>
                <AccordionButton pl={0}>
                    <Heading fontSize="24px" fontFamily="Montserrat" color="#494E5F" flex='1' textAlign='left'>
                        Kierownik Działu w H&M
                    </Heading>
                    <AccordionIcon />
                </AccordionButton>
                <Heading fontSize="14px" fontFamily="Montserrat" color="#494E5F" fontWeight="300">
                    Centrum Handlowe Marino, Wrocław (06.2018 - 08.2020, w tym Urlop Macierzyński: 08.2019-08.2020)
                </Heading>
                <AccordionPanel>
                    <UnorderedList color="#494E5F">
                        <ListItem fontFamily="Montserrat">Rekrutacja, szkolenia, ocena i rozwój doradców sprzedaży w zespole</ListItem>
                        <ListItem fontFamily="Montserrat">Zarządzanie zespołem wraz z planowaniem czasu pracy sobie i innym członkom zespołu</ListItem>
                        <ListItem fontFamily="Montserrat">Nadzorowanie pracy oraz przekazywanie feedbacków</ListItem>
                        <ListItem fontFamily="Montserrat">Inicjowanie oraz kontrolowanie działań mających na celu zapewnienie zysku i zapobieganie stratom</ListItem>
                        <ListItem fontFamily="Montserrat">Umiejętność planowania i reagowania na dynamicznie rozwijające się sytuacje poprzez ustalanie odpowiednich priorytetów</ListItem>
                        <ListItem fontFamily="Montserrat"> Analiza i reakcja na raporty sprzedaży</ListItem>
                    </UnorderedList>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem border="none" pt={3}>
                <AccordionButton pl={0} >
                    <Heading fontSize="24px" fontFamily="Montserrat" color="#494E5F" flex='1' textAlign='left'>
                        Lider Zmiany w H&M
                    </Heading>
                    <AccordionIcon />
                </AccordionButton>
                <Heading fontSize="14px" fontFamily="Montserrat" color="#494E5F" fontWeight="300" >
                    Szczecin (02.2018 - 05.2018)
                </Heading>
                <AccordionPanel>
                    <UnorderedList color="#494E5F">
                        <ListItem fontFamily="Montserrat">Wdrażanie nowych pracowników</ListItem>
                        <ListItem fontFamily="Montserrat">Zarządzanie zespołem</ListItem>
                        <ListItem fontFamily="Montserrat">Bezpośrednia i pośrednia obsługa klienta</ListItem>
                        <ListItem fontFamily="Montserrat">Wykonywanie zadań związanych z operacjami gotówkowymi oraz księgowością</ListItem>
                    </UnorderedList>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem border="none" pt={3}>
                <AccordionButton pl={0}>
                    <Heading fontSize="24px" fontFamily="Montserrat" color="#494E5F" flex='1' textAlign='left'>
                        Doradca Sprzedaży w H&M
                    </Heading>
                    <AccordionIcon />
                </AccordionButton>
                <Heading fontSize="14px" fontFamily="Montserrat" color="#494E5F" fontWeight="300">
                    Centrum Handlowe Galaxy, Szczecin (07.2015 - 05.2018)
                </Heading>
                <AccordionPanel>
                    <UnorderedList color="#494E5F">
                        <ListItem fontFamily="Montserrat">Obsługa klienta</ListItem>
                        <ListItem fontFamily="Montserrat">Obsługa kasy</ListItem>
                        <ListItem fontFamily="Montserrat">Praca z towarem</ListItem>
                        <ListItem fontFamily="Montserrat">Praca zespołowa</ListItem>
                    </UnorderedList>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem border="none" pt={3}>
                <AccordionButton pl={0}>
                    <Heading fontSize="24px" fontFamily="Montserrat" color="#494E5F" flex='1' textAlign='left'>
                        Kasjer-Sprzedawca w Reserved
                    </Heading>
                    <AccordionIcon />
                </AccordionButton>
                <Heading fontSize="14px" fontFamily="Montserrat" color="#494E5F" fontWeight="300">
                    Centrum Handlowe Kaskada, Szczecin (03.2014 - 06.2015)
                </Heading>
                <AccordionPanel>
                    <UnorderedList color="#494E5F">
                        <ListItem fontFamily="Montserrat">Coś</ListItem>
                        <ListItem fontFamily="Montserrat">Po</ListItem>
                        <ListItem fontFamily="Montserrat">zmie</ListItem>
                        <ListItem fontFamily="Montserrat">niać!</ListItem>
                    </UnorderedList>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem border="none" pt={3}>
                <AccordionButton pl={0}>
                    <Heading fontSize="24px" fontFamily="Montserrat" color="#494E5F" flex='1' textAlign='left'>
                        Barmanka
                    </Heading>
                    <AccordionIcon />
                </AccordionButton>
                <Heading fontSize="14px" fontFamily="Montserrat" color="#494E5F" fontWeight="300">
                    Restauracja Bombay, Szczecin (10.2013 - 02.2014)
                </Heading>
                <AccordionPanel>
                    <UnorderedList color="#494E5F">
                        <ListItem fontFamily="Montserrat">Coś</ListItem>
                        <ListItem fontFamily="Montserrat">Po</ListItem>
                        <ListItem fontFamily="Montserrat">zmie</ListItem>
                        <ListItem fontFamily="Montserrat">niać!</ListItem>
                    </UnorderedList>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </Box>
}

