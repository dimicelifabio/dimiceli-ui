import React from 'react';
import { VerticalNavbarComponents } from '../components/VerticalNavbarComponents';
import { CardComponents } from '../components/CardComponents';
import { Box, Flex } from "@chakra-ui/react"; // Importa Flex e Box

export const ComponentsPage = () => {
    return (
        <Flex minH="100vh">
            {/* Navbar Verticale con larghezza del 20% */}

            <VerticalNavbarComponents style={{ width: "20%" }} />

            <Box w="80%" p={4} marginTop={"5%"} justifyContent={'space-around'}>
                <CardComponents />
            </Box>
        </Flex>
    );
};

export default ComponentsPage;
