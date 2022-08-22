import { Image } from '@chakra-ui/react';
import PortfolioPicture from './imgPortfolio.jpg'

export function PortfolioImage() {
    return <Image src={PortfolioPicture} maxH="300px" borderRadius='150' />
}
