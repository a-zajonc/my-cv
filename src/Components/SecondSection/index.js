import { Box } from '@chakra-ui/react';
import { Education } from './Education';
import { Employment } from './Employment';
import { Hobbies } from './Hobbies';
import { useTranslation } from 'react-i18next';

export function SecondSection() {

    const { t } = useTranslation();

    return <Box width="60%">
        <Employment />
        <Education />
        <Hobbies hobbies={t('hobbies', { returnObjects: true })} />
    </Box>
}

// i18next.t('hobbies', { returnObjects: true })