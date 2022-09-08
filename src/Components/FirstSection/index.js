import { Box, Center } from '@chakra-ui/react';
import { PortfolioImage } from './Image';
import { NameHeader } from './NameHeader';
import { About } from './About';
import { Skills } from './Skills';
import { Contact } from './Contact';
import { useTranslation } from 'react-i18next';


export function FirstSection() {

    const { t } = useTranslation();

    return <Box p={20} bg="#494E5F" width="35%" ml="10" mb="10">
        <Center>
            <PortfolioImage />
        </Center>
        <NameHeader />
        <About title={t("aboutTitle")} about={t('about')} />
        <Skills title={t("skillsTitle")} skills={t('skills', { returnObjects: true })} />
        <Contact title={t("contactTitle")} />
    </Box>
} 