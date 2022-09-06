import { Box, Image, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';


const lngs = {
    pl: { img: <Image src="https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg" alt='Polska Flaga' maxH="30px" maxW="50px" /> },
    en: { img: <Image src="https://seeklogo.com/images/U/United_Kingdom_Flag-logo-418BAEEF32-seeklogo.com.png" alt="Brytyjska Flaga" maxH="30px" maxW="50px" /> }
};

export function LanguageChange() {

    const { t, i18n } = useTranslation();

    return <Box display="grid" justifyItems="end" mt="1" mr="2">
        <div>
            {Object.keys(lngs).map((lng) => (
                <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                    <Button bg="#FFE7D4" mr="1">{lngs[lng].img}</Button>
                </button>
            ))}
        </div>
    </Box>
}      