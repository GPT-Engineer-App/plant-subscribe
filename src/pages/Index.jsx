import { Container, Text, VStack, Box, Button, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Plant Shop
          </Heading>
        </Flex>
        <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
          <svg fill="white" width="12px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>
        <Box display={{ base: "none", md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
          <Flex align="center" justify="flex-end" direction={["column", "row", "row", "row"]} pt={[4, 4, 0, 0]}>
            <Link to="/" p={2}>
              Home
            </Link>
            <Link to="/subscription-plans" p={2}>
              Subscription Plans
            </Link>
            <Link to="/about-us" p={2}>
              About Us
            </Link>
            <Link to="/contact" p={2}>
              Contact
            </Link>
          </Flex>
        </Box>
      </Flex>

      {/* Hero Section */}
      <Box bg="green.100" w="100%" p={4} color="black" textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>
          Welcome to Plant Shop
        </Heading>
        <Text fontSize="xl" mb={4}>
          Subscribe to receive a plant cutting every month!
        </Text>
        <Button colorScheme="teal" size="lg">
          Subscribe Now
        </Button>
      </Box>

      {/* Subscription Plans Section */}
      <Box p={4} textAlign="center">
        <Heading as="h3" size="xl" mb={4}>
          Our Subscription Plans
        </Heading>
        <Stack direction={["column", "row"]} spacing="24px" justify="center">
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/plant1.jpg" alt="Plant 1" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Heading as="h4" size="md">
                  Basic Plan
                </Heading>
              </Box>
              <Text mt={2}>Receive one plant cutting every month.</Text>
              <Button mt={4} colorScheme="teal">
                Subscribe
              </Button>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/plant2.jpg" alt="Plant 2" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Heading as="h4" size="md">
                  Premium Plan
                </Heading>
              </Box>
              <Text mt={2}>Receive two plant cuttings every month.</Text>
              <Button mt={4} colorScheme="teal">
                Subscribe
              </Button>
            </Box>
          </Box>
        </Stack>
      </Box>

      {/* About Us Section */}
      <Box bg="gray.100" w="100%" p={4} color="black" textAlign="center">
        <Heading as="h3" size="xl" mb={4}>
          About Us
        </Heading>
        <Text fontSize="lg" mb={4}>
          We are passionate about plants and want to share the joy of growing them with you. Subscribe to receive a plant cutting every month and join our community of plant lovers!
        </Text>
      </Box>

      {/* Contact Section */}
      <Box p={4} textAlign="center">
        <Heading as="h3" size="xl" mb={4}>
          Contact Us
        </Heading>
        <form>
          <Stack spacing={3}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" />
            <Button colorScheme="teal" size="md">
              Send Message
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default Index;