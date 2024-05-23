import { Box, Button, Container, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="green.600" color="white" p={4} justify="space-between" align="center">
        <Heading size="md">Plant Shop</Heading>
        <HStack spacing={8}>
          <Link to="/">Home</Link>
          <Link to="/subscription-plans">Subscription Plans</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box bg="green.100" py={20} textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>Bring Nature to Your Home</Heading>
        <Text fontSize="xl" mb={6}>Subscribe to receive a plant cutting every month.</Text>
        <Button colorScheme="green" size="lg">Subscribe Now</Button>
      </Box>

      {/* Subscription Plans Section */}
      <Box py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={10}>Our Subscription Plans</Heading>
        <Flex justify="center" wrap="wrap" spacing={10}>
          <VStack bg="white" p={5} m={5} borderRadius="md" boxShadow="md" maxW="sm">
            <Image src="/images/plant1.jpg" alt="Plant 1" borderRadius="md" />
            <Heading as="h3" size="md">Basic Plan</Heading>
            <Text>$10/month</Text>
            <Button colorScheme="green">Subscribe</Button>
          </VStack>
          <VStack bg="white" p={5} m={5} borderRadius="md" boxShadow="md" maxW="sm">
            <Image src="/images/plant2.jpg" alt="Plant 2" borderRadius="md" />
            <Heading as="h3" size="md">Standard Plan</Heading>
            <Text>$20/month</Text>
            <Button colorScheme="green">Subscribe</Button>
          </VStack>
          <VStack bg="white" p={5} m={5} borderRadius="md" boxShadow="md" maxW="sm">
            <Image src="/images/plant3.jpg" alt="Plant 3" borderRadius="md" />
            <Heading as="h3" size="md">Premium Plan</Heading>
            <Text>$30/month</Text>
            <Button colorScheme="green">Subscribe</Button>
          </VStack>
        </Flex>
      </Box>

      {/* About Us Section */}
      <Box bg="green.50" py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={10}>About Us</Heading>
        <Text fontSize="lg" maxW="3xl" mx="auto">
          We are passionate about bringing the beauty of nature into your home. Our plant shop offers a variety of subscription plans to suit your needs. Join us in our mission to make the world greener, one plant at a time.
        </Text>
      </Box>

      {/* Contact Section */}
      <Box py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={10}>Contact Us</Heading>
        <VStack as="form" spacing={4} maxW="md" mx="auto">
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