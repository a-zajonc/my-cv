import { Image } from "@chakra-ui/react";
import PortfolioPicture from "./imgPortfolio.jpg";

export function PortfolioImage() {
  return (
    <Image
      src={PortfolioPicture}
      alt="Adriana Słabosz"
      maxH={{ sm: "150px", md: "200px", lg: "300px" }}
      borderRadius="150"
    />
  );
}
