import React, { useState } from 'react';
import { VerticalNavbarComponents } from "../components/VerticalNavbarComponents";
import { Box, Flex, Button, Text, VStack, Heading, useTabs } from "@chakra-ui/react";
import { SearchBar } from '@dimiceli-ui/searchBar';

export const SearchbarPage = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const toast = useTabs();
    const codeSnippet = `<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
    </button>`.trim();

    const handleCopy = () => {
        try {
            navigator.clipboard.writeText(codeSnippet);
            setHasCopied(true);
            setTimeout(() => setHasCopied(false), 2000);
            toast({
                title: "Copied to clipboard",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
        } catch (err) {
            toast({
                title: "Failed to copy",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        }
    };
    return (
        <>
            <Flex minH="100vh" bg="gray.900" color="white">
                <VerticalNavbarComponents style={{ width: "20%" }} />
                <Box flex="1" p={8} marginTop="5%">
                    <VStack gap={6} align="stretch">
                        <Heading size="lg" textAlign="center" color="gray.200">
                            SearchBar Showcase
                        </Heading>

                        <Flex justifyContent="center">
                            <SearchBar />
                        </Flex>

                        <Box
                            bg="gray.800"
                            borderRadius="md"
                            p={4}
                            position="relative"
                        >
                            <Text
                                as="pre"
                                fontFamily="mono"
                                whiteSpace="pre-wrap"
                                color="gray.300"
                                lineHeight={1.6}
                                mb={4}
                            >
                                {codeSnippet}
                            </Text>
                            <Button
                                size="sm"
                                position="absolute"
                                bottom={2}
                                right={2}
                                colorScheme={hasCopied ? "green" : "blue"}
                                onClick={handleCopy}
                            >
                                {hasCopied ? "Copied" : "Copy"}
                            </Button>
                        </Box>
                    </VStack>
                </Box>
            </Flex>
            );
        </>
    )
}