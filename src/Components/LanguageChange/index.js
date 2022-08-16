import { Box, Image } from '@chakra-ui/react';

export function LanguageChange() {
    return <Box pos="absolute" top="0" right="0" p={2} marginRight={10}>
        <Image src="https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg" alt='Polska Flaga' height={20} width={30} p={2} />
        <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/255px-Flag_of_the_United_Kingdom.svg.png" alt="British Flag" height={20} width={30} p={2} />
    </Box>
}