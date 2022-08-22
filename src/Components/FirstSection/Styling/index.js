import { Heading } from "@chakra-ui/react"

export function SectionHeader({ title }) {
    return <Heading fontFamily="Montserrat" color="#FFE7D4" textTransform="uppercase" pb="5">{title}</Heading>
}