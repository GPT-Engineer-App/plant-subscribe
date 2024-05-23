import { Box, Button, Container, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="green.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">Plant Shop</Heading>
        <HStack spacing={8}>
          <Link to="/">Home</Link>
          <Link to="/plans">Subscription Plans</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex
        as="section"
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        bg="green.100"
        p={8}
        mt={4}
        borderRadius="md"
      >
        <VStack align="start" spacing={4} maxW="lg">
          <Heading as="h2" size="xl">Bring Nature to Your Home</Heading>
          <Text fontSize="lg">Subscribe to receive a beautiful plant cutting every month.</Text>
          <Button colorScheme="green" size="lg">Subscribe Now</Button>
        </VStack>
        <Image src="/images/hero-plant.jpg" alt="Hero Plant" boxSize="300px" objectFit="cover" borderRadius="md" />
      </Flex>

      {/* Subscription Plans Section */}
      <Box as="section" p={8} mt={4}>
        <Heading as="h3" size="lg" mb={4}>Our Subscription Plans</Heading>
        <Flex direction={{ base: "column", md: "row" }} justify="space-around">
          <VStack bg="white" p={4} borderRadius="md" boxShadow="md" spacing={4} maxW="sm">
            <Heading as="h4" size="md">Basic Plan</Heading>
            <Text>$10/month</Text>
            <Text>Receive one plant cutting every month.</Text>
            <Button colorScheme="green">Choose Plan</Button>
          </VStack>
          <VStack bg="white" p={4} borderRadius="md" boxShadow="md" spacing={4} maxW="sm">
            <Heading as="h4" size="md">Premium Plan</Heading>
            <Text>$20/month</Text>
            <Text>Receive two plant cuttings every month.</Text>
            <Button colorScheme="green">Choose Plan</Button>
          </VStack>
          <VStack bg="white" p={4} borderRadius="md" boxShadow="md" spacing={4} maxW="sm">
            <Heading as="h4" size="md">Deluxe Plan</Heading>
            <Text>$30/month</Text>
            <Text>Receive three plant cuttings every month.</Text>
            <Button colorScheme="green">Choose Plan</Button>
          </VStack>
        </Flex>
      </Box>

      {/* About Us Section */}
      <Box as="section" bg="green.50" p={8} mt={4} borderRadius="md">
        <Heading as="h3" size="lg" mb={4}>About Us</Heading>
        <Text fontSize="lg">
          We are passionate about bringing the beauty of nature into your home. Our plant shop offers a variety of plant cuttings that you can subscribe to and receive every month. Join our community of plant lovers today!
        </Text>
      </Box>

      {/* Contact Section */}
      <Box as="section" p={8} mt={4}>
        <Heading as="h3" size="lg" mb={4}>Contact Us</Heading>
        <VStack as="form" spacing={4} maxW="lg">
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button colorScheme="green" type="submit">Send Message</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;