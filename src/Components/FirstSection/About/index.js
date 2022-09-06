import { Text, Box } from '@chakra-ui/react';
import { about } from '../../../database';
import { SectionHeader } from '../Styling';
import { useTranslation } from 'react-i18next';

export function About() {

    const { t } = useTranslation();

    return <Box>
        <SectionHeader title="O mnie" />
        <Text fontFamily="Montserrat" color="white" fontSize="15px" fontWeight="100" pb="10" >
            {t('about')}
            {/* {about} */}
        </Text>
    </Box>
}
