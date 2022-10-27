import { Box, Image, Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export function LanguageChange() {
  const { t, i18n } = useTranslation();

  const lngs = {
    pl: {
      img: (
        <Image
          src="https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg"
          alt={t("polishFlag")}
          maxH="30px"
          maxW="50px"
        />
      ),
    },
    en: {
      img: (
        <Image
          src="https://seeklogo.com/images/U/United_Kingdom_Flag-logo-418BAEEF32-seeklogo.com.png"
          alt={t("englishFlag")}
          maxH="30px"
          maxW="50px"
        />
      ),
    },
  };

  return (
    <Box display="grid" justifyItems="end" mt="5px" mr="10px">
      <div>
        {Object.keys(lngs).map((lng) => (
          <Button
            bg="brand.firstSectionHeading"
            mr="5px"
            maxH="40px"
            maxW="60px"
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].img}
          </Button>
        ))}
      </div>
    </Box>
  );
}
