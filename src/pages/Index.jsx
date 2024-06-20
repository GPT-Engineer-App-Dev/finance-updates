import { Box, Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Financial News
        </Heading>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Headlines
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Headline 1</Heading>
              <Text mt={4}>Summary of the first headline...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Headline 2</Heading>
              <Text mt={4}>Summary of the second headline...</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Market Data
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Market 1</Heading>
              <Text mt={4}>Details about market 1...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Market 2</Heading>
              <Text mt={4}>Details about market 2...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Market 3</Heading>
              <Text mt={4}>Details about market 3...</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Featured Articles
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Article 1</Heading>
              <Text mt={4}>Summary of the first article...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Article 2</Heading>
              <Text mt={4}>Summary of the second article...</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;