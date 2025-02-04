import React, { useState } from 'react';
import { VerticalNavbarComponents } from "../components/VerticalNavbarComponents";
import { Box, Flex, Button, Text, VStack, Heading, useTabs } from "@chakra-ui/react";
import { Footer } from '@dimiceli-ui/footer';

export const FooterPage = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const toast = useTabs();
    const codeSnippet = `export const Footer = () => {
  return (
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between">
          <div>
            <h4 className="font-bold text-sm mb-2">Home</h4>
            <nav className="space-y-1">
              <a href="#" className="text-xs text-gray-400 hover:text-white block">Chi Siamo</a>
              <a href="#" className="text-xs text-gray-400 hover:text-white block">Ultime Novità</a>
            </nav>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-2">Servizi</h4>
            <nav className="space-y-1">
              <a href="#" className="text-xs text-gray-400 hover:text-white block">Sviluppo Web</a>
              <a href="#" className="text-xs text-gray-400 hover:text-white block">Consulenza IT</a>
            </nav>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-2">Contatti</h4>
            <nav className="space-y-1">
              <a href="#" className="text-xs text-gray-400 hover:text-white block">Supporto</a>
              <a href="#" className="text-xs text-gray-400 hover:text-white block">Invia Messaggio</a>
            </nav>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-xs text-gray-400">© 2025 Tutti i diritti riservati</p>
        </div>
      </footer>
  );
}`.trim();

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
                <VerticalNavbarComponents style={{width: "20%"}}/>
                <Box flex="1" p={8} marginTop="5%">
                    <VStack gap={6} align="stretch">
                        <Heading size="lg" textAlign="center" color="gray.200">
                            Button Showcase
                        </Heading>

                        <Flex justifyContent="center">
                            <Footer />
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
        </>
    )
}