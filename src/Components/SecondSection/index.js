import { Box } from '@chakra-ui/react';
import { Education } from './Education';
import { Employment } from './Employment';
import { Hobbies } from './Hobbies';
import { useTranslation } from 'react-i18next';

export function SecondSection() {

    const { t } = useTranslation();

    return <Box width="60%">
        <Employment work={t('work', { returnObjects: true })} />
        <Education studies={t('studies', { returnObjects: true })} />
        <Hobbies hobbies={t('hobbies', { returnObjects: true })} />
    </Box>
}