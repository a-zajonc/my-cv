import { Box } from '@chakra-ui/react';
import { Education } from './Education';
import { Employment } from './Employment';
import { Hobbies } from './Hobbies';
import { useTranslation } from 'react-i18next';

export function SecondSection() {

    const { t } = useTranslation();

    return <Box width="60%">
        <Employment title={t("workTitle")} work={t('work', { returnObjects: true })} />
        <Education title={t("educationTitle")} studies={t('studies', { returnObjects: true })} />
        <Hobbies title={t("hobbiesTitle")} hobbies={t('hobbies', { returnObjects: true })} />
    </Box>
}