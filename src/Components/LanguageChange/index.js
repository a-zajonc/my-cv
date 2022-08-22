import { Box, Image, HStack } from '@chakra-ui/react';

export function LanguageChange() {
    return <Box display="grid" justifyItems="end" mt="1" mr="2">
        <HStack>
            <Image src="https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg" alt='Polska Flaga' maxH="30px" maxW="50px" />
            <Image src="https://seeklogo.com/images/U/United_Kingdom_Flag-logo-418BAEEF32-seeklogo.com.png" alt="Brytyjska Flaga" maxH="30px" maxW="50px" />
        </HStack>
    </Box>
}   