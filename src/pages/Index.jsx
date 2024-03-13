import React from "react";
import { Box, Container, Flex, Input, Button, Text, Stack, Avatar, IconButton, useColorMode, useColorModeValue, Spacer, Heading } from "@chakra-ui/react";
import { FaSun, FaMoon, FaTwitter, FaFeatherAlt, FaHashtag, FaRegBell, FaRegEnvelope, FaRegBookmark, FaUserAlt } from "react-icons/fa";

// Helper component for navigation items
const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Flex align="center" px="4" pl="4" py="3" cursor="pointer" color="gray.500" _hover={{ bg: useColorModeValue("gray.100", "gray.900"), color: useColorModeValue("gray.700", "gray.200") }} role="group" fontWeight="semibold" transition=".15s ease" {...rest}>
      {icon && <Box mr="4" as={icon} />}
      {children}
    </Flex>
  );
};

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Container maxW="container.xl" p={0}>
      <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
        {/* Left Navigation */}
        <Box position="fixed" left="0" width="250px" top="0" bottom="0" overflowY="auto" borderRightWidth="1px">
          <Flex direction="column" as="nav" fontSize="sm" color="gray.600" aria-label="Main Navigation">
            <NavItem icon={FaTwitter}>
              <FaTwitter size="28" />
            </NavItem>
            <NavItem icon={FaHashtag}>Explore</NavItem>
            <NavItem icon={FaRegBell}>Notifications</NavItem>
            <NavItem icon={FaRegEnvelope}>Messages</NavItem>
            <NavItem icon={FaRegBookmark}>Bookmarks</NavItem>
            <NavItem icon={FaUserAlt}>Profile</NavItem>
            <NavItem icon={FaFeatherAlt}>Tweet</NavItem>
            <Spacer />
            <NavItem onClick={toggleColorMode}>
              Switch to {useColorModeValue("dark", "light")} mode
              {useColorModeValue(<FaMoon />, <FaSun />)}
            </NavItem>
          </Flex>
        </Box>

        {/* Main Content */}
        <Box flex="1" p={8} ml={{ base: 0, md: 250 }}>
          <Flex direction="column">
            <Heading as="h1" size="lg" mb="6">
              Home
            </Heading>
            {/* New Tweet Input */}
            <Box bg={formBackground} p={4} borderRadius="lg" mb={4}>
              <Stack spacing={4} direction="row">
                <Avatar name="Ryan Florence" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9maWxlfGVufDB8fHx8MTcxMDI4ODg3N3ww&ixlib=rb-4.0.3&q=80&w=1080" />
                <Input placeholder="What's happening?" />
              </Stack>
              <Button mt={4} type="submit" colorScheme="twitter">
                Tweet
              </Button>
            </Box>
            {/* Feed */}
            <Stack spacing={3}>
              {/* Example Tweet */}
              <Flex bg={formBackground} p={4} borderRadius="lg" align="center">
                <Avatar name="Kent Dodds" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwcm9maWxlfGVufDB8fHx8MTcxMDI4ODg3N3ww&ixlib=rb-4.0.3&q=80&w=1080" />
                <Box ml="3">
                  <Text fontWeight="bold">Kent Dodds</Text>
                  <Text fontSize="sm" color="gray.500">
                    @kentcdodds
                  </Text>
                  <Text mt="1">Really excited about the new updates coming to react!</Text>
                </Box>
              </Flex>
              {/* Example Tweet */}
              <Flex bg={formBackground} p={4} borderRadius="lg" align="center">
                <Avatar name="Dan Abramov" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxwcm9maWxlfGVufDB8fHx8MTcxMDI4ODg3N3ww&ixlib=rb-4.0.3&q=80&w=1080" />
                <Box ml="3">
                  <Text fontWeight="bold">Dan Abramov</Text>
                  <Text fontSize="sm" color="gray.500">
                    @dan_abramov
                  </Text>
                  <Text mt="1">Hooks are the future!</Text>
                </Box>
              </Flex>
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
