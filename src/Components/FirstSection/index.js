import { Box, Center } from "@chakra-ui/react";
import { PortfolioImage } from "./Image";
import { NameHeader } from "./NameHeader";
import { About } from "./About";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { useTranslation } from "react-i18next";

export function FirstSection() {
  const { t } = useTranslation();

  return (
    <Box
      p={{ sm: "25px", lg: "50px" }}
      bg="#494E5F"
      width={{ sm: "100%", lg: "35%" }}
      ml={{ sm: "0", lg: "40px" }}
      mb={{ sm: "1px", lg: "10px" }}
      mt="1px"
    >
      <Box
        display="flex"
        flexDirection={{ sm: "row", lg: "column" }}
        alignItems="center"
        justifyContent="space-between"
        mb="5px"
      >
        <PortfolioImage />
        <NameHeader />
      </Box>
      <About title={t("aboutTitle")} about={t("about")} />
      <Skills
        title={t("skillsTitle")}
        skills={t("skills", { returnObjects: true })}
      />
      <Contact title={t("contactTitle")} />
    </Box>
  );
}
