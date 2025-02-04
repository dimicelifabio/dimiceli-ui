import { Box, Grid, Image, Text, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const CardComponents = () => {
    const cardDetails = [
        {
            title: "Button",
            description: "1 componente",
            img: "/button.png",
            root: "/button",
        },
        {
            title: "Form",
            description: "4 componenti",
            img: "/form.png",
            root: "/form",
        },
        {
            title: "Footer",
            description: "2 componenti",
            img: "/footer.png",
            root: "/footer",
        },
        {
            title: "Grid",
            description: "3 componenti",
            img: "/grid.png",
            root: "/grid",
        },
        {
            title: "Header",
            description: "2 componenti",
            img: "/header.png",
            root: "/header",
        },
        {
            title: "Searchbar",
            description: "1 componente",
            img: "/searchbar.png",
            root: "/searchbar",
        }
    ];

    return (
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
            {cardDetails.map((card, index) => (
                <Link to={card.root} key={index} style={{ textDecoration: "none" }}>
                    <Box
                        maxW="xs"
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        bg="white"
                        boxShadow="md"
                        transition="all 0.3s ease-in-out"
                        bgColor="gray.200"
                        _hover={{
                            transform: "scale(1.05)",
                            boxShadow: "xl",
                        }}
                    >
                        <Flex direction="column" h="full">
                            <Box>
                                <Image
                                    src={card.img}
                                    alt={card.title}
                                    objectFit="cover"
                                    h="200px"
                                    w="full"
                                />
                            </Box>
                            <Box p="6" flex="1">
                                <Text fontSize="xl" fontWeight="semibold" lineHeight="short" mb={2}>
                                    {card.title}
                                </Text>
                                <Text color="gray.500" mb={4}>
                                    {card.description}
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                </Link>
            ))}
        </Grid>
    );
};
