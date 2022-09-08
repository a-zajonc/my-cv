import { Heading } from "@chakra-ui/react"

export function SectionHeader({ title }) {
    return <Heading color="brand.firstSectionHeading" textTransform="uppercase" pb="5">{title}</Heading>
}